import { randomBytes } from 'crypto';

import { InvitationStatusEnum, NotificationTypeEnum } from '@prisma/client';
import { StatusCodes } from 'http-status-codes';

import {
	ConflictException,
	ForbiddenException,
	NotFoundException,
	OptionalException,
	ResponseStatus,
	ServiceResponse,
} from '@/common';
import { RolesEnum } from '@/common/enums';
import { Exception } from '@/common/exceptions/base.exception';
import { appEnv } from '@/configs';

import { BoardMembersRepository } from '../boardMembers/boardMembers.repository';
import { BoardsRepository } from '../boards/boards.repository';
import { MailsService } from '../mails/mail.service';
import { NotificationRepository } from '../notifications';
import { ProjectMembersRepository } from '../projectMembers/projectMembers.repository';
import { ProjectsRepository } from '../projects/projects.repository';
import { RolesRepository } from '../roles/roles.repository';
import { UsersRepository } from '../users/users.repository';
import { InvitationResponseDto } from './dtos/responses';
import { InvitationRepository } from './invitation.repository';

export class InvitationService {
	constructor(
		private readonly invitationRepository = new InvitationRepository(),
		private readonly usersRepository = new UsersRepository(),
		private readonly projectMembersRepository = new ProjectMembersRepository(),
		private readonly boardMembersRepository = new BoardMembersRepository(),
		private readonly rolesRepository = new RolesRepository(),
		private readonly projectRepository = new ProjectsRepository(),
		private readonly boardsRepository = new BoardsRepository(),
		private readonly mailsService = new MailsService(),
		private readonly notificationRepository = new NotificationRepository(),
	) {}

	private normalizeEmail(email: string): string {
		return email.trim().toLowerCase();
	}

	private buildInvitationLink(token: string): string {
		const frontendOrigin = appEnv.CORS_ORIGIN.replace(/\/+$/g, '');
		return `${frontendOrigin}/invites/${token}`;
	}

	private buildInvitationExpiryDate(): Date {
		const expiresAt = new Date();
		expiresAt.setDate(expiresAt.getDate() + 7);
		return expiresAt;
	}

	private async createRecipientInvitationNotification(params: {
		recipientUserId: string;
		actorId: string;
		invitationId: string;
		title: string;
		message: string;
	}): Promise<void> {
		await this.notificationRepository.createNotification({
			userId: params.recipientUserId,
			actorId: params.actorId,
			invitationId: params.invitationId,
			type: NotificationTypeEnum.INVITATION_SENT,
			title: params.title,
			message: params.message,
		});
	}

	private async validateInvitationOwnership(token: string, userId: string) {
		const invitation = await this.invitationRepository.findByToken(token);
		if (!invitation) {
			throw new NotFoundException('Invalid or expired invitation token');
		}

		if (invitation.expiresAt < new Date()) {
			if (invitation.status === InvitationStatusEnum.PENDING) {
				await this.invitationRepository.updateStatus(
					invitation.id,
					InvitationStatusEnum.EXPIRED,
				);
			}
			throw new ConflictException('Invitation token has expired');
		}

		if (invitation.status !== InvitationStatusEnum.PENDING) {
			throw new ConflictException('Invitation already processed');
		}

		const user = await this.usersRepository.findUserById(userId);
		if (!user) {
			throw new NotFoundException('User not found');
		}

		if (this.normalizeEmail(user.email) !== this.normalizeEmail(invitation.email)) {
			throw new ForbiddenException();
		}

		return {
			invitation,
			user,
		};
	}

