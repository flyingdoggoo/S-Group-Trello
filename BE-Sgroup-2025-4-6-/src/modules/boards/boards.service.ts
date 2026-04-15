import { project } from './../../models/modelSchema/projectSchema';
import { BoardsRepository } from './boards.repository';
import {
	CreateBoardRequestDto,
	UpdateBoardRequestDto,
	GetBoardsRequestDto,
	GetBoardsResponseDto,
} from './dtos';
import { BoardResponseDto, BoardResponseDtoSchema } from './dtos';
import {
	NotFoundException,
	ConflictException,
	ForbiddenException,
} from '@/common/exceptions';
import { ServiceResponse, ResponseStatus } from '@/common/dtos';
import { StatusCodes } from 'http-status-codes';
import { RolesRepository } from '../roles/roles.repository';
import { BoardMembersRepository } from '../boardMembers/boardMembers.repository';
import { ProjectsRepository } from '../projects/projects.repository';
import { ProjectMembersRepository } from '../projectMembers/projectMembers.repository';
import { RolesEnum } from '@/common/enums';
import { OptionalException } from '@/common';
export class BoardsService {
	constructor(
		private readonly boardsRepository = new BoardsRepository(),
		private readonly rolesRepository = new RolesRepository(),
		private readonly boardMemberRepository = new BoardMembersRepository(),
		private readonly projectsRepository = new ProjectsRepository(),
		private readonly projectMembersRepository = new ProjectMembersRepository(),
	) {}

	private async assertActorIsBoardAdmin(boardId: string, actorUserId: string) {
		const actorMember = await this.boardMemberRepository.findBoardMemberWithRole(
			boardId,
			actorUserId,
		);

		if (!actorMember) {
			throw new ForbiddenException();
		}

		if (actorMember.role.roleName !== RolesEnum.BOARD_ADMIN) {
			throw new ForbiddenException();
		}

		return actorMember;
	}

	private async assertUserCanAccessBoard(
		projectId: string,
		boardId: string,
		userId: string,
	) {
		const [isProjectMember, isBoardMember] = await Promise.all([
			this.projectMembersRepository.isUserMemberOfProject(projectId, userId),
			this.boardMemberRepository.isUserMemberOfBoard(boardId, userId),
		]);

		if (!isProjectMember && !isBoardMember) {
			throw new ForbiddenException();
		}
	}

	async createBoard(
		dto: CreateBoardRequestDto,
		userId: string,
		projectId: string,
	): Promise<ServiceResponse<BoardResponseDto>> {
		const project = await this.projectsRepository.findProjectById({ id: projectId });
		if (!project) {
			throw new NotFoundException('Project not found');
		}
		const resolvedProjectId = project.id;
		const isMember = await this.projectMembersRepository.isUserMemberOfProject(
			resolvedProjectId,
			userId,
		);
		if (!isMember) {
			throw new ForbiddenException();
		}

		const board = await this.boardsRepository.createBoard({
			projectId: resolvedProjectId,
			title: dto.title,
			description: dto.description,
		});
		const boardId = board.id;
		const boardAdmin = await this.rolesRepository.findByName('BOARD_ADMIN');
		if (!boardAdmin) {
			throw new Error('BOARD_ADMIN role not found');
		}
		await this.boardMemberRepository.assignUserRoleBoard(
			boardId,
			userId,
			boardAdmin.id,
		);

		const boardMemberRole = await this.rolesRepository.findByName(
			RolesEnum.BOARD_MEMBER,
		);
		if (!boardMemberRole) {
			throw new NotFoundException('BOARD_MEMBER role not found');
		}

		const projectMembers =
			await this.projectMembersRepository.getProjectMembers(resolvedProjectId);
		for (const member of projectMembers) {
			if (member.user.id === userId) {
				continue;
			}

			const roleId =
				member.role.roleName === RolesEnum.PROJECT_ADMIN
					? boardAdmin.id
					: boardMemberRole.id;

			await this.boardMemberRepository.assignUserRoleBoardIfMissing(
				boardId,
				member.user.id,
				roleId,
			);
		}

		return new ServiceResponse(
			ResponseStatus.Success,
			'Board created successfully',
			new BoardResponseDto(board),
			StatusCodes.CREATED,
		);
	}

