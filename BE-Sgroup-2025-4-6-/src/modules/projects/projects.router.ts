import { autoBindUtil, validateRequestMiddleware } from '@/common';
import { ProjectsController } from './projects.controller';
import express from 'express';
import {
	CreateProjectRequestValidationSchema,
	UpdateProjectRequestValidationSchema,
	GetProjectsRequestValidationSchema,
} from './dtos';

import authMiddleware from '@/common/middlewares/auth.middleware';
import { ProjectPermissionEnum } from '@/common/enums/permissions/projectPermission.enum';
import { boardsRouter } from '../boards/boards.router';
import { invitationRouter } from '../invitations/invitation.router';

const projectsController = new ProjectsController();

const router = express.Router({ mergeParams: true });
autoBindUtil(projectsController);

router.post(
	'/',
	authMiddleware.verifyToken,
	validateRequestMiddleware(CreateProjectRequestValidationSchema),
	authMiddleware.verifyPermission(ProjectPermissionEnum.CREATE_PROJECT),
	projectsController.createProject,
);
router.get(
	'/',
	authMiddleware.verifyToken,
	validateRequestMiddleware(GetProjectsRequestValidationSchema),
	authMiddleware.verifyPermission(ProjectPermissionEnum.GET_PROJECT),
	projectsController.getProjects,
);
router.get(
	'/:id',
	authMiddleware.verifyToken,
	authMiddleware.verifyPermission(ProjectPermissionEnum.GET_PROJECT),
	projectsController.getProjectById,
);
router.put(
	'/:id',
	authMiddleware.verifyToken,
	validateRequestMiddleware(UpdateProjectRequestValidationSchema),
	authMiddleware.verifyPermission(ProjectPermissionEnum.UPDATE_PROJECT),
	projectsController.updateProject,
);
router.delete(
	'/:id',
	authMiddleware.verifyToken,
	authMiddleware.verifyPermission(ProjectPermissionEnum.DELETE_PROJECT),
	projectsController.deleteProject,
);
router.patch(
	'/:id/archive',
	authMiddleware.verifyToken,
	projectsController.archiveProject,
);

router.get(
	'/:id/members',
	authMiddleware.verifyToken,
	projectsController.getProjectMembers,
);

router.put(
	'/:id/members/change-role',
	authMiddleware.verifyToken,
	authMiddleware.verifyPermission(ProjectPermissionEnum.CHANGE_MEMBER_ROLE),
	projectsController.changeRoleOfMemberProject,
);

router.delete(
	'/:id/members/remove',
	authMiddleware.verifyToken,
	authMiddleware.verifyPermission(ProjectPermissionEnum.REMOVE_MEMBER),
	projectsController.removeMember,
);

router.use('/:id/boards', boardsRouter);

export const projectsRouter = router;