	async inviteUserToProject(
		projectId: string,
		inviterId: string,
		email: string,
		roleId: string,
	): Promise<ServiceResponse<InvitationResponseDto> | Exception> {
		if (!roleId) {
			throw new OptionalException(StatusCodes.BAD_REQUEST, 'Role is required');
		}

		const normalizedEmail = this.normalizeEmail(email);
		const existingUser = await this.usersRepository.findUser({
			email: normalizedEmail,
		});
		const project = await this.projectRepository.findProjectById({ id: projectId });
		if (!project) {
			throw new NotFoundException('Project not found');
		}

		if (existingUser) {
			const existingMember =
				await this.projectMembersRepository.isUserMemberOfProject(
					project.id,
					existingUser.id,
				);
			if (existingMember) {
				throw new ConflictException('User is already a member of the project');
			}
		}

		const duplicateInvitation =
			await this.invitationRepository.checkDuplicateInvitation({
				email: normalizedEmail,
				projectId: project.id,
			});

		if (duplicateInvitation) {
			throw new ConflictException(
				'An invitation has already been sent to this email for the project',
			);
		}

		const token = randomBytes(32).toString('hex');
		const expiresAt = this.buildInvitationExpiryDate();

		const invitation = await this.invitationRepository.create({
			projectId: project.id,
			email: normalizedEmail,
			token,
			roleId,
			inviterId,
			expiresAt,
		});

		const invitationLink = this.buildInvitationLink(token);
		await this.mailsService.sendEmail({
			recipients: [
				{
					address: normalizedEmail,
					name: existingUser?.name || 'User',
				},
			],
			subject: `Invitation to project: ${project.title}`,
			html: `You were invited to join project <b>${project.title}</b>. Click <a href="${invitationLink}">here</a> to review and accept the invitation. This invitation expires on ${expiresAt.toDateString()}.`,
		});

		if (existingUser) {
			await this.createRecipientInvitationNotification({
				recipientUserId: existingUser.id,
				actorId: inviterId,
				invitationId: invitation.id,
				title: 'New project invitation',
				message: `You have been invited to join project "${project.title}".`,
			});
		}

		return new ServiceResponse(
			ResponseStatus.Success,
			'Invitation sent successfully',
			new InvitationResponseDto({
				...invitation,
				projectId: invitation.projectId ?? undefined,
				boardId: invitation.boardId ?? undefined,
				inviterId,
			}),
			StatusCodes.CREATED,
		);
	}

	async inviteUserToBoard(
		boardId: string,
		inviterId: string,
		email: string,
		roleId: string,
	): Promise<ServiceResponse<InvitationResponseDto> | Exception> {
		if (!roleId) {
			throw new OptionalException(StatusCodes.BAD_REQUEST, 'Role is required');
		}

		const normalizedEmail = this.normalizeEmail(email);
		const existingUser = await this.usersRepository.findUser({
			email: normalizedEmail,
		});

		const board = await this.boardsRepository.findBoardByIdSimple(boardId);
		if (!board) {
			throw new NotFoundException('Board not found');
		}

		if (existingUser) {
			const existingMember = await this.boardMembersRepository.isUserMemberOfBoard(
				board.id,
				existingUser.id,
			);
			if (existingMember) {
				throw new ConflictException('User is already a member of the board');
			}
		}

		const duplicateInvitation =
			await this.invitationRepository.checkDuplicateInvitation({
				email: normalizedEmail,
				boardId: board.id,
			});

		if (duplicateInvitation) {
			throw new ConflictException(
				'An invitation has already been sent to this email for the board',
			);
		}

		const token = randomBytes(32).toString('hex');
		const expiresAt = this.buildInvitationExpiryDate();

		const invitation = await this.invitationRepository.create({
			boardId: board.id,
			email: normalizedEmail,
			token,
			roleId,
			inviterId,
			expiresAt,
		});

		const invitationLink = this.buildInvitationLink(token);
		await this.mailsService.sendEmail({
			recipients: [
				{
					address: normalizedEmail,
					name: existingUser?.name || 'User',
				},
			],
			subject: `Invitation to board: ${board.title}`,
			html: `You were invited to join board <b>${board.title}</b>. Click <a href="${invitationLink}">here</a> to review and accept the invitation. This invitation expires on ${expiresAt.toDateString()}.`,
		});

		if (existingUser) {
			await this.createRecipientInvitationNotification({
				recipientUserId: existingUser.id,
				actorId: inviterId,
				invitationId: invitation.id,
				title: 'New board invitation',
				message: `You have been invited to join board "${board.title}".`,
			});
		}

		return new ServiceResponse(
			ResponseStatus.Success,
			'Invitation sent successfully',
			new InvitationResponseDto({
				...invitation,
				projectId: invitation.projectId ?? undefined,
				boardId: invitation.boardId ?? undefined,
				inviterId,
			}),
			StatusCodes.CREATED,
		);
	}

