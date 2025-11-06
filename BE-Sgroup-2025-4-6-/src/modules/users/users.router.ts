import { autoBindUtil, validateRequestMiddleware } from "@/common";
import { UsersController } from "./users.controller";
import express from 'express';
import { GetUsersRequestValidationSchema } from "./dtos";
import { AdminPermissionEnum } from "@/common/enums/";
import authMiddleware from '@/common/middlewares/auth.middleware';

const usersController = new UsersController();

const router = express.Router({ mergeParams: true });
autoBindUtil(usersController);

router.get('/', authMiddleware.verifyToken, validateRequestMiddleware(GetUsersRequestValidationSchema), authMiddleware.verifyPermission(AdminPermissionEnum.GET_USERS), usersController.getUsers);

export const usersRouter = router;
