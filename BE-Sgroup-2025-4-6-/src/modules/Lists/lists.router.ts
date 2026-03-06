import { autoBindUtil, validateRequestMiddleware } from "@/common";
import { ListsController } from "./lists.controller";
import express from 'express';
import {
    CreateListRequestValidationSchema,
    UpdateListRequestValidationSchema,
    GetListsRequestValidationSchema
} from "./dtos/requests";

import authMiddleware from '@/common/middlewares/auth.middleware';
import { ListPermissionEnum } from "@/common/enums/permissions/listPermission.enum";

const listsController = new ListsController();

const router = express.Router();
autoBindUtil(listsController);

// GET /lists?boardId=xxx
router.get(
    '/',
    authMiddleware.verifyToken,
    validateRequestMiddleware(GetListsRequestValidationSchema),
    authMiddleware.verifyPermission(ListPermissionEnum.GET_LIST),
    listsController.getLists
);

// POST /lists  (boardId in body)
router.post(
    '/',
    authMiddleware.verifyToken,
    validateRequestMiddleware(CreateListRequestValidationSchema),
    authMiddleware.verifyPermission(ListPermissionEnum.CREATE_LIST),
    listsController.createList
);

// GET /lists/:listId
router.get(
    '/:listId',
    authMiddleware.verifyToken,
    authMiddleware.verifyPermission(ListPermissionEnum.GET_LIST),
    listsController.getListById
);

// PUT /lists/:listId
router.put(
    '/:listId',
    authMiddleware.verifyToken,
    validateRequestMiddleware(UpdateListRequestValidationSchema),
    authMiddleware.verifyPermission(ListPermissionEnum.UPDATE_LIST),
    listsController.updateList
);

// DELETE /lists/:listId
router.delete(
    '/:listId',
    authMiddleware.verifyToken,
    authMiddleware.verifyPermission(ListPermissionEnum.DELETE_LIST),
    listsController.deleteList
);

export const ListsRouter = router;
