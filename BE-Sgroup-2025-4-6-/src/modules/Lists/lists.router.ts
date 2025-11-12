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
import { CardsRouter } from "../cards/cards.router";

const listsController = new ListsController();

const router = express.Router({ mergeParams: true });
autoBindUtil(listsController);

///boards/:boardId/lists
router.get(
    '/',
    authMiddleware.verifyToken,
    validateRequestMiddleware(GetListsRequestValidationSchema),
    authMiddleware.verifyPermission(ListPermissionEnum.GET_LIST),
    listsController.getLists
);

router.post(
    '/',
    authMiddleware.verifyToken,
    validateRequestMiddleware(CreateListRequestValidationSchema),
    authMiddleware.verifyPermission(ListPermissionEnum.CREATE_LIST),
    listsController.createList
);

router.get(
    '/:listId',
    authMiddleware.verifyToken,
    authMiddleware.verifyPermission(ListPermissionEnum.GET_LIST),
    listsController.getListById
);

router.put(
    '/:listId',
    authMiddleware.verifyToken,
    validateRequestMiddleware(UpdateListRequestValidationSchema),
    authMiddleware.verifyPermission(ListPermissionEnum.UPDATE_LIST),
    listsController.updateList
);

router.delete(
    '/:listId',
    authMiddleware.verifyToken,
    authMiddleware.verifyPermission(ListPermissionEnum.DELETE_LIST),
    listsController.deleteList
);

export const ListsRouter = router;

// Nested route for cards under a list
router.use('/:listId/cards', CardsRouter);
