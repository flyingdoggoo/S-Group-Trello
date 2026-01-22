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
export class BoardsService {
	constructor(
		private readonly boardsRepository = new BoardsRepository(),
		private readonly rolesRepository = new RolesRepository(),
		private readonly boardMemberRepository = new BoardMembersRepository(),
		private readonly projectsRepository = new ProjectsRepository(),
		private readonly projectMembersRepository = new ProjectMembersRepository(),
	) {}

	async createBoard(
		dto: CreateBoardRequestDto,
		userId: string,
		projectId: string,
	): Promise<ServiceResponse<BoardResponseDto>> {
		const project = await this.projectsRepository.findProjectById({ id: projectId });
		if (!project) {
			throw new NotFoundException('Project not found');
		}
		const isMember = await this.projectMembersRepository.isUserMemberOfProject(
			projectId,
			userId,
		);
		if (!isMember) {
			throw new ForbiddenException();
		}

		const board = await this.boardsRepository.createBoard({
			projectId,
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
		// Ensure project exists
		const project = await this.projectsRepository.findProjectById({ id: projectId });
		if (!project) {
			throw new NotFoundException('Project not found');
		}
		// Membership check
		const isMember = await this.projectMembersRepository.isUserMemberOfProject(
			projectId,
			userId,
		);
		if (!isMember) {
			throw new ForbiddenException();
		}
		const page = dto.page ?? 1;
		const limit = dto.limit ?? 30;
		const skip = (page - 1) * limit;

		const [boards, total] = await this.boardsRepository.findBoards({
			projectId,
			title: dto.title,
			status: dto.status,
			skip,
			take: limit,
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
		const isMember = await this.projectMembersRepository.isUserMemberOfProject(
			projectId,
			userId,
		);
		if (!isMember) {
			throw new ForbiddenException();
		}
		const board = await this.boardsRepository.findBoardById({ id, projectId });

		if (!board) {
			throw new NotFoundException('Board not found');
		}

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
		const isMember = await this.projectMembersRepository.isUserMemberOfProject(
			projectId,
			userId,
		);
		if (!isMember) {
			throw new ForbiddenException();
		}
		// Ensure board belongs to the project
		const existingBoard = await this.boardsRepository.findBoardById({
			id,
			projectId,
		});

		if (!existingBoard) {
			throw new NotFoundException('Board not found');
		}

		const board = await this.boardsRepository.updateBoard({
			id,
			projectId,
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
		const isMember = await this.projectMembersRepository.isUserMemberOfProject(
			projectId,
			userId,
		);
		if (!isMember) {
			throw new ForbiddenException();
		}
		// Ensure board belongs to the project
		const existingBoard = await this.boardsRepository.findBoardById({
			id,
			projectId,
		});

		if (!existingBoard) {
			throw new NotFoundException('Board not found');
		}

		await this.boardsRepository.deleteBoard({ id, projectId });

		return new ServiceResponse(
			ResponseStatus.Success,
			'Board deleted successfully',
			null,
			StatusCodes.OK,
		);
	}

	async getBoardsMembers(
		projectId: string,
		boardId: string,
		userId: string,
	): Promise<ServiceResponse<any>> {
		const existingProject = await this.projectsRepository.findProjectById({
			id: projectId,
		});
		if (!existingProject) {
			throw new NotFoundException('Project not found');
		}
		const existingBoard = await this.boardsRepository.findBoardById({
			id: boardId,
			projectId: projectId,
		});

		if (!existingBoard) {
			throw new NotFoundException('Board not found');
		}
		const members = await this.boardMemberRepository.getBoardMembers(boardId);

		return new ServiceResponse(
			ResponseStatus.Success,
			'Project members retrieved successfully',
			members,
			StatusCodes.OK,
		);
	}

	async changeRoleOfMemberBoard(
		projectId: string,
		boardId: string,
		userId: string,
		newRoleId: string,
	): Promise<ServiceResponse<any>> {
		const existingProject = await this.projectsRepository.findProjectById({
			id: projectId,
		});
		if (!existingProject) {
			throw new NotFoundException('Project not found');
		}
		const existingBoard = await this.boardsRepository.findBoardById({
			id: boardId,
			projectId: projectId,
		});
		if (!existingBoard) {
			throw new NotFoundException('Board not found');
		}

		const isMember = await this.boardMemberRepository.isUserMemberOfBoard(
			boardId,
			userId,
		);
		if (!isMember) {
			throw new NotFoundException('Member not found in board');
		}

		const changed = await this.boardMemberRepository.changeRoleOfMemberBoard(
			boardId,
			userId,
			newRoleId,
		);
		return new ServiceResponse(
			ResponseStatus.Success,
			'Member role changed successfully',
			changed,
			StatusCodes.OK,
		);
	}
}
