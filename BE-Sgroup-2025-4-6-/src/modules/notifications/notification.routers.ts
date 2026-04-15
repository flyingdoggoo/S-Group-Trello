import { autoBindUtil, validateRequestMiddleware } from '@/common';
import authMiddleware from '@/common/middlewares/auth.middleware';
import { NotificationController } from './notification.controllers';
import {
	GetNotificationsRequestValidationSchema,
	MarkNotificationAsReadValidationSchema,
} from './dtos/requests';
import express from 'express';

const notificationController = new NotificationController();

const router = express.Router({ mergeParams: true });
autoBindUtil(notificationController);

router.get(
	'/',
	authMiddleware.verifyToken,
	validateRequestMiddleware(GetNotificationsRequestValidationSchema),
	notificationController.getNotifications,
);

router.get(
	'/unread-count',
	authMiddleware.verifyToken,
	notificationController.getUnreadCount,
);

router.patch(
	'/read-all',
	authMiddleware.verifyToken,
	notificationController.markAllAsRead,
);

router.patch(
	'/:id/read',
	authMiddleware.verifyToken,
	validateRequestMiddleware(MarkNotificationAsReadValidationSchema),
	notificationController.markAsRead,
);

export const notificationRouter = router;