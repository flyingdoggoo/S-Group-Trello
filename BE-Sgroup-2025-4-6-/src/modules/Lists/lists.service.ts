import { ListsRepository } from './lists.repository';
import { CreateListRequestDto, UpdateListRequestDto, GetListsRequestDto } from './dtos/requests';
import { GetListsResponseDto } from './dtos/responses/getLists.response';
import { ListResponseDto } from './dtos/responses/list.response';
import { NotFoundException, ForbiddenException } from '@/common/exceptions';
import { ServiceResponse, ResponseStatus } from '@/common/dtos';
import { StatusCodes } from 'http-status-codes';
import { ProjectsRepository } from '../projects/projects.repository';
import { ProjectMembersRepository } from '../projectMembers/projectMembers.repository';
import { BoardsRepository } from '../boards/boards.repository';
export class ListsService {
    constructor(
        private readonly listsRepository = new ListsRepository(),
        private readonly projectsRepository = new ProjectsRepository(),
        private readonly projectMembersRepository = new ProjectMembersRepository(),
        private readonly boardsRepository = new BoardsRepository()
    ) { }

    async createList(dto: CreateListRequestDto, userId: string, projectId: string, boardId: string): Promise<ServiceResponse<ListResponseDto>> {
        const project = await this.projectsRepository.findProjectById({ id: projectId });
        if (!project) throw new NotFoundException('Project not found');

        const board = await this.boardsRepository.findBoardById({ id: boardId, projectId });
        if (!board) throw new NotFoundException('Board not found');

        const isMember = await this.projectMembersRepository.isUserMemberOfProject(projectId, userId);
        if (!isMember) throw new ForbiddenException();

        let position: number;
        if (typeof dto.position === 'number') {
            position = dto.position;
        } else {
            position = await this.listsRepository.getNextPosition(boardId);
        }

        const list = await this.listsRepository.createList({ boardId, title: dto.title, position });

        return new ServiceResponse(
            ResponseStatus.Success,
            'List created successfully',
            new ListResponseDto(list),
            StatusCodes.CREATED
        );
    }

    async getLists(dto: GetListsRequestDto, projectId: string, boardId: string, userId: string): Promise<ServiceResponse<GetListsResponseDto>> {
        const project = await this.projectsRepository.findProjectById({ id: projectId });
        if (!project) throw new NotFoundException('Project not found');

        const board = await this.boardsRepository.findBoardById({ id: boardId, projectId });
        if (!board) throw new NotFoundException('Board not found');

        const isMember = await this.projectMembersRepository.isUserMemberOfProject(projectId, userId);
        if (!isMember) throw new ForbiddenException();

        const page = dto.page ?? 1;
        const limit = dto.limit ?? 10;
        const skip = (page - 1) * limit;

        const [lists, total] = await this.listsRepository.findLists({
            boardId,
            title: dto.title,
            status: dto.status,
            skip,
            take: limit,
        });
        const listsResponse = lists.map(l => new ListResponseDto(l));

        return new ServiceResponse(
            ResponseStatus.Success,
            'Lists retrieved successfully',
            new GetListsResponseDto(listsResponse, total, page, limit),
            StatusCodes.OK
        );
    }

    async getListById(id: string, projectId: string, boardId: string, userId: string): Promise<ServiceResponse<ListResponseDto>> {
        const isMember = await this.projectMembersRepository.isUserMemberOfProject(projectId, userId);
        if (!isMember) throw new ForbiddenException();

        const list = await this.listsRepository.findListById({ id, boardId });
        if (!list) throw new NotFoundException('List not found');

        return new ServiceResponse(
            ResponseStatus.Success,
            'List retrieved successfully',
            new ListResponseDto(list),
            StatusCodes.OK
        );
    }

    async updateList(id: string, projectId: string, boardId: string, userId: string, dto: UpdateListRequestDto): Promise<ServiceResponse<ListResponseDto>> {
        const isMember = await this.projectMembersRepository.isUserMemberOfProject(projectId, userId);
        if (!isMember) throw new ForbiddenException();

        const existingList = await this.listsRepository.findListById({ id, boardId });
        if (!existingList) throw new NotFoundException('List not found');

        const list = await this.listsRepository.updateList({ id, boardId, title: dto.title });

        return new ServiceResponse(
            ResponseStatus.Success,
            'List updated successfully',
            new ListResponseDto(list),
            StatusCodes.OK
        );
    }

    async deleteList(id: string, projectId: string, boardId: string, userId: string): Promise<ServiceResponse<null>> {
        const isMember = await this.projectMembersRepository.isUserMemberOfProject(projectId, userId);
        if (!isMember) throw new ForbiddenException();

        const existingList = await this.listsRepository.findListById({ id, boardId });
        if (!existingList) throw new NotFoundException('List not found');

        await this.listsRepository.deleteList({ id });

        return new ServiceResponse(
            ResponseStatus.Success,
            'List deleted successfully',
            null,
            StatusCodes.OK
        );
    }
}
