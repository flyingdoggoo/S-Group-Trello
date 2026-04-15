import { z } from 'zod';
import { NotificationTypeEnumSchema } from '../inputTypeSchemas/NotificationTypeEnumSchema'
import { usersWithRelationsSchema, usersPartialWithRelationsSchema, usersOptionalDefaultsWithRelationsSchema } from './usersSchema'
import type { usersWithRelations, usersPartialWithRelations, usersOptionalDefaultsWithRelations } from './usersSchema'
import { InvitationsWithRelationsSchema, InvitationsPartialWithRelationsSchema, InvitationsOptionalDefaultsWithRelationsSchema } from './InvitationsSchema'
import type { InvitationsWithRelations, InvitationsPartialWithRelations, InvitationsOptionalDefaultsWithRelations } from './InvitationsSchema'

/////////////////////////////////////////
// NOTIFICATION SCHEMA
/////////////////////////////////////////

export const NotificationSchema = z.object({
  type: NotificationTypeEnumSchema,
  id: z.uuid(),
  userId: z.string(),
  actorId: z.string().nullish(),
  invitationId: z.string().nullish(),
  title: z.string(),
  message: z.string(),
  isRead: z.boolean(),
  readAt: z.coerce.date().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type Notification = z.infer<typeof NotificationSchema>

/////////////////////////////////////////
// NOTIFICATION PARTIAL SCHEMA
/////////////////////////////////////////

export const NotificationPartialSchema = NotificationSchema.partial()

export type NotificationPartial = z.infer<typeof NotificationPartialSchema>

/////////////////////////////////////////
// NOTIFICATION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const NotificationOptionalDefaultsSchema = NotificationSchema.merge(z.object({
  id: z.uuid().optional(),
  isRead: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type NotificationOptionalDefaults = z.infer<typeof NotificationOptionalDefaultsSchema>

/////////////////////////////////////////
// NOTIFICATION RELATION SCHEMA
/////////////////////////////////////////

export type NotificationRelations = {
  user: usersWithRelations;
  actor?: usersWithRelations | null;
  invitation?: InvitationsWithRelations | null;
};

export type NotificationWithRelations = z.infer<typeof NotificationSchema> & NotificationRelations

export const NotificationWithRelationsSchema: z.ZodType<NotificationWithRelations> = NotificationSchema.merge(z.object({
  user: z.lazy(() => usersWithRelationsSchema),
  actor: z.lazy(() => usersWithRelationsSchema).nullish(),
  invitation: z.lazy(() => InvitationsWithRelationsSchema).nullish(),
}))

/////////////////////////////////////////
// NOTIFICATION OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type NotificationOptionalDefaultsRelations = {
  user: usersOptionalDefaultsWithRelations;
  actor?: usersOptionalDefaultsWithRelations | null;
  invitation?: InvitationsOptionalDefaultsWithRelations | null;
};

export type NotificationOptionalDefaultsWithRelations = z.infer<typeof NotificationOptionalDefaultsSchema> & NotificationOptionalDefaultsRelations

export const NotificationOptionalDefaultsWithRelationsSchema: z.ZodType<NotificationOptionalDefaultsWithRelations> = NotificationOptionalDefaultsSchema.merge(z.object({
  user: z.lazy(() => usersOptionalDefaultsWithRelationsSchema),
  actor: z.lazy(() => usersOptionalDefaultsWithRelationsSchema).nullish(),
  invitation: z.lazy(() => InvitationsOptionalDefaultsWithRelationsSchema).nullish(),
}))

/////////////////////////////////////////
// NOTIFICATION PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type NotificationPartialRelations = {
  user?: usersPartialWithRelations;
  actor?: usersPartialWithRelations | null;
  invitation?: InvitationsPartialWithRelations | null;
};

export type NotificationPartialWithRelations = z.infer<typeof NotificationPartialSchema> & NotificationPartialRelations

export const NotificationPartialWithRelationsSchema: z.ZodType<NotificationPartialWithRelations> = NotificationPartialSchema.merge(z.object({
  user: z.lazy(() => usersPartialWithRelationsSchema),
  actor: z.lazy(() => usersPartialWithRelationsSchema).nullish(),
  invitation: z.lazy(() => InvitationsPartialWithRelationsSchema).nullish(),
})).partial()

export type NotificationOptionalDefaultsWithPartialRelations = z.infer<typeof NotificationOptionalDefaultsSchema> & NotificationPartialRelations

export const NotificationOptionalDefaultsWithPartialRelationsSchema: z.ZodType<NotificationOptionalDefaultsWithPartialRelations> = NotificationOptionalDefaultsSchema.merge(z.object({
  user: z.lazy(() => usersPartialWithRelationsSchema),
  actor: z.lazy(() => usersPartialWithRelationsSchema).nullish(),
  invitation: z.lazy(() => InvitationsPartialWithRelationsSchema).nullish(),
}).partial())

export type NotificationWithPartialRelations = z.infer<typeof NotificationSchema> & NotificationPartialRelations

export const NotificationWithPartialRelationsSchema: z.ZodType<NotificationWithPartialRelations> = NotificationSchema.merge(z.object({
  user: z.lazy(() => usersPartialWithRelationsSchema),
  actor: z.lazy(() => usersPartialWithRelationsSchema).nullish(),
  invitation: z.lazy(() => InvitationsPartialWithRelationsSchema).nullish(),
}).partial())

export default NotificationSchema;
