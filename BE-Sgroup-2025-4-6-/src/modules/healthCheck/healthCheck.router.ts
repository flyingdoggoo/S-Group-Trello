import express, { Router } from 'express';

import { HealthCheckController } from './healthCheck.controller';

import { autoBindUtil } from '@/common';

const router = express.Router({ mergeParams: true });

const healthCheckController = new HealthCheckController();
autoBindUtil(healthCheckController);
router.get('/', healthCheckController.start);

export const healthCheckRouter: Router = router;
