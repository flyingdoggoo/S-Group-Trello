import { InvitationStatusEnum, NotificationTypeEnum } from '@prisma/client';

import { NotificationWithRelations } from '../../notification.repository';

export class NotificationActorResponseDto {
	id: string;
	name: string;
	avatar: string | null;
	email: string;

	constructor(data: {
		id: string;
		name: string | null;
		avatar: string | null;
		email: string;
	}) {
		this.id = data.id;
		this.name = data.name ?? data.email;
		this.avatar = data.avatar;
		this.email = data.email;
	}
}

export class NotificationInvitationResponseDto {
	id: string;
	token: string;
	status: InvitationStatusEnum;
	expiresAt: Date;
	project?: {
		id: string;
		slug: string;
		title: string;
	};
	board?: {
		id: string;
		slug: string;
		title: string;
		projectId: string;
	};

	constructor(data: NonNullable<NotificationWithRelations['invitation']>) {
		this.id = data.id;
		this.token = data.token;
		this.status = data.status;
		this.expiresAt = data.expiresAt;
		if (data.project) {
			this.project = {
				id: data.project.id,
				slug: data.project.slug,
				title: data.project.title,
			};
		}
		if (data.board) {
			this.board = {
				id: data.board.id,
				slug: data.board.slug,
				title: data.board.title,
				projectId: data.board.projectId,
			};
		}
	}
}

export class NotificationResponseDto {
	id: string;
	type: NotificationTypeEnum;
	title: string;
	message: string;
	isRead: boolean;
	readAt: Date | null;
	createdAt: Date;
	actor: NotificationActorResponseDto | null;
	invitation: NotificationInvitationResponseDto | null;

	constructor(data: NotificationWithRelations) {
		this.id = data.id;
		this.type = data.type;
		this.title = data.title;
		this.message = data.message;
		this.isRead = data.isRead;
		this.readAt = data.readAt;
		this.createdAt = data.createdAt;
		this.actor = data.actor ? new NotificationActorResponseDto(data.actor) : null;
		this.invitation = data.invitation
			? new NotificationInvitationResponseDto(data.invitation)
			: null;
	}
}
