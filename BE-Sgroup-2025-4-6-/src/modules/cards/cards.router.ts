import { autoBindUtil, validateRequestMiddleware } from "@/common";
import { CardsController } from "./cards.controller";
import express from 'express';
import {
    CreateCardRequestValidationSchema,
    UpdateCardRequestValidationSchema,
    GetCardsRequestValidationSchema
} from "./dtos/requests";

import authMiddleware from '@/common/middlewares/auth.middleware';
import { ListPermissionEnum } from "@/common/enums/permissions/listPermission.enum";

const cardsController = new CardsController();

const router = express.Router({ mergeParams: true });
autoBindUtil(cardsController);

// /boards/:boardId/lists/:listId/cards
router.get(
    '/',
    authMiddleware.verifyToken,
    validateRequestMiddleware(GetCardsRequestValidationSchema),
    authMiddleware.verifyPermission(ListPermissionEnum.GET_CARD),
    cardsController.getCards
);

router.post(
    '/',
    authMiddleware.verifyToken,
    validateRequestMiddleware(CreateCardRequestValidationSchema),
    authMiddleware.verifyPermission(ListPermissionEnum.CREATE_CARD),
    cardsController.createCard
);

router.get(
    '/:cardId',
    authMiddleware.verifyToken,
    authMiddleware.verifyPermission(ListPermissionEnum.GET_CARD),
    cardsController.getCardById
);

router.put(
    '/:cardId',
    authMiddleware.verifyToken,
    validateRequestMiddleware(UpdateCardRequestValidationSchema),
    authMiddleware.verifyPermission(ListPermissionEnum.UPDATE_CARD),
    cardsController.updateCard
);

router.delete(
    '/:cardId',
    authMiddleware.verifyToken,
    authMiddleware.verifyPermission(ListPermissionEnum.DELETE_CARD),
    cardsController.deleteCard
);

// Card Tags
router.post(
    '/:cardId/tags',
    authMiddleware.verifyToken,
    authMiddleware.verifyPermission(ListPermissionEnum.UPDATE_CARD),
    cardsController.addTag
);

router.delete(
    '/:cardId/tags/:tagId',
    authMiddleware.verifyToken,
    authMiddleware.verifyPermission(ListPermissionEnum.UPDATE_CARD),
    cardsController.deleteTag
);

// Card Todos
router.post(
    '/:cardId/todos',
    authMiddleware.verifyToken,
    authMiddleware.verifyPermission(ListPermissionEnum.UPDATE_CARD),
    cardsController.addTodo
);

router.patch(
    '/:cardId/todos/:todoId',
    authMiddleware.verifyToken,
    authMiddleware.verifyPermission(ListPermissionEnum.UPDATE_CARD),
    cardsController.updateTodo
);

router.delete(
    '/:cardId/todos/:todoId',
    authMiddleware.verifyToken,
    authMiddleware.verifyPermission(ListPermissionEnum.UPDATE_CARD),
    cardsController.deleteTodo
);

// Card Members
router.post(
    '/:cardId/members',
    authMiddleware.verifyToken,
    authMiddleware.verifyPermission(ListPermissionEnum.UPDATE_CARD),
    cardsController.addMember
);

router.delete(
    '/:cardId/members/:memberId',
    authMiddleware.verifyToken,
    authMiddleware.verifyPermission(ListPermissionEnum.UPDATE_CARD),
    cardsController.removeMember
);

// Card Comments
router.post(
    '/:cardId/comments',
    authMiddleware.verifyToken,
    authMiddleware.verifyPermission(ListPermissionEnum.UPDATE_CARD),
    cardsController.addComment
);

router.delete(
    '/:cardId/comments/:commentId',
    authMiddleware.verifyToken,
    authMiddleware.verifyPermission(ListPermissionEnum.UPDATE_CARD),
    cardsController.deleteComment
);

export const CardsRouter = router;
