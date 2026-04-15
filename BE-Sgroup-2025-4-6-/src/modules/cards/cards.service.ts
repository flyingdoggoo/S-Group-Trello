import { CardsRepository } from './cards.repository';
import { CreateCardRequestDto, UpdateCardRequestDto, GetCardsRequestDto } from './dtos/requests';
import { GetCardsResponseDto } from './dtos/responses/getCards.response';
import { CardResponseDto } from './dtos/responses/card.response';
import { NotFoundException, ForbiddenException } from '@/common/exceptions';
import { ServiceResponse, ResponseStatus } from '@/common/dtos';
import { StatusCodes } from 'http-status-codes';
import { ProjectMembersRepository } from '../projectMembers/projectMembers.repository';
import { ListsRepository } from '../Lists/lists.repository';
import { CardStatusEnum, NotificationTypeEnum } from '@prisma/client';
import { NotificationRepository } from '../notifications';
import { UsersRepository } from '../users/users.repository';
import { OptionalException } from '@/common';
import { BoardMembersRepository } from '../boardMembers/boardMembers.repository';

export class CardsService {
    constructor(
        private readonly cardsRepository = new CardsRepository(),
        private readonly projectMembersRepository = new ProjectMembersRepository(),
        private readonly listsRepository = new ListsRepository(),
        private readonly notificationRepository = new NotificationRepository(),
        private readonly usersRepository = new UsersRepository(),
        private readonly boardMembersRepository = new BoardMembersRepository(),
    ) { }

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

    /** Verify membership via card → list → board → project chain */
    private async verifyMembershipViaCard(cardId: string, userId: string) {
        const card = await this.cardsRepository.findCardByIdSimple(cardId);
        if (!card) throw new NotFoundException('Card not found');
        const list = await this.verifyMembershipViaList(card.listId, userId);
        return { card, list };
    }

    async createCard(dto: CreateCardRequestDto, userId: string): Promise<ServiceResponse<CardResponseDto>> {
        await this.verifyMembershipViaList(dto.listId, userId);

        let position: number;
        if (typeof dto.position === 'number') {
            position = dto.position;
        } else {
            position = await this.cardsRepository.getNextPosition(dto.listId);
        }

        const card = await this.cardsRepository.createCard({ listId: dto.listId, title: dto.title, description: dto.description, position });

        // New cards always start with default planning metadata.
        await this.cardsRepository.createTag({
            cardId: card.id,
            name: 'To Do',
            color: '#3b82f6',
        });
        await this.cardsRepository.createTodo({
            cardId: card.id,
            title: 'Task 1',
            position: 0,
        });

        const hydratedCard = await this.cardsRepository.findCardByIdFull(card.id);
        if (!hydratedCard) {
            throw new NotFoundException('Card not found');
        }

        return new ServiceResponse(
            ResponseStatus.Success,
            'Card created successfully',
            new CardResponseDto(hydratedCard),
            StatusCodes.CREATED
        );
    }

    async getCards(dto: GetCardsRequestDto, userId: string): Promise<ServiceResponse<GetCardsResponseDto>> {
        await this.verifyMembershipViaList(dto.listId, userId);

        const page = dto.page ?? 1;
        const limit = dto.limit ?? 30;
        const skip = (page - 1) * limit;

        const [cards, total] = await this.cardsRepository.findCards({
            listId: dto.listId,
            title: dto.title,
            status: dto.status as CardStatusEnum | undefined,
            skip,
            take: limit,
        });
        const cardsResponse = cards.map(c => new CardResponseDto(c));

        return new ServiceResponse(
            ResponseStatus.Success,
            'Cards retrieved successfully',
            new GetCardsResponseDto(cardsResponse, total, page, limit),
            StatusCodes.OK
        );
    }

    async getCardById(cardId: string, userId: string): Promise<ServiceResponse<CardResponseDto>> {
        await this.verifyMembershipViaCard(cardId, userId);

        const card = await this.cardsRepository.findCardByIdFull(cardId);
        if (!card) throw new NotFoundException('Card not found');

        return new ServiceResponse(
            ResponseStatus.Success,
            'Card retrieved successfully',
            new CardResponseDto(card),
            StatusCodes.OK
        );
    }

    async updateCard(cardId: string, userId: string, dto: UpdateCardRequestDto): Promise<ServiceResponse<CardResponseDto>> {
        const { card: existingCard, list: currentList } = await this.verifyMembershipViaCard(cardId, userId);

        let targetListId = existingCard.listId;
        let position = dto.position;
        if (dto.listId && dto.listId !== existingCard.listId) {
            // moving to another list; validate that list belongs to same board
            const newList = await this.listsRepository.findListByIdSimple(dto.listId);
            if (!newList || newList.boardId !== currentList.boardId) {
                throw new NotFoundException('Target list not found');
            }
            targetListId = dto.listId;
            if (position === undefined) {
                position = await this.cardsRepository.getNextPosition(targetListId);
            }
        }

        const card = await this.cardsRepository.updateCard({
            id: cardId,
            listId: targetListId,
            title: dto.title,
            description: dto.description,
            position,
            status: dto.status,
        });

        return new ServiceResponse(
            ResponseStatus.Success,
            'Card updated successfully',
            new CardResponseDto(card),
            StatusCodes.OK
        );
    }

