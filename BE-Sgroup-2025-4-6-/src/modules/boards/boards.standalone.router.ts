import { autoBindUtil } from '@/common';
import { BoardsController } from './boards.controller';
import express from 'express';
import authMiddleware from '@/common/middlewares/auth.middleware';
import { BoardPermissionEnum } from '@/common/enums/permissions/boardPermission.enum';

const boardsController = new BoardsController();
autoBindUtil(boardsController);

const router = express.Router();

// GET /boards/:boardId — flat endpoint (no projectId needed)
router.get(
	'/:boardId',
	authMiddleware.verifyToken,
	authMiddleware.verifyPermission(BoardPermissionEnum.GET_BOARD),
	boardsController.getBoardByIdFlat,
);

// GET /boards/:boardId/members — flat endpoint
router.get(
	'/:boardId/members',
	authMiddleware.verifyToken,
	boardsController.getBoardMembers,
);

// PUT /boards/:boardId/members/change-role — flat endpoint
router.put(
	'/:boardId/members/change-role',
	authMiddleware.verifyToken,
	authMiddleware.verifyPermission(BoardPermissionEnum.UPDATE_MEMBER_ROLE),
	boardsController.changeRoleOfMemberBoard,
);

// DELETE /boards/:boardId/members/remove — flat endpoint
router.delete(
	'/:boardId/members/remove',
	authMiddleware.verifyToken,
	authMiddleware.verifyPermission(BoardPermissionEnum.REMOVE_MEMBER),
	boardsController.removeMemberBoard,
);

export const boardsStandaloneRouter = router;
