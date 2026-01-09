import { z } from 'zod';
import { InvitationStatusEnumSchema } from '../inputTypeSchemas/InvitationStatusEnumSchema'
import { usersWithRelationsSchema, usersPartialWithRelationsSchema, usersOptionalDefaultsWithRelationsSchema } from './usersSchema'
import type { usersWithRelations, usersPartialWithRelations, usersOptionalDefaultsWithRelations } from './usersSchema'
import { projectWithRelationsSchema, projectPartialWithRelationsSchema, projectOptionalDefaultsWithRelationsSchema } from './projectSchema'
import type { projectWithRelations, projectPartialWithRelations, projectOptionalDefaultsWithRelations } from './projectSchema'
import { BoardWithRelationsSchema, BoardPartialWithRelationsSchema, BoardOptionalDefaultsWithRelationsSchema } from './BoardSchema'
import type { BoardWithRelations, BoardPartialWithRelations, BoardOptionalDefaultsWithRelations } from './BoardSchema'

/////////////////////////////////////////
// INVITATIONS SCHEMA
/////////////////////////////////////////

export const InvitationsSchema = z.object({
  status: InvitationStatusEnumSchema,
  id: z.uuid(),
  projectId: z.string().nullish(),
  boardId: z.string().nullish(),
  email: z.string(),
  roleId: z.string(),
  token: z.string(),
  createdBy: z.string(),
  createdAt: z.coerce.date(),
  expiresAt: z.coerce.date(),
  acceptedAt: z.coerce.date().nullish(),
})

export type Invitations = z.infer<typeof InvitationsSchema>

/////////////////////////////////////////
// INVITATIONS PARTIAL SCHEMA
/////////////////////////////////////////

export const InvitationsPartialSchema = InvitationsSchema.partial()

export type InvitationsPartial = z.infer<typeof InvitationsPartialSchema>

/////////////////////////////////////////
// INVITATIONS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const InvitationsOptionalDefaultsSchema = InvitationsSchema.merge(z.object({
  status: InvitationStatusEnumSchema.optional(),
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
}))

export type InvitationsOptionalDefaults = z.infer<typeof InvitationsOptionalDefaultsSchema>

/////////////////////////////////////////
// INVITATIONS RELATION SCHEMA
/////////////////////////////////////////

export type InvitationsRelations = {
  owner: usersWithRelations;
  project?: projectWithRelations | null;
  board?: BoardWithRelations | null;
};

export type InvitationsWithRelations = z.infer<typeof InvitationsSchema> & InvitationsRelations

export const InvitationsWithRelationsSchema: z.ZodType<InvitationsWithRelations> = InvitationsSchema.merge(z.object({
  owner: z.lazy(() => usersWithRelationsSchema),
  project: z.lazy(() => projectWithRelationsSchema).nullish(),
  board: z.lazy(() => BoardWithRelationsSchema).nullish(),
}))

/////////////////////////////////////////
// INVITATIONS OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type InvitationsOptionalDefaultsRelations = {
  owner: usersOptionalDefaultsWithRelations;
  project?: projectOptionalDefaultsWithRelations | null;
  board?: BoardOptionalDefaultsWithRelations | null;
};

export type InvitationsOptionalDefaultsWithRelations = z.infer<typeof InvitationsOptionalDefaultsSchema> & InvitationsOptionalDefaultsRelations

export const InvitationsOptionalDefaultsWithRelationsSchema: z.ZodType<InvitationsOptionalDefaultsWithRelations> = InvitationsOptionalDefaultsSchema.merge(z.object({
  owner: z.lazy(() => usersOptionalDefaultsWithRelationsSchema),
  project: z.lazy(() => projectOptionalDefaultsWithRelationsSchema).nullish(),
  board: z.lazy(() => BoardOptionalDefaultsWithRelationsSchema).nullish(),
}))

/////////////////////////////////////////
// INVITATIONS PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type InvitationsPartialRelations = {
  owner?: usersPartialWithRelations;
  project?: projectPartialWithRelations | null;
  board?: BoardPartialWithRelations | null;
};

export type InvitationsPartialWithRelations = z.infer<typeof InvitationsPartialSchema> & InvitationsPartialRelations

export const InvitationsPartialWithRelationsSchema: z.ZodType<InvitationsPartialWithRelations> = InvitationsPartialSchema.merge(z.object({
  owner: z.lazy(() => usersPartialWithRelationsSchema),
  project: z.lazy(() => projectPartialWithRelationsSchema).nullish(),
  board: z.lazy(() => BoardPartialWithRelationsSchema).nullish(),
})).partial()

export type InvitationsOptionalDefaultsWithPartialRelations = z.infer<typeof InvitationsOptionalDefaultsSchema> & InvitationsPartialRelations

export const InvitationsOptionalDefaultsWithPartialRelationsSchema: z.ZodType<InvitationsOptionalDefaultsWithPartialRelations> = InvitationsOptionalDefaultsSchema.merge(z.object({
  owner: z.lazy(() => usersPartialWithRelationsSchema),
  project: z.lazy(() => projectPartialWithRelationsSchema).nullish(),
  board: z.lazy(() => BoardPartialWithRelationsSchema).nullish(),
}).partial())

export type InvitationsWithPartialRelations = z.infer<typeof InvitationsSchema> & InvitationsPartialRelations

export const InvitationsWithPartialRelationsSchema: z.ZodType<InvitationsWithPartialRelations> = InvitationsSchema.merge(z.object({
  owner: z.lazy(() => usersPartialWithRelationsSchema),
  project: z.lazy(() => projectPartialWithRelationsSchema).nullish(),
  board: z.lazy(() => BoardPartialWithRelationsSchema).nullish(),
}).partial())

export default InvitationsSchema;
