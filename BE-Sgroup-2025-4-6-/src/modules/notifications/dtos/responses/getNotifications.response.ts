import { NotificationResponseDto } from './notification.response';

type PaginationResponseDto = {
	totalItems: number;
	itemsPerPage: number;
	currentPage: number;
	totalPages: number;
};

export class GetNotificationsResponseDto {
	items: NotificationResponseDto[];
	pagination: PaginationResponseDto;
	unreadCount: number;

	constructor(data: {
		items: NotificationResponseDto[];
		pagination: PaginationResponseDto;
		unreadCount: number;
	}) {
		this.items = data.items;
		this.pagination = data.pagination;
		this.unreadCount = data.unreadCount;
	}
}