    async deleteCard(cardId: string, userId: string): Promise<ServiceResponse<null>> {
        await this.verifyMembershipViaCard(cardId, userId);
        await this.cardsRepository.deleteCard({ id: cardId });

        return new ServiceResponse(
            ResponseStatus.Success,
            'Card deleted successfully',
            null,
            StatusCodes.OK
        );
    }

    // Tags
    async addTag(cardId: string, userId: string, name: string, color: string): Promise<ServiceResponse<any>> {
        await this.verifyMembershipViaCard(cardId, userId);
        const tag = await this.cardsRepository.createTag({ cardId, name, color });
        return new ServiceResponse(ResponseStatus.Success, 'Tag added', tag, StatusCodes.CREATED);
    }

    async deleteTag(cardId: string, tagId: string, userId: string): Promise<ServiceResponse<null>> {
        await this.verifyMembershipViaCard(cardId, userId);
        await this.cardsRepository.deleteTag({ id: tagId });
        return new ServiceResponse(ResponseStatus.Success, 'Tag deleted', null, StatusCodes.OK);
    }

    // Todos
    async addTodo(cardId: string, userId: string, title: string): Promise<ServiceResponse<any>> {
        await this.verifyMembershipViaCard(cardId, userId);
        const position = await this.cardsRepository.getNextTodoPosition(cardId);
        const todo = await this.cardsRepository.createTodo({ cardId, title, position });
        return new ServiceResponse(ResponseStatus.Success, 'Todo added', todo, StatusCodes.CREATED);
    }

    async updateTodo(cardId: string, todoId: string, userId: string, completed: boolean): Promise<ServiceResponse<any>> {
        await this.verifyMembershipViaCard(cardId, userId);
        const todo = await this.cardsRepository.updateTodo({ id: todoId, completed });
        return new ServiceResponse(ResponseStatus.Success, 'Todo updated', todo, StatusCodes.OK);
    }

    async deleteTodo(cardId: string, todoId: string, userId: string): Promise<ServiceResponse<null>> {
        await this.verifyMembershipViaCard(cardId, userId);
        await this.cardsRepository.deleteTodo({ id: todoId });
        return new ServiceResponse(ResponseStatus.Success, 'Todo deleted', null, StatusCodes.OK);
    }

    // Members
    async addMember(cardId: string, userId: string, memberUserId: string): Promise<ServiceResponse<any>> {
        const { card, list } = await this.verifyMembershipViaCard(cardId, userId);

        const [isMemberInProject, isMemberInBoard] = await Promise.all([
            this.projectMembersRepository.isUserMemberOfProject(
                list.board.projectId,
                memberUserId,
            ),
            this.boardMembersRepository.isUserMemberOfBoard(
                list.board.id,
                memberUserId,
            ),
        ]);

        if (!isMemberInProject && !isMemberInBoard) {
            throw new OptionalException(
                StatusCodes.BAD_REQUEST,
                'User is not a member of this board',
            );
        }

        const existingMember = await this.cardsRepository.findMemberOnCard(cardId, memberUserId);
        if (existingMember) {
            throw new OptionalException(
                StatusCodes.CONFLICT,
                'User already assigned to card',
            );
        }

        const member = await this.cardsRepository.addMember({ cardId, userId: memberUserId });

        if (memberUserId !== userId) {
            const actor = await this.usersRepository.findUserById(userId);
            await this.notificationRepository.createNotification({
                userId: memberUserId,
                actorId: userId,
                type: NotificationTypeEnum.CARD_ASSIGNED,
                title: 'Assigned to card',
                message: `${actor?.name || actor?.email || 'Someone'} assigned you to card "${card.title}".`,
            });
        }

        return new ServiceResponse(ResponseStatus.Success, 'Member added', member, StatusCodes.CREATED);
    }

    async removeMember(cardId: string, memberId: string, userId: string): Promise<ServiceResponse<null>> {
        await this.verifyMembershipViaCard(cardId, userId);
        await this.cardsRepository.removeMember({ id: memberId });
        return new ServiceResponse(ResponseStatus.Success, 'Member removed', null, StatusCodes.OK);
    }

    // Comments
    async addComment(cardId: string, userId: string, content: string): Promise<ServiceResponse<any>> {
        await this.verifyMembershipViaCard(cardId, userId);
        const comment = await this.cardsRepository.createComment({ cardId, userId, content });
        return new ServiceResponse(ResponseStatus.Success, 'Comment added', comment, StatusCodes.CREATED);
    }

    async deleteComment(cardId: string, commentId: string, userId: string): Promise<ServiceResponse<null>> {
        await this.verifyMembershipViaCard(cardId, userId);
        await this.cardsRepository.deleteComment({ id: commentId });
        return new ServiceResponse(ResponseStatus.Success, 'Comment deleted', null, StatusCodes.OK);
    }
}
