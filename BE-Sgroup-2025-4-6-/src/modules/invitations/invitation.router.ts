import { Board } from './../../models/modelSchema/BoardSchema';
import { InvitationController } from './invitation.controller';
import { autoBindUtil, validateRequestMiddleware } from '@/common';
import { BoardPermissionEnum, ProjectPermissionEnum } from '@/common/enums';
import authMiddleware from '@/common/middlewares/auth.middleware';
import { CreateInvitationRequestValidationSchema } from './dtos/requests/createInvitation.request';
import express from 'express';
import { AcceptInvitationRequestValidationSchema } from './dtos/requests';
const invitationController = new InvitationController();

const router = express.Router({ mergeParams: true });
autoBindUtil(invitationController);

// /projects/:id
router.post(
	'/projects/:id',
	authMiddleware.verifyToken,
	authMiddleware.verifyPermission(ProjectPermissionEnum.INVITE_MEMBER),
	validateRequestMiddleware(CreateInvitationRequestValidationSchema),
	invitationController.inviteUserToProject,
);

// /boards/:id
router.post(
	'/boards/:id',
	authMiddleware.verifyToken,
	authMiddleware.verifyPermission(BoardPermissionEnum.INVITE_MEMBER),
	validateRequestMiddleware(CreateInvitationRequestValidationSchema),
	invitationController.inviteUserToBoard,
);

// /invitations/:token/accept
router.post(
	'/:token/accept',
	authMiddleware.verifyToken,

	invitationController.acceptInvitation,
);

router.post(
	'/:token/reject',
	authMiddleware.verifyToken,
	invitationController.rejectInvitation,
);

router.get('/:token', invitationController.getInvitationInfo);

export const invitationRouter = router;
