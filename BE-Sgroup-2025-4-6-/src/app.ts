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

const app: Express = express();

app.use(express.json());

// Set the application to trust the reverse proxy
app.set('trust proxy', true);

app.use(requestContextMiddleware);

app.use(setCookieMiddleware);

// Passport middleware
app.use(passport.initialize());

// Middlewares
const allowedOrigins = [
	"https://s-group-trello-pro.vercel.app",
	appEnv.CORS_ORIGIN,
	'http://localhost:5173',
	'https://flyingdoggoo.github.io',
];

app.use(
	cors({
		origin: (origin, callback) => {
			if (!origin || allowedOrigins.includes(origin)) {
				callback(null, true);
			} else {
				callback(new Error('Not allowed by CORS'));
			}
		},
		credentials: true,
		methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
		allowedHeaders: ['Content-Type', 'Authorization'],
	}),
);
app.use(helmet({
	crossOriginResourcePolicy: { policy: "cross-origin" },
	crossOriginEmbedderPolicy: false,
}));
app.use(morgan('combined'));

// Home route
app.get('/', (req, res) => {
	res.send(`
		<!DOCTYPE html>
		<html lang="en">
		<head>
			<meta charset="UTF-8">
			<meta name="viewport" content="width=device-width, initial-scale=1.0">
			<title>S-Group Trello API</title>
			<style>
				* { margin: 0; padding: 0; box-sizing: border-box; }
				body {
					font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
					background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
					min-height: 100vh;
					display: flex;
					align-items: center;
					justify-content: center;
					padding: 20px;
				}
				.container {
					background: white;
					border-radius: 20px;
					padding: 40px;
					max-width: 600px;
					width: 100%;
					box-shadow: 0 20px 60px rgba(0,0,0,0.3);
				}
				h1 {
					color: #667eea;
					font-size: 2.5em;
					margin-bottom: 10px;
					text-align: center;
				}
				.status {
					display: inline-flex;
					align-items: center;
					gap: 8px;
					background: #10b981;
					color: white;
					padding: 8px 16px;
					border-radius: 20px;
					font-weight: 600;
					margin: 20px auto;
					display: flex;
					width: fit-content;
				}
				.status::before {
					content: '';
					width: 12px;
					height: 12px;
					background: white;
					border-radius: 50%;
					animation: pulse 2s infinite;
				}
				@keyframes pulse {
					0%, 100% { opacity: 1; }
					50% { opacity: 0.5; }
				}
				.info {
					background: #f3f4f6;
					padding: 20px;
					border-radius: 10px;
					margin: 20px 0;
				}
				.info-item {
					display: flex;
					justify-content: space-between;
					padding: 10px 0;
					border-bottom: 1px solid #e5e7eb;
				}
				.info-item:last-child { border-bottom: none; }
				.label { color: #6b7280; font-weight: 500; }
				.value { color: #1f2937; font-weight: 600; }
				.endpoints {
					margin-top: 20px;
				}
				.endpoints h3 {
					color: #374151;
					margin-bottom: 10px;
				}
				.endpoint {
					background: #f9fafb;
					padding: 8px 12px;
					border-radius: 6px;
					margin: 6px 0;
					font-family: 'Courier New', monospace;
					font-size: 0.9em;
					color: #4b5563;
				}
			</style>
		</head>
		<body>
			<div class="container">
				<h1>🚀 S-Group Trello API</h1>
				<div class="status">Server is running</div>
				
				<div class="info">
					<div class="info-item">
						<span class="label">Environment</span>
						<span class="value">${appEnv.NODE_ENV}</span>
					</div>
					<div class="info-item">
						<span class="label">Port</span>
						<span class="value">${appEnv.PORT}</span>
					</div>
					<div class="info-item">
						<span class="label">Host</span>
						<span class="value">${appEnv.HOST}</span>
					</div>
					<div class="info-item">
						<span class="label">Time</span>
						<span class="value">${new Date().toLocaleString()}</span>
					</div>
				</div>

				<div class="endpoints">
					<h3>📡 Available Endpoints</h3>
					<div class="endpoint">GET /health-check</div>
					<div class="endpoint">POST /auth/login</div>
					<div class="endpoint">POST /auth/register</div>
					<div class="endpoint">POST /auth/verify</div>
					<div class="endpoint">GET /users</div>
					<div class="endpoint">GET /projects</div>
					<div class="endpoint">GET /roles</div>
				</div>
			</div>
		</body>
		</html>
	`);
});

app.use('/health-check', Modules.healthCheckRouter);
app.use('/auth', Modules.authRouter);
app.use('/users', Modules.usersRouter);
app.use('/projects', Modules.projectsRouter);
app.use('/invites', Modules.invitationRouter);
app.use('/roles', Modules.roleRouter);
app.use('/notifications', Modules.notificationRouter);
app.use(errorHandlerMiddleware);

// Export for Vercel serverless (CommonJS)
module.exports = app;
