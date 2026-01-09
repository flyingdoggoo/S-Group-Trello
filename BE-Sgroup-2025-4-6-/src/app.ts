import 'reflect-metadata';

import cors from 'cors';
import express, { Express } from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import passport from 'passport';

import { Modules } from './modules';
import { appEnv } from './configs';
import {
	errorHandlerMiddleware,
	requestContextMiddleware,
	setCookieMiddleware,
} from './common';

import { NotificationGateway } from './modules/notifications/notification.gateway';
import { createSecretKey } from 'crypto';
import { createServer } from 'http';
const app: Express = express();

app.use(express.json());

// Set the application to trust the reverse proxy
app.set('trust proxy', true);

app.use(requestContextMiddleware);

app.use(setCookieMiddleware);

// Passport middleware
app.use(passport.initialize());

// Middlewares
const allowedOrigins = appEnv.CORS_ORIGIN.split(',');
app.use(
	cors({
		origin: (origin, callback) => {
			if (!origin || allowedOrigins.includes(origin)) callback(null, true);
			else callback(new Error('Not allowed by CORS'));
		},
		credentials: true,
	}),
);
app.use(helmet());
app.use(morgan('combined'));

app.use('/health-check', Modules.healthCheckRouter);
app.use('/auth', Modules.authRouter);
app.use('/users', Modules.usersRouter);
app.use('/projects', Modules.projectsRouter);
app.use('/invites', Modules.invitationRouter);
app.use('/roles', Modules.roleRouter);
app.use('/notifications', Modules.notificationRouter);
app.use(errorHandlerMiddleware);

const server = createServer(app);

const notificationGateway = new NotificationGateway();
notificationGateway.initialize(server);

server.listen(appEnv.PORT, () => {
	const { NODE_ENV, HOST, PORT } = appEnv;
	console.log(`Server (${NODE_ENV}) running at http://${HOST}:${PORT}`);
});
