import { autoBindUtil, validateRequestMiddleware } from "@/common";
import { UsersController } from "./users.controller";
import express from 'express';
import { createApiResponse } from "@/swagger/openAPIResponseBuilders";
import z from "zod";
import { StatusCodes } from "http-status-codes";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { GetUsersRequestSchema, GetUsersRequestValidationSchema } from "./dtos";
import { PermissionForAdmin } from "@/common/enums/permission/permissionForAdmin.enum";
import authMiddleware from '@/common/middlewares/auth.middleware';

const usersController = new UsersController();

export const usersRegistry = new OpenAPIRegistry();

const router = express.Router({ mergeParams: true });
autoBindUtil(usersController);

usersRegistry.registerPath({
    method: 'get',
    path: '/users',
    tags: ['Users'],
    request: GetUsersRequestSchema,
    responses: createApiResponse(
        z.null(),
        'Success',
        StatusCodes.OK,
    ),
});

router.get('/', authMiddleware.verifyToken, validateRequestMiddleware(GetUsersRequestValidationSchema), authMiddleware.verifyPermission(PermissionForAdmin.GET_USERS), usersController.getUsers);

export const usersRouter = router;
