import { MailsService } from '../mails/mail.service';
import { BoardMembersRepository } from './../boardMembers/boardMembers.repository';
import { roles } from './../../models/modelSchema/rolesSchema';
import { Exception } from '@/common/exceptions/base.exception';

import { BoardsRepository } from '../boards/boards.repository';
import { UsersRepository } from '../users/users.repository';

import { ProjectsRepository } from './../projects/projects.repository';
import { InvitationRepository } from './invitation.repository';

import {
	ConflictException,
	HttpResponseBodySuccessDto,
	NotFoundException,
	ResponseStatus,
	ServiceResponse,
} from '@/common';
import { InvitationResponseDto } from './dtos/responses';
import { ProjectMembersRepository } from '../projectMembers/projectMembers.repository';
import { RolesRepository } from '../roles/roles.repository';
import { StatusCodes } from 'http-status-codes/build/cjs/status-codes';
import { randomBytes } from 'crypto';
import { InvitationStatusEnum, project } from '@prisma/client';

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
	) {}

	async inviteUserToProject(
		projectId: string,
		inviterId: string,
		email: string,
		roleId: string,
	): Promise<ServiceResponse<InvitationResponseDto> | Exception> {
		const existingUser = await this.usersRepository.findUser({ email });
		const project = await this.projectRepository.findProjectById({ id: projectId });
		if (!project) {
			throw new NotFoundException('Project not found');
		}
		if (existingUser) {
			const existingMember =
				await this.projectMembersRepository.isUserMemberOfProject(
					projectId,
					existingUser.id,
				);
			if (existingMember) {
				throw new ConflictException('User is already a member of the project ');
			}

			const newMember = await this.projectMembersRepository.assignUserRoleProject(
				projectId,
				existingUser.id,
				roleId,
			);

			await this.mailsService.sendEmail({
				recipients: [
					{
						address: email,
						name: 'User',
					},
				],
				subject: 'You have been added to a project',
				html: `You have been added to a project ${project.title}. Please log in to your account to access the project.`,
			});
			// notification logic can be added here

			return new ServiceResponse(
				ResponseStatus.Success,
				'User invited successfully',
				new InvitationResponseDto({
					...newMember,
					email: email,
					projectId: newMember.projectId ?? undefined,
					inviterId: inviterId,
				}),
				StatusCodes.CREATED,
			);
		} else {
			const existingInvitation = await this.invitationRepository.findPendingByEmail(
				email,
				projectId,
				undefined,
			);

			if (existingInvitation.length > 0) {
				throw new ConflictException(
					'An invitation has already been sent to this email for the project hehe',
				);
			}

			const token = randomBytes(32).toString('hex');
			const expiresAt = new Date();
			expiresAt.setDate(expiresAt.getDate() + 7); // Invitation valid for 7 days

			const invitation = await this.invitationRepository.create({
				projectId,
				email,
				token,
				roleId,
				inviterId,
				expiresAt,
			});
			// email sending logic can be added here
			await this.mailsService.sendEmail({
				recipients: [
					{
						address: email,
						name: 'User',
					},
				],
				subject: 'You are invited to join a project',
				html: `You have been invited to join a project. Please use the following token to accept the invitation: <a href="http://localhost:5173/S-Group-Trello/register">Accept Invitation</a>. This invitation is valid until ${expiresAt.toDateString()}.`,
			});
			return new ServiceResponse(
				ResponseStatus.Success,
				'Invitation sent successfully',
				new InvitationResponseDto({
					...invitation,
					projectId: invitation.projectId ?? undefined,
					boardId: invitation.boardId ?? undefined,
				}),
				StatusCodes.CREATED,
			);
		}
	}

	async inviteUserToBoard(
		boardId: string,
		inviterId: string,
		email: string,
		roleId: string,
	): Promise<ServiceResponse<InvitationResponseDto> | Exception> {
		const existingUser = await this.usersRepository.findUser({ email });

		if (existingUser) {
			const existingMember = await this.boardMembersRepository.isUserMemberOfBoard(
				boardId,
				existingUser.id,
			);
			if (existingMember) {
				throw new ConflictException('User is already a member of the board');
			}

			const newMember = await this.boardMembersRepository.assignUserRoleBoard(
				boardId,
				existingUser.id,
				roleId,
			);

			// notification logic can be added here
			await this.mailsService.sendEmail({
				recipients: [
					{
						address: email,
						name: 'User',
					},
				],
				subject: 'You have been added to a board',
				html: `You have been added to a board. Please log in to your account to access the board.`,
			});
			return new ServiceResponse(
				ResponseStatus.Success,
				'User invited successfully',
				new InvitationResponseDto(newMember),
				StatusCodes.CREATED,
			);
		} else {
			const existingInvitation = await this.invitationRepository.findPendingByEmail(
				email,
				undefined,
				boardId,
			);

			if (existingInvitation.length > 0) {
				throw new ConflictException(
					'An invitation has already been sent to this email for the board hehe',
				);
			}

			const token = randomBytes(32).toString('hex');
			const expiresAt = new Date();
			expiresAt.setDate(expiresAt.getDate() + 7); // Invitation valid for 7 days

			const invitation = await this.invitationRepository.create({
				boardId,
				email,
				token,
				roleId,
				inviterId,
				expiresAt,
			});
			// email sending logic can be added here
			await this.mailsService.sendEmail({
				recipients: [
					{
						address: email,
						name: 'User',
					},
				],
				subject: 'You are invited to join a board',
				html: `You have been invited to join a board. Please use the following token to accept the invitation: <a href="http://localhost:5173/S-Group-Trello/register">Accept Invitation</a>. This invitation is valid until ${expiresAt.toDateString()}.`,
			});
			return new ServiceResponse(
				ResponseStatus.Success,
				'Invitation sent successfully',
				new InvitationResponseDto({
					...invitation,
					projectId: invitation.projectId ?? undefined,
					boardId: invitation.boardId ?? undefined,
				}),
				StatusCodes.CREATED,
			);
		}
	}

	async acceptInvitation(
		token: string,
		userId: string,
	): Promise<ServiceResponse<string> | Exception> {
		const invitation = await this.invitationRepository.findByToken(token);
		if (!invitation) {
			throw new NotFoundException('Invalid or expired invitation token');
		}
		if (invitation.expiresAt < new Date()) {
			throw new ConflictException('Invitation token has expired');
		}
		if (invitation.status !== InvitationStatusEnum.PENDING) {
			throw new ConflictException('Invitation already processed');
		}

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
		}

		await this.invitationRepository.updateStatus(
			invitation.id,
			InvitationStatusEnum.ACCEPTED,
		);

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
		const invitation = await this.invitationRepository.findByToken(token);
		if (!invitation) {
			throw new NotFoundException('Invitation not found');
		}
		if (invitation.status !== InvitationStatusEnum.PENDING) {
			throw new ConflictException('Invitation already processed');
		}
		await this.invitationRepository.updateStatus(
			invitation.id,
			InvitationStatusEnum.CANCELLED,
		);
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
		const invitations = await this.invitationRepository.findPendingByEmail(email);
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

		// Lấy thông tin role
		const role = await this.rolesRepository.findById(invitation.roleId);

		// Fetch project or board details
		let projectName: string | undefined;
		let boardName: string | undefined;

		if (invitation.projectId) {
			const project = await this.projectRepository.findProjectById({
				id: invitation.projectId,
			});
			projectName = project?.title;
		} else if (invitation.boardId) {
			const board = await this.boardsRepository.findBoardById({
				id: invitation.boardId,
				projectId: invitation.projectId || '',
			});
			boardName = board?.title;
		}

		// Return thông tin để hiển thị trên UI
		return new ServiceResponse(
			ResponseStatus.Success,
			'Invitation info retrieved',
			{
				email: invitation.email,
				inviterName: invitation.owner?.name || 'Someone',
				projectName,
				boardName,
				roleName: role?.roleName,
				expiresAt: invitation.expiresAt,
				type: invitation.projectId ? 'project' : 'board',
			},
			StatusCodes.OK,
		);
	}
}
