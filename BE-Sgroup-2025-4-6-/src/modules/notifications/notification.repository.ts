import { Notification, NotificationTypeEnum, Prisma } from '@prisma/client';

import { PrismaService } from '../database';

export type NotificationWithRelations = Prisma.NotificationGetPayload<{
	include: {
		actor: {
			select: {
				id: true;
				name: true;
				avatar: true;
				email: true;
			};
		};
		invitation: {
			include: {
				project: {
					select: {
						id: true;
						slug: true;
						title: true;
					};
				};
				board: {
					select: {
						id: true;
						slug: true;
						title: true;
						projectId: true;
					};
				};
			};
		};
	};
}>;

export class NotificationRepository {
	constructor(private readonly prismaService = new PrismaService()) {}

	private readonly includeRelations = {
		actor: {
			select: {
				id: true,
				name: true,
				avatar: true,
				email: true,
			},
		},
		invitation: {
			include: {
				project: {
					select: {
						id: true,
						slug: true,
						title: true,
					},
				},
				board: {
					select: {
						id: true,
						slug: true,
						title: true,
						projectId: true,
					},
				},
			},
		},
	} as const;

	async createNotification(data: {
		userId: string;
		actorId?: string;
		invitationId?: string;
		type: NotificationTypeEnum;
		title: string;
		message: string;
	}): Promise<Notification> {
		return this.prismaService.notification.create({
			data,
		});
	}

	async findNotifications(params: {
		userId: string;
		isRead?: boolean;
		skip: number;
		take: number;
	}): Promise<[NotificationWithRelations[], number]> {
		const where: Prisma.NotificationWhereInput = {
			userId: params.userId,
			...(typeof params.isRead === 'boolean'
				? { isRead: params.isRead }
				: {}),
		};

		return Promise.all([
			this.prismaService.notification.findMany({
				where,
				skip: params.skip,
				take: params.take,
				orderBy: {
					createdAt: 'desc',
				},
				include: this.includeRelations,
			}),
			this.prismaService.notification.count({ where }),
		]);
	}

	async countUnread(userId: string): Promise<number> {
		return this.prismaService.notification.count({
			where: {
				userId,
				isRead: false,
			},
		});
	}

	async findByIdForUser(
		notificationId: string,
		userId: string,
	): Promise<NotificationWithRelations | null> {
		return this.prismaService.notification.findFirst({
			where: {
				id: notificationId,
				userId,
			},
			include: this.includeRelations,
		});
	}

	async markAsRead(notificationId: string, userId: string): Promise<void> {
		await this.prismaService.notification.updateMany({
			where: {
				id: notificationId,
				userId,
				isRead: false,
			},
			data: {
				isRead: true,
				readAt: new Date(),
			},
		});
	}

	async markAllAsRead(userId: string): Promise<number> {
		const result = await this.prismaService.notification.updateMany({
			where: {
				userId,
				isRead: false,
			},
			data: {
				isRead: true,
				readAt: new Date(),
			},
		});

		return result.count;
	}
}
