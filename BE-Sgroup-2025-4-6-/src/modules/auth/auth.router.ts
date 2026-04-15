import express from 'express';
import { AuthController } from './auth.controller';
import {
	ForgotPasswordRequestValidationSchema,
	LoginRequestValidationSchema,
	LogoutRequestValidationSchema,
	RefreshTokenRequestValidationSchema,
	RegisterRequestValidationSchema,
	ResetPasswordRequestValidationSchema,
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
router.post(
	'/refresh-token',
	validateRequestMiddleware(RefreshTokenRequestValidationSchema),
	authController.refreshToken,
);
router.post(
	'/logout',
	validateRequestMiddleware(LogoutRequestValidationSchema),
	authController.logout,
);

router.post(
	'/forgot-password/send-otp',
	validateRequestMiddleware(ForgotPasswordRequestValidationSchema),
	authController.forgotPasswordSendOtp,
);
router.post(
	'/forgot-password/reset',
	validateRequestMiddleware(ResetPasswordRequestValidationSchema),
	authController.resetPassword,
);

router.get('/google/login', authController.googleAuth);
router.get('/google/check-login', authController.googleCallback);
router.get('/google/callback', authController.googleCallback);
router.get('/google/login/failure', authController.authFailure);
router.post(
	'/verify',
	validateRequestMiddleware(verifyRequestValidationSchema),
	authController.verify,
);

export const authRouter = router;
