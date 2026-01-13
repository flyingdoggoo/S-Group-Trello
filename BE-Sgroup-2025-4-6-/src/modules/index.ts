import { authRouter } from './auth/auth.router';
import { healthCheckRouter } from './healthCheck/healthCheck.router';
import { usersRouter } from './users/users.router';
import { projectsRouter } from './projects/projects.router';
import { notificationRouter } from './notifications/notification.routers';
import { invitationRouter } from './invitations/invitation.router';
import { roleRouter } from './roles/role.router';
export const Modules = {
	healthCheckRouter,
	authRouter,
	usersRouter,
	projectsRouter,
	invitationRouter,
	roleRouter,
	notificationRouter,
};
