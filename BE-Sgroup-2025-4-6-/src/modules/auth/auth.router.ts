import express from 'express';
import { AuthController } from './auth.controller';
import {
	LoginRequestValidationSchema,
	RegisterRequestValidationSchema,
	verifyRequestValidationSchema,
} from './dtos';
import { GoogleOauthStrategy } from './strategies/googleOauth.strategy';
import { autoBindUtil, validateRequestMiddleware } from '@/common';

// Initialize dependencies

const authController = new AuthController();
const router = express.Router({ mergeParams: true });
autoBindUtil(authController);

new GoogleOauthStrategy();

router.post(
	'/register',
	validateRequestMiddleware(RegisterRequestValidationSchema),
	authController.register,
);
router.post(
	'/login',
	validateRequestMiddleware(LoginRequestValidationSchema),
	authController.login,
);
router.get('/google/login', authController.googleAuth);
router.get('/google/check-login', authController.googleCallback);
router.get('/google/login/failure', authController.authFailure);
router.post(
	'/verify',
	validateRequestMiddleware(verifyRequestValidationSchema),
	authController.verify,
);

export const authRouter = router;
