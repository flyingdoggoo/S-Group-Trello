import { z } from 'zod';

export const NotificationTypeEnumSchema = z.enum(['INVITATION_SENT','INVITATION_ACCEPTED','INVITATION_REJECTED']);

export type NotificationTypeEnumType = `${z.infer<typeof NotificationTypeEnumSchema>}`

export default NotificationTypeEnumSchema;
