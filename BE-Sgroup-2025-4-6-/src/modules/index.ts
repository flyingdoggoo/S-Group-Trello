import { authRegistry, authRouter } from './auth/auth.router';
import { healthCheckRegistry, healthCheckRouter } from './healthCheck/healthCheck.router';
import { usersRegistry, usersRouter } from './users/users.router';
import { projectsRegistry, projectsRouter } from './projects/projects.router';

export const Registries = [healthCheckRegistry, authRegistry, usersRegistry, projectsRegistry];

export const Modules = {
	healthCheckRouter,
	authRouter,
	usersRouter,
	projectsRouter
};
