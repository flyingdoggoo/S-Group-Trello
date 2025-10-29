import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import express from 'express';
import { StatusCodes } from 'http-status-codes';
import z from 'zod';
import { AuthController } from './auth.controller';
import {
	LoginRequestSchema,
	LoginRequestValidationSchema,
	LoginResponseDtoSchema,
	RegisterRequestSchema,
	RegisterRequestValidationSchema,
	RegisterResponseDtoSchema,
} from './dtos';
import { GoogleOauthStrategy } from './strategies/googleOauth.strategy';
import { autoBindUtil, validateRequestMiddleware } from '@/common';
import { createApiResponse } from '@/swagger/openAPIResponseBuilders';

// Initialize dependencies

export const authRegistry = new OpenAPIRegistry();

const authController = new AuthController();
const router = express.Router({ mergeParams: true });
autoBindUtil(authController);

new GoogleOauthStrategy();

authRegistry.registerPath({
	method: 'post',
	path: '/auth/register',
	tags: ['Auth'],
	request: RegisterRequestSchema,
	responses: createApiResponse(
		RegisterResponseDtoSchema,
		'Success',
		StatusCodes.CREATED,
	),
});
router.post(
	'/register',
	validateRequestMiddleware(RegisterRequestValidationSchema),
	authController.register,
);

authRegistry.registerPath({
	method: 'post',
	path: '/auth/login',
	tags: ['Auth'],
	request: LoginRequestSchema,
	responses: createApiResponse(LoginResponseDtoSchema, 'Success'),
});
router.post(
	'/login',
	validateRequestMiddleware(LoginRequestValidationSchema),
	authController.login,
);

authRegistry.registerPath({
	method: 'get',
	path: '/auth/google/login',
	tags: ['Auth'],
	responses: createApiResponse(z.null(), 'Success'),
});
router.get('/google/login', authController.googleAuth);

authRegistry.registerPath({
	method: 'get',
	path: '/auth/google/check-login',
	tags: ['Auth'],
	responses: createApiResponse(z.null(), 'Success'),
});
router.get('/google/check-login', authController.googleCallback);

authRegistry.registerPath({
	method: 'get',
	path: '/auth/google/login/failure',
	tags: ['Auth'],
	responses: createApiResponse(z.null(), 'Success'),
});
router.get('/google/login/failure', authController.googleCallback);

export const authRouter = router;
