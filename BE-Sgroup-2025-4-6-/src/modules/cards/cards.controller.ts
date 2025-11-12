import { Request, Response, NextFunction } from 'express';
import { CardsService } from './cards.service';
import { autoBindUtil } from '@/common/utils';
import { CreateCardRequestDto, UpdateCardRequestDto, GetCardsRequestDto } from './dtos/requests';

export class CardsController {
    constructor(private readonly cardsService = new CardsService()) {
        autoBindUtil(this);
    }

    // Assumes nested under /projects/:id/boards/:boardId/lists/:listId/cards
    async createCard(req: Request, res: Response, next: NextFunction) {
        try {
            const dto = new CreateCardRequestDto(req.body);
            const userId = req.user?.id as string;
            const projectId = req.params.id as string;
            const boardId = req.params.boardId as string;
            const listId = req.params.listId as string;
            const result = await this.cardsService.createCard(dto, userId, projectId, boardId, listId);
            res.status(result.code).json({ success: result.success, message: result.message, data: result.data });
        } catch (error) {
            next(error);
        }
    }

    async getCards(req: Request, res: Response, next: NextFunction) {
        try {
            const dto = new GetCardsRequestDto(req.query);
            const projectId = req.params.id as string;
            const boardId = req.params.boardId as string;
            const listId = req.params.listId as string;
            const userId = req.user?.id as string;
            const result = await this.cardsService.getCards(dto, projectId, boardId, listId, userId);
            res.status(result.code).json({ success: result.success, message: result.message, data: result.data });
        } catch (error) {
            next(error);
        }
    }

    async getCardById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id, boardId, listId, cardId } = req.params;
            const userId = req.user?.id as string;
            const result = await this.cardsService.getCardById(cardId, id, boardId, listId, userId);
            res.status(result.code).json({ success: result.success, message: result.message, data: result.data });
        } catch (error) {
            next(error);
        }
    }

    async updateCard(req: Request, res: Response, next: NextFunction) {
        try {
            const { id, boardId, listId, cardId } = req.params;
            const dto = new UpdateCardRequestDto(req.body);
            const userId = req.user?.id as string;
            const result = await this.cardsService.updateCard(cardId, id, boardId, listId, userId, dto);
            res.status(result.code).json({ success: result.success, message: result.message, data: result.data });
        } catch (error) {
            next(error);
        }
    }

    async deleteCard(req: Request, res: Response, next: NextFunction) {
        try {
            const { id, boardId, listId, cardId } = req.params;
            const userId = req.user?.id as string;
            const result = await this.cardsService.deleteCard(cardId, id, boardId, listId, userId);
            res.status(result.code).json({ success: result.success, message: result.message, data: result.data });
        } catch (error) {
            next(error);
        }
    }
}
