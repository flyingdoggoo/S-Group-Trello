import { ListsRepository } from './lists.repository';
import { CreateListRequestDto, UpdateListRequestDto, GetListsRequestDto } from './dtos/requests';
import { GetListsResponseDto } from './dtos/responses/getLists.response';
import { ListResponseDto } from './dtos/responses/list.response';
import { NotFoundException, ForbiddenException } from '@/common/exceptions';
import { ServiceResponse, ResponseStatus } from '@/common/dtos';
import { StatusCodes } from 'http-status-codes';
import { ProjectMembersRepository } from '../projectMembers/projectMembers.repository';
import { BoardsRepository } from '../boards/boards.repository';
import { BoardMembersRepository } from '../boardMembers/boardMembers.repository';

export class ListsService {
    constructor(
        private readonly listsRepository = new ListsRepository(),
        private readonly projectMembersRepository = new ProjectMembersRepository(),
        private readonly boardsRepository = new BoardsRepository(),
        private readonly boardMembersRepository = new BoardMembersRepository(),
    ) { }

    /** Verify membership via board → project chain */
    private async verifyMembershipViaBoard(boardId: string, userId: string) {
        const board = await this.boardsRepository.findBoardByIdSimple(boardId);
        if (!board) throw new NotFoundException('Board not found');

        const [isProjectMember, isBoardMember] = await Promise.all([
            this.projectMembersRepository.isUserMemberOfProject(board.projectId, userId),
            this.boardMembersRepository.isUserMemberOfBoard(board.id, userId),
        ]);

        if (!isProjectMember && !isBoardMember) throw new ForbiddenException();
        return board;
    }

    /** Verify membership via list → board → project chain */
    private async verifyMembershipViaList(listId: string, userId: string) {
        const list = await this.listsRepository.findListByIdWithBoard(listId);
        if (!list || !list.board) throw new NotFoundException('List not found');

        const [isProjectMember, isBoardMember] = await Promise.all([
            this.projectMembersRepository.isUserMemberOfProject(
                list.board.projectId,
                userId,
            ),
            this.boardMembersRepository.isUserMemberOfBoard(list.board.id, userId),
        ]);

        if (!isProjectMember && !isBoardMember) throw new ForbiddenException();
        return list;
    }

    async createList(dto: CreateListRequestDto, userId: string): Promise<ServiceResponse<ListResponseDto>> {
        await this.verifyMembershipViaBoard(dto.boardId, userId);

        let position: number;
        if (typeof dto.position === 'number') {
            position = dto.position;
        } else {
            position = await this.listsRepository.getNextPosition(dto.boardId);
        }

        const list = await this.listsRepository.createList({ boardId: dto.boardId, title: dto.title, position });

        return new ServiceResponse(
            ResponseStatus.Success,
            'List created successfully',
            new ListResponseDto(list),
            StatusCodes.CREATED
        );
    }

    async getLists(dto: GetListsRequestDto, userId: string): Promise<ServiceResponse<GetListsResponseDto>> {
        await this.verifyMembershipViaBoard(dto.boardId, userId);

        const page = dto.page ?? 1;
        const limit = dto.limit ?? 30;
        const skip = (page - 1) * limit;

        const [lists, total] = await this.listsRepository.findLists({
            boardId: dto.boardId,
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

    async getListById(listId: string, userId: string): Promise<ServiceResponse<ListResponseDto>> {
        const list = await this.verifyMembershipViaList(listId, userId);

        return new ServiceResponse(
            ResponseStatus.Success,
            'List retrieved successfully',
            new ListResponseDto(list),
            StatusCodes.OK
        );
    }

    async updateList(listId: string, userId: string, dto: UpdateListRequestDto): Promise<ServiceResponse<ListResponseDto>> {
        const existingList = await this.verifyMembershipViaList(listId, userId);

        const list = await this.listsRepository.updateList({ id: listId, boardId: existingList.boardId, title: dto.title });

        return new ServiceResponse(
            ResponseStatus.Success,
            'List updated successfully',
            new ListResponseDto(list),
            StatusCodes.OK
        );
    }

    async deleteList(listId: string, userId: string): Promise<ServiceResponse<null>> {
        await this.verifyMembershipViaList(listId, userId);
        await this.listsRepository.deleteList({ id: listId });

        return new ServiceResponse(
            ResponseStatus.Success,
            'List deleted successfully',
            null,
            StatusCodes.OK
        );
    }
}
