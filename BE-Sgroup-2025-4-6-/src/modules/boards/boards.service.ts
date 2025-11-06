import { BoardsRepository } from './boards.repository';
import { CreateBoardRequestDto, UpdateBoardRequestDto, GetBoardsRequestDto, GetBoardsResponseDto } from './dtos';
import { BoardResponseDto, BoardResponseDtoSchema } from './dtos';
import { NotFoundException, ConflictException, ForbiddenException } from '@/common/exceptions';
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
        private readonly projectMembersRepository = new ProjectMembersRepository()
    ) { }

    async createBoard(dto: CreateBoardRequestDto, userId: string, projectId: string): Promise<ServiceResponse<BoardResponseDto>> {
        // Ensure project exists
        const project = await this.projectsRepository.findProjectById({ id: projectId });
        if (!project) {
            throw new NotFoundException('Project not found');
        }
        // Ensure user is a member of the project
        const isMember = await this.projectMembersRepository.isUserMemberOfProject(projectId, userId);
        if (!isMember) {
            throw new ForbiddenException();
        }

        const board = await this.boardsRepository.createBoard({
            projectId,
            title: dto.title,
            description: dto.description,
        });
        const board_id = board.id;
        let userGlobalRoleId = await this.rolesRepository.findRoleIdByUserId(userId);
        if (!userGlobalRoleId) {
            const userRole = await this.rolesRepository.findByName('USER');
            userGlobalRoleId = userRole?.id as string;
        }
        // If creator is PROJECT_ADMIN, elevate to BOARD_ADMIN for this board
        let roleIdForBoardMember = userGlobalRoleId;
        const projectAdmin = await this.rolesRepository.findByName('PROJECT_ADMIN');
        const boardAdmin = await this.rolesRepository.findByName('BOARD_ADMIN');
        if (projectAdmin?.id && boardAdmin?.id && userGlobalRoleId === projectAdmin.id) {
            roleIdForBoardMember = boardAdmin.id;
        }
        await this.boardMemberRepository.assignUserRoleBoard(
            board_id, userId, roleIdForBoardMember
        );
        return new ServiceResponse(
            ResponseStatus.Success,
            'Board created successfully',
            new BoardResponseDto(board),
            StatusCodes.CREATED
        );
    }

    async getBoards(dto: GetBoardsRequestDto, projectId: string, userId: string): Promise<ServiceResponse<GetBoardsResponseDto>> {
        // Ensure project exists
        const project = await this.projectsRepository.findProjectById({ id: projectId });
        if (!project) {
            throw new NotFoundException('Project not found');
        }
        // Membership check
        const isMember = await this.projectMembersRepository.isUserMemberOfProject(projectId, userId);
        if (!isMember) {
            throw new ForbiddenException();
        }
        const page = dto.page ?? 1;
        const limit = dto.limit ?? 10;
        const skip = (page - 1) * limit;

        const [boards, total] = await this.boardsRepository.findBoards({
            projectId,
            title: dto.title,
            status: dto.status,
            skip,
            take: limit,
        });

        const boardsResponse = boards.map(board => new BoardResponseDto(board));

        return new ServiceResponse(
            ResponseStatus.Success,
            'Projects retrieved successfully',
            new GetBoardsResponseDto(boardsResponse, total, page, limit),
            StatusCodes.OK
        );
    }

    async getBoardById(id: string, projectId: string, userId: string): Promise<ServiceResponse<BoardResponseDto>> {
        const isMember = await this.projectMembersRepository.isUserMemberOfProject(projectId, userId);
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
            StatusCodes.OK
        );
    }

    async updateBoard(id: string, projectId: string, userId: string, dto: UpdateBoardRequestDto): Promise<ServiceResponse<BoardResponseDto>> {
        const isMember = await this.projectMembersRepository.isUserMemberOfProject(projectId, userId);
        if (!isMember) {
            throw new ForbiddenException();
        }
        // Ensure board belongs to the project
        const existingBoard = await this.boardsRepository.findBoardById({ id, projectId });

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
            StatusCodes.OK
        );
    }

    async deleteBoard(id: string, projectId: string, userId: string): Promise<ServiceResponse<null>> {
        const isMember = await this.projectMembersRepository.isUserMemberOfProject(projectId, userId);
        if (!isMember) {
            throw new ForbiddenException();
        }
        // Ensure board belongs to the project
        const existingBoard = await this.boardsRepository.findBoardById({ id, projectId });

        if (!existingBoard) {
            throw new NotFoundException('Board not found');
        }

        await this.boardsRepository.deleteBoard({ id, projectId });

        return new ServiceResponse(
            ResponseStatus.Success,
            'Board deleted successfully',
            null,
            StatusCodes.OK
        );
    }
}
