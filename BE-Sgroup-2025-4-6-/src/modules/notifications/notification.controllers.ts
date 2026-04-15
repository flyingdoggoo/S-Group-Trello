import { NextFunction, Request, Response } from 'express';

import { NotificationService } from './notification.services';
import { GetNotificationsRequestDto } from './dtos/requests';

export class NotificationController {
    constructor(private readonly notificationService = new NotificationService()) {}

    async getNotifications(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.user?.id as string;
            const dto = new GetNotificationsRequestDto(req.query);
            const result = await this.notificationService.getNotifications(userId, dto);

            res.status(result.code).json({
                success: result.success,
                message: result.message,
                data: result.data,
            });
        } catch (error) {
            next(error);
        }
    }

    async getUnreadCount(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.user?.id as string;
            const result = await this.notificationService.getUnreadCount(userId);

            res.status(result.code).json({
                success: result.success,
                message: result.message,
                data: result.data,
            });
        } catch (error) {
            next(error);
        }
    }

    async markAsRead(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.user?.id as string;
            const { id } = req.params;
            const result = await this.notificationService.markAsRead(userId, id);

            res.status(result.code).json({
                success: result.success,
                message: result.message,
                data: result.data,
            });
        } catch (error) {
            next(error);
        }
    }

    async markAllAsRead(req: Request, res: Response, next: NextFunction) {
        try {
            const userId = req.user?.id as string;
            const result = await this.notificationService.markAllAsRead(userId);

            res.status(result.code).json({
                success: result.success,
                message: result.message,
                data: result.data,
            });
        } catch (error) {
            next(error);
        }
    }
}