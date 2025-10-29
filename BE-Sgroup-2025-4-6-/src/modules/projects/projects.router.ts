import { autoBindUtil, validateRequestMiddleware } from "@/common";
import { ProjectsController } from "./projects.controller";
import express from 'express';
import { createApiResponse } from "@/swagger/openAPIResponseBuilders";
import z from "zod";
import { StatusCodes } from "http-status-codes";
import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import { 
    CreateProjectRequestValidationSchema, 
    UpdateProjectRequestValidationSchema,
    GetProjectsRequestValidationSchema,
    CreateProjectRequestSchema,
    UpdateProjectRequestSchema,
    GetProjectsRequestSchema
} from "./dtos";

import authMiddleware from '@/common/middlewares/auth.middleware';

const projectsController = new ProjectsController();

export const projectsRegistry = new OpenAPIRegistry();

const router = express.Router({ mergeParams: true });
autoBindUtil(projectsController);

// Swagger documentation
projectsRegistry.registerPath({
    method: 'post',
    path: '/projects',
    tags: ['Projects'],
    request: CreateProjectRequestSchema,
    responses: createApiResponse(
        z.null(),
        'Success',
        StatusCodes.CREATED,
    ),
});

projectsRegistry.registerPath({
    method: 'get',
    path: '/projects',
    tags: ['Projects'],
    request: GetProjectsRequestSchema,
    responses: createApiResponse(
        z.null(),
        'Success',
        StatusCodes.OK,
    ),
});

projectsRegistry.registerPath({
    method: 'get',
    path: '/projects/{id}',
    tags: ['Projects'],
    responses: createApiResponse(
        z.null(),
        'Success',
        StatusCodes.OK,
    ),
});

projectsRegistry.registerPath({
    method: 'put',
    path: '/projects/{id}',
    tags: ['Projects'],
    request: UpdateProjectRequestSchema,
    responses: createApiResponse(
        z.null(),
        'Success',
        StatusCodes.OK,
    ),
});

projectsRegistry.registerPath({
    method: 'delete',
    path: '/projects/{id}',
    tags: ['Projects'],
    responses: createApiResponse(
        z.null(),
        'Success',
        StatusCodes.OK,
    ),
});

projectsRegistry.registerPath({
    method: 'patch',
    path: '/projects/{id}/archive',
    tags: ['Projects'],
    responses: createApiResponse(
        z.null(),
        'Success',
        StatusCodes.OK,
    ),
});

// Routes - Tất cả routes đều cần authentication
// router.post('/', authMiddleware.verifyToken, validateRequestMiddleware(CreateProjectRequestValidationSchema), projectsController.createProject);
// router.get('/', authMiddleware.verifyToken, validateRequestMiddleware(GetProjectsRequestValidationSchema), projectsController.getProjects);
// router.get('/:id', authMiddleware.verifyToken, projectsController.getProjectById);
// router.put('/:id', authMiddleware.verifyToken, validateRequestMiddleware(UpdateProjectRequestValidationSchema), projectsController.updateProject);
// router.delete('/:id', authMiddleware.verifyToken, projectsController.deleteProject);
// router.patch('/:id/archive', authMiddleware.verifyToken, projectsController.archiveProject);

router.post('/', authMiddleware.verifyToken, validateRequestMiddleware(CreateProjectRequestValidationSchema), projectsController.createProject);
router.get('/', authMiddleware.verifyToken, validateRequestMiddleware(GetProjectsRequestValidationSchema), projectsController.getProjects);
router.get('/:id', authMiddleware.verifyToken, projectsController.getProjectById);
router.put('/:id', authMiddleware.verifyToken, validateRequestMiddleware(UpdateProjectRequestValidationSchema), projectsController.updateProject);
router.delete('/:id', authMiddleware.verifyToken, projectsController.deleteProject);
router.patch('/:id/archive', authMiddleware.verifyToken, projectsController.archiveProject);

export const projectsRouter = router;
