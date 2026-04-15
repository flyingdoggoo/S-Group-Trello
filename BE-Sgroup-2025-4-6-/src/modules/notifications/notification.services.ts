import {
    NotFoundException,
    PaginationUtils,
    ResponseStatus,
    ServiceResponse,
} from '@/common';
import { StatusCodes } from 'http-status-codes';

import { GetNotificationsRequestDto } from './dtos/requests';
import {
    GetNotificationsResponseDto,
    NotificationResponseDto,
} from './dtos/responses';
import { NotificationRepository } from './notification.repository';

export class NotificationService {
    constructor(
        private readonly notificationRepository: NotificationRepository =
            new NotificationRepository(),
    ) {}

    async getNotifications(
        userId: string,
        dto: GetNotificationsRequestDto,
    ): Promise<ServiceResponse<GetNotificationsResponseDto>> {
        const page = dto.page ?? 1;
        const limit = dto.limit ?? 10;

        const paginationUtils = new PaginationUtils().extractSkipTakeFromPagination({
            page,
            limit,
        });

        const [notifications, unreadCount] = await Promise.all([
            this.notificationRepository.findNotifications({
                userId,
                isRead: dto.isRead,
                skip: paginationUtils.skip,
                take: paginationUtils.take,
            }),
            this.notificationRepository.countUnread(userId),
        ]);

        const [items, totalCount] = notifications;
        const notificationDtos = items.map((item) => new NotificationResponseDto(item));

        return new ServiceResponse(
            ResponseStatus.Success,
            'Notifications retrieved successfully',
            new GetNotificationsResponseDto({
                items: notificationDtos,
                pagination:
                    paginationUtils.convertPaginationResponseDtoFromTotalRecords(totalCount),
                unreadCount,
            }),
            StatusCodes.OK,
        );
    }

    async getUnreadCount(
        userId: string,
    ): Promise<ServiceResponse<{ unreadCount: number }>> {
        const unreadCount = await this.notificationRepository.countUnread(userId);

        return new ServiceResponse(
            ResponseStatus.Success,
            'Unread notification count retrieved successfully',
            { unreadCount },
            StatusCodes.OK,
        );
    }

    async markAsRead(
        userId: string,
        notificationId: string,
    ): Promise<ServiceResponse<NotificationResponseDto>> {
        const notification = await this.notificationRepository.findByIdForUser(
            notificationId,
            userId,
        );

        if (!notification) {
            throw new NotFoundException('Notification not found');
        }

        if (!notification.isRead) {
            await this.notificationRepository.markAsRead(notificationId, userId);
        }

        const updatedNotification = await this.notificationRepository.findByIdForUser(
            notificationId,
            userId,
        );

        if (!updatedNotification) {
            throw new NotFoundException('Notification not found');
        }

        return new ServiceResponse(
            ResponseStatus.Success,
            'Notification marked as read',
            new NotificationResponseDto(updatedNotification),
            StatusCodes.OK,
        );
    }

    async markAllAsRead(
        userId: string,
    ): Promise<ServiceResponse<{ updatedCount: number }>> {
        const updatedCount = await this.notificationRepository.markAllAsRead(userId);

        return new ServiceResponse(
            ResponseStatus.Success,
            'All notifications marked as read',
            { updatedCount },
            StatusCodes.OK,
        );
    }
}