import { autoBindUtil, validateRequestMiddleware } from "@/common";
import { NotificationController } from "./notification.controllers";
import express from 'express';

const notificationController = new NotificationController();

const router = express.Router({ mergeParams: true });
autoBindUtil(notificationController);

router.get('/', notificationController.testReceiveNotification);

export const notificationRouter = router;