	async getBoards(
		dto: GetBoardsRequestDto,
		projectId: string,
		userId: string,
	): Promise<ServiceResponse<GetBoardsResponseDto>> {
		const project = await this.projectsRepository.findProjectById({ id: projectId });
		if (!project) {
			throw new NotFoundException('Project not found');
		}
		const resolvedProjectId = project.id;

		const isProjectMember =
			await this.projectMembersRepository.isUserMemberOfProject(
				resolvedProjectId,
				userId,
			);
		const isMemberOfAnyBoardInProject = isProjectMember
			? true
			: await this.boardMemberRepository.isUserMemberOfAnyBoardInProject(
			resolvedProjectId,
			userId,
			  );

		if (!isMemberOfAnyBoardInProject) {
			throw new ForbiddenException();
		}

		const page = dto.page ?? 1;
		const limit = dto.limit ?? 30;
		const skip = (page - 1) * limit;

		const [boards, total] = await this.boardsRepository.findBoards({
			projectId: resolvedProjectId,
			title: dto.title,
			status: dto.status,
			skip,
			take: limit,
			userId: isProjectMember ? undefined : userId,
		});

		const boardsResponse = boards.map((board) => new BoardResponseDto(board));

		return new ServiceResponse(
			ResponseStatus.Success,
			'Projects retrieved successfully',
			new GetBoardsResponseDto(boardsResponse, total, page, limit),
			StatusCodes.OK,
		);
	}

	async getBoardById(
		id: string,
		projectId: string,
		userId: string,
	): Promise<ServiceResponse<BoardResponseDto>> {
		const project = await this.projectsRepository.findProjectById({ id: projectId });
		if (!project) {
			throw new NotFoundException('Project not found');
		}

		const board = await this.boardsRepository.findBoardById({
			id,
			projectId: project.id,
		});

		if (!board) {
			throw new NotFoundException('Board not found');
		}

		await this.assertUserCanAccessBoard(project.id, board.id, userId);

		return new ServiceResponse(
			ResponseStatus.Success,
			'Board retrieved successfully',
			new BoardResponseDto(board),
			StatusCodes.OK,
		);
	}

	async getBoardByIdFlat(
		boardId: string,
		userId: string,
	): Promise<ServiceResponse<BoardResponseDto>> {
		const board = await this.boardsRepository.findBoardByIdSimple(boardId);
		if (!board) {
			throw new NotFoundException('Board not found');
		}

		await this.assertUserCanAccessBoard(board.projectId, board.id, userId);

		return new ServiceResponse(
			ResponseStatus.Success,
			'Board retrieved successfully',
			new BoardResponseDto(board),
			StatusCodes.OK,
		);
	}

	async updateBoard(
		id: string,
		projectId: string,
		userId: string,
		dto: UpdateBoardRequestDto,
	): Promise<ServiceResponse<BoardResponseDto>> {
		const project = await this.projectsRepository.findProjectById({ id: projectId });
		if (!project) {
			throw new NotFoundException('Project not found');
		}

		const existingBoard = await this.boardsRepository.findBoardById({
			id,
			projectId: project.id,
		});

		if (!existingBoard) {
			throw new NotFoundException('Board not found');
		}

		await this.assertUserCanAccessBoard(project.id, existingBoard.id, userId);

		const board = await this.boardsRepository.updateBoard({
			id,
			projectId: project.id,
			title: dto.title,
			description: dto.description,
		});

		return new ServiceResponse(
			ResponseStatus.Success,
			'Board updated successfully',
			new BoardResponseDto(board),
			StatusCodes.OK,
		);
	}

