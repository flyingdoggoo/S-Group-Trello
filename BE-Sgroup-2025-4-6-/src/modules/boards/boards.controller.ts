import { Request, Response, NextFunction } from 'express';
import { BoardsService } from './boards.service';
import { autoBindUtil } from '@/common/utils';
import { CreateBoardRequestDto, UpdateBoardRequestDto, GetBoardsRequestDto } from './dtos';

export class BoardsController {
    constructor(
        private readonly boardsService = new BoardsService()
    ) {
        autoBindUtil(this);
    }

    async createBoard(req: Request, res: Response, next: NextFunction) {
        try {
            const dto = new CreateBoardRequestDto(req.body);
            const userId = req.user?.id as string; 
            const projectId = req.params.id as string;
            const result = await this.boardsService.createBoard(dto, userId, projectId);
            console.log('=== CREATE BOARD CONTROLLER ===');
            console.log('Request Body:', req.body);
            console.log('DTO:', dto);
            console.log('User ID:', userId);
            console.log('Project ID:', projectId);
            console.log('Service Result:', result);
            res.status(result.code).json({
                success: result.success,
                message: result.message,
                data: result.data
            });
        } catch (error) {
            next(error);
        }
    }

    async getBoards(req: Request, res: Response, next: NextFunction) {
        try {
            const dto = new GetBoardsRequestDto(req.query);
            const projectId = req.params.id as string; // parent param
            const userId = req.user?.id as string;
            const result = await this.boardsService.getBoards(dto, projectId, userId);
            
            res.status(result.code).json({
                success: result.success,
                message: result.message,
                data: result.data
            });
        } catch (error) {
            next(error);
        }
    }

    async getBoardById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id, boardId } = req.params;
            const userId = req.user?.id as string;
            const result = await this.boardsService.getBoardById(boardId, id, userId);

            res.status(result.code).json({
                success: result.success,
                message: result.message,
                data: result.data
            });
        } catch (error) {
            next(error);
        }
    }

    async updateBoard(req: Request, res: Response, next: NextFunction) {
        try {
            const { id, boardId } = req.params;
            const dto = new UpdateBoardRequestDto(req.body);
            const userId = req.user?.id as string;
            const result = await this.boardsService.updateBoard(boardId, id, userId, dto);

            res.status(result.code).json({
                success: result.success,
                message: result.message,
                data: result.data
            });
        } catch (error) {
            next(error);
        }
    }

    async deleteBoard(req: Request, res: Response, next: NextFunction) {
        try {
            const { id, boardId } = req.params;
            const userId = req.user?.id as string;
            const result = await this.boardsService.deleteBoard(boardId, id, userId);

            res.status(result.code).json({
                success: result.success,
                message: result.message,
                data: result.data
            });
        } catch (error) {
            next(error);
        }
    }
}
