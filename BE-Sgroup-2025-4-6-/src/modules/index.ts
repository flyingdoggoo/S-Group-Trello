import { authRouter } from './auth/auth.router';
import { healthCheckRouter } from './healthCheck/healthCheck.router';
import { usersRouter } from './users/users.router';
import { projectsRouter } from './projects/projects.router';

export const Modules = {
	healthCheckRouter,
	authRouter,
	usersRouter,
	projectsRouter
};