	async deleteBoard(
		id: string,
		projectId: string,
		userId: string,
	): Promise<ServiceResponse<null>> {
		const project = await this.projectsRepository.findProjectById({ id: projectId });
		if (!project) {
			throw new NotFoundException('Project not found');
		}

		const existingBoard = await this.boardsRepository.findBoardById({
			id,
			projectId: project.id,
		});

		if (!existingBoard) {
			throw new NotFoundException('Board not found');
		}

		await this.assertUserCanAccessBoard(project.id, existingBoard.id, userId);

		await this.boardsRepository.deleteBoard({
			id,
			projectId: project.id,
		});

		return new ServiceResponse(
			ResponseStatus.Success,
			'Board deleted successfully',
			null,
			StatusCodes.OK,
		);
	}

	async getBoardsMembers(
		boardId: string,
		userId: string,
	): Promise<ServiceResponse<any>> {
		const existingBoard = await this.boardsRepository.findBoardByIdSimple(boardId);
		if (!existingBoard) {
			throw new NotFoundException('Board not found');
		}

		await this.assertUserCanAccessBoard(
			existingBoard.projectId,
			existingBoard.id,
			userId,
		);

		const members = await this.boardMemberRepository.getBoardMembers(existingBoard.id);

		return new ServiceResponse(
			ResponseStatus.Success,
			'Board members retrieved successfully',
			members,
			StatusCodes.OK,
		);
	}

	async changeRoleOfMemberBoard(
		boardId: string,
		actorUserId: string,
		targetUserId: string,
		newRoleId: string,
	): Promise<ServiceResponse<any>> {
		const existingBoard = await this.boardsRepository.findBoardByIdSimple(boardId);
		if (!existingBoard) {
			throw new NotFoundException('Board not found');
		}

		await this.assertActorIsBoardAdmin(existingBoard.id, actorUserId);

		const targetMember = await this.boardMemberRepository.findBoardMemberWithRole(
			existingBoard.id,
			targetUserId,
		);
		if (!targetMember) {
			throw new NotFoundException('Member not found in board');
		}

		const nextRole = await this.rolesRepository.findById(newRoleId);
		if (!nextRole) {
			throw new NotFoundException('Role not found');
		}

		if (!nextRole.roleName.startsWith('BOARD_')) {
			throw new OptionalException(
				StatusCodes.BAD_REQUEST,
				'Role must be a board role',
			);
		}

		if (
			targetMember.role.roleName === RolesEnum.BOARD_ADMIN &&
			nextRole.roleName !== RolesEnum.BOARD_ADMIN
		) {
			throw new ForbiddenException();
		}

		if (
			targetUserId === actorUserId &&
			nextRole.roleName !== RolesEnum.BOARD_ADMIN
		) {
			throw new OptionalException(
				StatusCodes.BAD_REQUEST,
				'Board admin cannot downgrade own role',
			);
		}

		const changed = await this.boardMemberRepository.changeRoleOfMemberBoard(
			existingBoard.id,
			targetUserId,
			newRoleId,
		);
		return new ServiceResponse(
			ResponseStatus.Success,
			'Member role changed successfully',
			changed,
			StatusCodes.OK,
		);
	}

	async removeMemberBoard(
		boardId: string,
		actorUserId: string,
		targetUserId: string,
	): Promise<ServiceResponse<null>> {
		const existingBoard = await this.boardsRepository.findBoardByIdSimple(boardId);
		if (!existingBoard) {
			throw new NotFoundException('Board not found');
		}

		await this.assertActorIsBoardAdmin(existingBoard.id, actorUserId);

		const targetMember = await this.boardMemberRepository.findBoardMemberWithRole(
			existingBoard.id,
			targetUserId,
		);
		if (!targetMember) {
			throw new NotFoundException('Member not found in board');
		}

		if (targetUserId === actorUserId) {
			throw new OptionalException(
				StatusCodes.BAD_REQUEST,
				'Use leave-board flow instead of removing yourself',
			);
		}

		if (targetMember.role.roleName === RolesEnum.BOARD_ADMIN) {
			throw new ForbiddenException();
		}

		await this.boardMemberRepository.removeMember(existingBoard.id, targetUserId);

		return new ServiceResponse(
			ResponseStatus.Success,
			'Member removed successfully',
			null,
			StatusCodes.OK,
		);
	}
}
