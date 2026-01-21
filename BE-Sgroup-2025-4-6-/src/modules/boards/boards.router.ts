import { autoBindUtil, validateRequestMiddleware } from '@/common';
import { BoardsController } from './boards.controller';
import express from 'express';
import {
	CreateBoardRequestValidationSchema,
	UpdateBoardRequestValidationSchema,
	GetBoardsRequestValidationSchema,
} from './dtos';

import authMiddleware from '@/common/middlewares/auth.middleware';
import { BoardPermissionEnum } from '@/common/enums/permissions/boardPermission.enum';
import { ListsRouter } from '../Lists/lists.router';

const boardsController = new BoardsController();

const router = express.Router({ mergeParams: true });
autoBindUtil(boardsController);

// This router is mounted at /projects/:id/boards
// So base path '/' refers to boards within the given project (req.params.id)
router.get(
	'/',
	authMiddleware.verifyToken,
	validateRequestMiddleware(GetBoardsRequestValidationSchema),
	authMiddleware.verifyPermission(BoardPermissionEnum.GET_BOARD),
	boardsController.getBoards,
);
router.post(
	'/',
	authMiddleware.verifyToken,
	validateRequestMiddleware(CreateBoardRequestValidationSchema),
	authMiddleware.verifyPermission(BoardPermissionEnum.CREATE_BOARD),
	boardsController.createBoard,
);
router.get(
	'/:boardId',
	authMiddleware.verifyToken,
	authMiddleware.verifyPermission(BoardPermissionEnum.GET_BOARD),
	boardsController.getBoardById,
);
router.put(
	'/:boardId',
	authMiddleware.verifyToken,
	validateRequestMiddleware(UpdateBoardRequestValidationSchema),
	authMiddleware.verifyPermission(BoardPermissionEnum.UPDATE_BOARD),
	boardsController.updateBoard,
);
router.delete(
	'/:boardId',
	authMiddleware.verifyToken,
	authMiddleware.verifyPermission(BoardPermissionEnum.DELETE_BOARD),
	boardsController.deleteBoard,
);

router.get(
	'/:boardId/members',
	authMiddleware.verifyToken,
	boardsController.getBoardMembers,
);

router.put(
	'/:boardId/members/change-role',
	authMiddleware.verifyToken,
	authMiddleware.verifyPermission(BoardPermissionEnum.UPDATE_MEMBER_ROLE),
	boardsController.changeRoleOfMemberBoard,
);
router.use('/:boardId/lists', ListsRouter);

export const boardsRouter = router;
