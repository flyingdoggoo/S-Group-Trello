import { authRouter } from './auth/auth.router';
import { healthCheckRouter } from './healthCheck/healthCheck.router';
import { usersRouter } from './users/users.router';
import { projectsRouter } from './projects/projects.router';
import { notificationRouter } from './notifications/notification.routers';
import { invitationRouter } from './invitations/invitation.router';
import { roleRouter } from './roles/role.router';
import { ListsRouter } from './Lists/lists.router';
import { CardsRouter } from './cards/cards.router';
import { boardsStandaloneRouter } from './boards/boards.standalone.router';

export const Modules = {
	healthCheckRouter,
	authRouter,
	usersRouter,
	projectsRouter,
	invitationRouter,
	roleRouter,
	notificationRouter,
	listsRouter: ListsRouter,
	cardsRouter: CardsRouter,
	boardsStandaloneRouter,
};
