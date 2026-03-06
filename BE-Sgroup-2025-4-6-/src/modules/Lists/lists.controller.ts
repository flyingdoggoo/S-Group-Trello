import { Request, Response, NextFunction } from 'express';
import { ListsService } from './lists.service';
import { autoBindUtil } from '@/common/utils';
import { CreateListRequestDto, UpdateListRequestDto, GetListsRequestDto } from './dtos/requests';

export class ListsController {
    constructor(private readonly listsService = new ListsService()) {
        autoBindUtil(this);
    }

    async createList(req: Request, res: Response, next: NextFunction) {
        try {
            const dto = new CreateListRequestDto(req.body);
            const userId = req.user?.id as string;
            const result = await this.listsService.createList(dto, userId);
            res.status(result.code).json({ success: result.success, message: result.message, data: result.data });
        } catch (error) {
            next(error);
        }
    }

    async getLists(req: Request, res: Response, next: NextFunction) {
        try {
            const dto = new GetListsRequestDto(req.query);
            const userId = req.user?.id as string;
            const result = await this.listsService.getLists(dto, userId);
            res.status(result.code).json({ success: result.success, message: result.message, data: result.data });
        } catch (error) {
            next(error);
        }
    }

    async getListById(req: Request, res: Response, next: NextFunction) {
        try {
            const { listId } = req.params;
            const userId = req.user?.id as string;
            const result = await this.listsService.getListById(listId, userId);
            res.status(result.code).json({ success: result.success, message: result.message, data: result.data });
        } catch (error) {
            next(error);
        }
    }

    async updateList(req: Request, res: Response, next: NextFunction) {
        try {
            const { listId } = req.params;
            const dto = new UpdateListRequestDto(req.body);
            const userId = req.user?.id as string;
            const result = await this.listsService.updateList(listId, userId, dto);
            res.status(result.code).json({ success: result.success, message: result.message, data: result.data });
        } catch (error) {
            next(error);
        }
    }

    async deleteList(req: Request, res: Response, next: NextFunction) {
        try {
            const { listId } = req.params;
            const userId = req.user?.id as string;
            const result = await this.listsService.deleteList(listId, userId);
            res.status(result.code).json({ success: result.success, message: result.message, data: result.data });
        } catch (error) {
            next(error);
        }
    }
}