	async acceptInvitation(
		token: string,
		userId: string,
	): Promise<ServiceResponse<string> | Exception> {
		const { invitation, user } = await this.validateInvitationOwnership(
			token,
			userId,
		);

		const invitationRole = await this.rolesRepository.findById(invitation.roleId);

		if (invitation.projectId) {
			const checkMember = await this.projectMembersRepository.isUserMemberOfProject(
				invitation.projectId,
				userId,
			);
			if (checkMember) {
				throw new ConflictException('User is already a member of the project');
			}
			await this.projectMembersRepository.assignUserRoleProject(
				invitation.projectId,
				userId,
				invitation.roleId,
			);

			const boardIds = await this.boardsRepository.findBoardIdsByProjectId(
				invitation.projectId,
			);
			if (boardIds.length > 0) {
				const boardRoleName =
					invitationRole?.roleName === RolesEnum.PROJECT_ADMIN
						? RolesEnum.BOARD_ADMIN
						: RolesEnum.BOARD_MEMBER;

				const boardRole = await this.rolesRepository.findByName(boardRoleName);
				if (!boardRole) {
					throw new NotFoundException(`${boardRoleName} role not found`);
				}

				for (const boardId of boardIds) {
					await this.boardMembersRepository.assignUserRoleBoardIfMissing(
						boardId,
						userId,
						boardRole.id,
					);
				}
			}
		} else if (invitation.boardId) {
			const checkMember = await this.boardMembersRepository.isUserMemberOfBoard(
				invitation.boardId,
				userId,
			);
			if (checkMember) {
				throw new ConflictException('User is already a member of the board');
			}
			await this.boardMembersRepository.assignUserRoleBoard(
				invitation.boardId,
				userId,
				invitation.roleId,
			);
		} else {
			throw new ConflictException('Invitation target is invalid');
		}

		await this.invitationRepository.updateStatus(
			invitation.id,
			InvitationStatusEnum.ACCEPTED,
		);

		await this.notificationRepository.createNotification({
			userId: invitation.createdBy,
			actorId: userId,
			invitationId: invitation.id,
			type: NotificationTypeEnum.INVITATION_ACCEPTED,
			title: 'Invitation accepted',
			message: `${user.name || user.email} accepted your invitation.`,
		});

		return new ServiceResponse(
			ResponseStatus.Success,
			'Invitation accepted successfully',
			'Invitation accepted',
			StatusCodes.OK,
		);
	}

	async rejectInvitation(
		token: string,
		userId: string,
	): Promise<ServiceResponse<string> | Exception> {
		const { invitation, user } = await this.validateInvitationOwnership(
			token,
			userId,
		);

		await this.invitationRepository.updateStatus(
			invitation.id,
			InvitationStatusEnum.CANCELLED,
		);

		await this.notificationRepository.createNotification({
			userId: invitation.createdBy,
			actorId: userId,
			invitationId: invitation.id,
			type: NotificationTypeEnum.INVITATION_REJECTED,
			title: 'Invitation rejected',
			message: `${user.name || user.email} rejected your invitation.`,
		});

		return new ServiceResponse(
			ResponseStatus.Success,
			'Invitation rejected successfully',
			'Invitation rejected',
			StatusCodes.OK,
		);
	}

	async findPendingInvitationsByEmail(
		email: string,
	): Promise<ServiceResponse<any> | null> {
		const invitations = await this.invitationRepository.findPendingByEmail(
			this.normalizeEmail(email),
		);
		return new ServiceResponse(
			ResponseStatus.Success,
			'Pending invitations retrieved',
			invitations,
			StatusCodes.OK,
		);
	}

	async getInvitationInfo(token: string): Promise<ServiceResponse<any> | Exception> {
		const invitation = await this.invitationRepository.findByToken(token);

		if (!invitation) {
			throw new NotFoundException('Invitation not found');
		}

		if (invitation.status !== InvitationStatusEnum.PENDING) {
			throw new ConflictException('Invitation has already been processed');
		}

		if (invitation.expiresAt < new Date()) {
			await this.invitationRepository.updateStatus(
				invitation.id,
				InvitationStatusEnum.EXPIRED,
			);
			throw new ConflictException('Invitation has expired');
		}

		const role = await this.rolesRepository.findById(invitation.roleId);
		return new ServiceResponse(
			ResponseStatus.Success,
			'Invitation info retrieved',
			{
				id: invitation.id,
				token: invitation.token,
				email: invitation.email,
				inviterName: invitation.owner?.name || invitation.owner?.email || 'Someone',
				projectName: invitation.project?.title,
				projectSlug: invitation.project?.slug,
				boardName: invitation.board?.title,
				boardSlug: invitation.board?.slug,
				roleName: role?.roleName,
				expiresAt: invitation.expiresAt,
				type: invitation.projectId ? 'project' : 'board',
			},
			StatusCodes.OK,
		);
	}
}
