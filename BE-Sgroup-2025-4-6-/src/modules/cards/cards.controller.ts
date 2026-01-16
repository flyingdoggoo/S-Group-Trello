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

    // Tags
    async addTag(req: Request, res: Response, next: NextFunction) {
        try {
            const { id, boardId, listId, cardId } = req.params;
            const userId = req.user?.id as string;
            const { name, color } = req.body;
            const result = await this.cardsService.addTag(cardId, id, boardId, listId, userId, name, color);
            res.status(result.code).json({ success: result.success, message: result.message, data: result.data });
        } catch (error) {
            next(error);
        }
    }

    async deleteTag(req: Request, res: Response, next: NextFunction) {
        try {
            const { id, boardId, listId, cardId, tagId } = req.params;
            const userId = req.user?.id as string;
            const result = await this.cardsService.deleteTag(cardId, tagId, id, boardId, listId, userId);
            res.status(result.code).json({ success: result.success, message: result.message, data: result.data });
        } catch (error) {
            next(error);
        }
    }

    // Todos
    async addTodo(req: Request, res: Response, next: NextFunction) {
        try {
            const { id, boardId, listId, cardId } = req.params;
            const userId = req.user?.id as string;
            const { title } = req.body;
            const result = await this.cardsService.addTodo(cardId, id, boardId, listId, userId, title);
            res.status(result.code).json({ success: result.success, message: result.message, data: result.data });
        } catch (error) {
            next(error);
        }
    }

    async updateTodo(req: Request, res: Response, next: NextFunction) {
        try {
            const { id, boardId, listId, cardId, todoId } = req.params;
            const userId = req.user?.id as string;
            const { completed } = req.body;
            const result = await this.cardsService.updateTodo(cardId, todoId, id, boardId, listId, userId, completed);
            res.status(result.code).json({ success: result.success, message: result.message, data: result.data });
        } catch (error) {
            next(error);
        }
    }

    async deleteTodo(req: Request, res: Response, next: NextFunction) {
        try {
            const { id, boardId, listId, cardId, todoId } = req.params;
            const userId = req.user?.id as string;
            const result = await this.cardsService.deleteTodo(cardId, todoId, id, boardId, listId, userId);
            res.status(result.code).json({ success: result.success, message: result.message, data: result.data });
        } catch (error) {
            next(error);
        }
    }

    // Members
    async addMember(req: Request, res: Response, next: NextFunction) {
        try {
            const { id, boardId, listId, cardId } = req.params;
            const userId = req.user?.id as string;
            const { userId: memberUserId } = req.body;
            const result = await this.cardsService.addMember(cardId, id, boardId, listId, userId, memberUserId);
            res.status(result.code).json({ success: result.success, message: result.message, data: result.data });
        } catch (error) {
            next(error);
        }
    }

    async removeMember(req: Request, res: Response, next: NextFunction) {
        try {
            const { id, boardId, listId, cardId, memberId } = req.params;
            const userId = req.user?.id as string;
            const result = await this.cardsService.removeMember(cardId, memberId, id, boardId, listId, userId);
            res.status(result.code).json({ success: result.success, message: result.message, data: result.data });
        } catch (error) {
            next(error);
        }
    }

    // Comments
    async addComment(req: Request, res: Response, next: NextFunction) {
        try {
            const { id, boardId, listId, cardId } = req.params;
            const userId = req.user?.id as string;
            const { content } = req.body;
            const result = await this.cardsService.addComment(cardId, id, boardId, listId, userId, content);
            res.status(result.code).json({ success: result.success, message: result.message, data: result.data });
        } catch (error) {
            next(error);
        }
    }

    async deleteComment(req: Request, res: Response, next: NextFunction) {
        try {
            const { id, boardId, listId, cardId, commentId } = req.params;
            const userId = req.user?.id as string;
            const result = await this.cardsService.deleteComment(cardId, commentId, id, boardId, listId, userId);
            res.status(result.code).json({ success: result.success, message: result.message, data: result.data });
        } catch (error) {
            next(error);
        }
    }
}
