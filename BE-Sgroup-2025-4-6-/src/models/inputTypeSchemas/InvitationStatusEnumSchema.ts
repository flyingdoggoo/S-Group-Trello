import { z } from 'zod';

export const InvitationStatusEnumSchema = z.enum(['PENDING','ACCEPTED','EXPIRED','CANCELLED']);

export type InvitationStatusEnumType = `${z.infer<typeof InvitationStatusEnumSchema>}`

export default InvitationStatusEnumSchema;
