import { z } from 'zod';

export const NotificationScalarFieldEnumSchema = z.enum(['id','userId','actorId','invitationId','type','title','message','isRead','readAt','createdAt','updatedAt']);

export default NotificationScalarFieldEnumSchema;
