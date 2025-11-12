import { CardsRepository } from './cards.repository';
import { CreateCardRequestDto, UpdateCardRequestDto, GetCardsRequestDto } from './dtos/requests';
import { GetCardsResponseDto } from './dtos/responses/getCards.response';
import { CardResponseDto } from './dtos/responses/card.response';
import { NotFoundException, ForbiddenException } from '@/common/exceptions';
import { ServiceResponse, ResponseStatus } from '@/common/dtos';
import { StatusCodes } from 'http-status-codes';
import { ProjectsRepository } from '../projects/projects.repository';
import { ProjectMembersRepository } from '../projectMembers/projectMembers.repository';
import { BoardsRepository } from '../boards/boards.repository';
import { ListsRepository } from '../lists/lists.repository';
import { CardStatusEnum } from '@prisma/client';

export class CardsService {
    constructor(
        private readonly cardsRepository = new CardsRepository(),
        private readonly projectsRepository = new ProjectsRepository(),
        private readonly projectMembersRepository = new ProjectMembersRepository(),
        private readonly boardsRepository = new BoardsRepository(),
        private readonly listsRepository = new ListsRepository(),
    ) { }

    async createCard(dto: CreateCardRequestDto, userId: string, projectId: string, boardId: string, listId: string): Promise<ServiceResponse<CardResponseDto>> {
        const project = await this.projectsRepository.findProjectById({ id: projectId });
        if (!project) throw new NotFoundException('Project not found');

        const board = await this.boardsRepository.findBoardById({ id: boardId, projectId });
        if (!board) throw new NotFoundException('Board not found');

        const list = await this.listsRepository.findListById({ id: listId, boardId });
        if (!list) throw new NotFoundException('List not found');

        const isMember = await this.projectMembersRepository.isUserMemberOfProject(projectId, userId);
        if (!isMember) throw new ForbiddenException();

        let position: number;
        if (typeof dto.position === 'number') {
            position = dto.position;
        } else {
            position = await this.cardsRepository.getNextPosition(listId);
        }

        const card = await this.cardsRepository.createCard({ listId, title: dto.title, description: dto.description, position });

        return new ServiceResponse(
            ResponseStatus.Success,
            'Card created successfully',
            new CardResponseDto(card),
            StatusCodes.CREATED
        );
    }

    async getCards(dto: GetCardsRequestDto, projectId: string, boardId: string, listId: string, userId: string): Promise<ServiceResponse<GetCardsResponseDto>> {
        const project = await this.projectsRepository.findProjectById({ id: projectId });
        if (!project) throw new NotFoundException('Project not found');

        const board = await this.boardsRepository.findBoardById({ id: boardId, projectId });
        if (!board) throw new NotFoundException('Board not found');

        const list = await this.listsRepository.findListById({ id: listId, boardId });
        if (!list) throw new NotFoundException('List not found');

        const isMember = await this.projectMembersRepository.isUserMemberOfProject(projectId, userId);
        if (!isMember) throw new ForbiddenException();

        const page = dto.page ?? 1;
        const limit = dto.limit ?? 10;
        const skip = (page - 1) * limit;

        const [cards, total] = await this.cardsRepository.findCards({
            listId,
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

    async getCardById(id: string, projectId: string, boardId: string, listId: string, userId: string): Promise<ServiceResponse<CardResponseDto>> {
        const isMember = await this.projectMembersRepository.isUserMemberOfProject(projectId, userId);
        if (!isMember) throw new ForbiddenException();

        const list = await this.listsRepository.findListById({ id: listId, boardId });
        if (!list) throw new NotFoundException('List not found');

        const card = await this.cardsRepository.findCardById({ id, listId });
        if (!card) throw new NotFoundException('Card not found');

        return new ServiceResponse(
            ResponseStatus.Success,
            'Card retrieved successfully',
            new CardResponseDto(card),
            StatusCodes.OK
        );
    }

    async updateCard(id: string, projectId: string, boardId: string, listId: string, userId: string, dto: UpdateCardRequestDto): Promise<ServiceResponse<CardResponseDto>> {
        const isMember = await this.projectMembersRepository.isUserMemberOfProject(projectId, userId);
        if (!isMember) throw new ForbiddenException();

        // Ensure current list exists
        const currentList = await this.listsRepository.findListById({ id: listId, boardId });
        if (!currentList) throw new NotFoundException('List not found');

        const existingCard = await this.cardsRepository.findCardById({ id, listId });
        if (!existingCard) throw new NotFoundException('Card not found');

        let targetListId = listId;
        let position = dto.position;
        if (dto.listId && dto.listId !== listId) {
            // moving to another list; validate that list belongs to same board
            const newList = await this.listsRepository.findListById({ id: dto.listId, boardId });
            if (!newList) throw new NotFoundException('Target list not found');
            targetListId = dto.listId;
            if (position === undefined) {
                position = await this.cardsRepository.getNextPosition(targetListId);
            }
        }

        const card = await this.cardsRepository.updateCard({
            id,
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

    async deleteCard(id: string, projectId: string, boardId: string, listId: string, userId: string): Promise<ServiceResponse<null>> {
        const isMember = await this.projectMembersRepository.isUserMemberOfProject(projectId, userId);
        if (!isMember) throw new ForbiddenException();

        const list = await this.listsRepository.findListById({ id: listId, boardId });
        if (!list) throw new NotFoundException('List not found');

        const existingCard = await this.cardsRepository.findCardById({ id, listId });
        if (!existingCard) throw new NotFoundException('Card not found');

        await this.cardsRepository.deleteCard({ id });

        return new ServiceResponse(
            ResponseStatus.Success,
            'Card deleted successfully',
            null,
            StatusCodes.OK
        );
    }
}
