import { z } from 'zod';
import { ProjectStatusEnumSchema } from '../inputTypeSchemas/ProjectStatusEnumSchema'
import { ProjectMemberWithRelationsSchema, ProjectMemberPartialWithRelationsSchema, ProjectMemberOptionalDefaultsWithRelationsSchema } from './ProjectMemberSchema'
import type { ProjectMemberWithRelations, ProjectMemberPartialWithRelations, ProjectMemberOptionalDefaultsWithRelations } from './ProjectMemberSchema'
import { BoardWithRelationsSchema, BoardPartialWithRelationsSchema, BoardOptionalDefaultsWithRelationsSchema } from './BoardSchema'
import type { BoardWithRelations, BoardPartialWithRelations, BoardOptionalDefaultsWithRelations } from './BoardSchema'
import { InvitationsWithRelationsSchema, InvitationsPartialWithRelationsSchema, InvitationsOptionalDefaultsWithRelationsSchema } from './InvitationsSchema'
import type { InvitationsWithRelations, InvitationsPartialWithRelations, InvitationsOptionalDefaultsWithRelations } from './InvitationsSchema'

/////////////////////////////////////////
// PROJECT SCHEMA
/////////////////////////////////////////

export const projectSchema = z.object({
  status: ProjectStatusEnumSchema,
  id: z.uuid(),
  title: z.string(),
  description: z.string().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullish(),
})

export type project = z.infer<typeof projectSchema>

/////////////////////////////////////////
// PROJECT PARTIAL SCHEMA
/////////////////////////////////////////

export const projectPartialSchema = projectSchema.partial()

export type projectPartial = z.infer<typeof projectPartialSchema>

/////////////////////////////////////////
// PROJECT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const projectOptionalDefaultsSchema = projectSchema.merge(z.object({
  status: ProjectStatusEnumSchema.optional(),
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type projectOptionalDefaults = z.infer<typeof projectOptionalDefaultsSchema>

/////////////////////////////////////////
// PROJECT RELATION SCHEMA
/////////////////////////////////////////

export type projectRelations = {
  members: ProjectMemberWithRelations[];
  Board: BoardWithRelations[];
  invitation: InvitationsWithRelations[];
};

export type projectWithRelations = z.infer<typeof projectSchema> & projectRelations

export const projectWithRelationsSchema: z.ZodType<projectWithRelations> = projectSchema.merge(z.object({
  members: z.lazy(() => ProjectMemberWithRelationsSchema).array(),
  Board: z.lazy(() => BoardWithRelationsSchema).array(),
  invitation: z.lazy(() => InvitationsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// PROJECT OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type projectOptionalDefaultsRelations = {
  members: ProjectMemberOptionalDefaultsWithRelations[];
  Board: BoardOptionalDefaultsWithRelations[];
  invitation: InvitationsOptionalDefaultsWithRelations[];
};

export type projectOptionalDefaultsWithRelations = z.infer<typeof projectOptionalDefaultsSchema> & projectOptionalDefaultsRelations

export const projectOptionalDefaultsWithRelationsSchema: z.ZodType<projectOptionalDefaultsWithRelations> = projectOptionalDefaultsSchema.merge(z.object({
  members: z.lazy(() => ProjectMemberOptionalDefaultsWithRelationsSchema).array(),
  Board: z.lazy(() => BoardOptionalDefaultsWithRelationsSchema).array(),
  invitation: z.lazy(() => InvitationsOptionalDefaultsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// PROJECT PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type projectPartialRelations = {
  members?: ProjectMemberPartialWithRelations[];
  Board?: BoardPartialWithRelations[];
  invitation?: InvitationsPartialWithRelations[];
};

export type projectPartialWithRelations = z.infer<typeof projectPartialSchema> & projectPartialRelations

export const projectPartialWithRelationsSchema: z.ZodType<projectPartialWithRelations> = projectPartialSchema.merge(z.object({
  members: z.lazy(() => ProjectMemberPartialWithRelationsSchema).array(),
  Board: z.lazy(() => BoardPartialWithRelationsSchema).array(),
  invitation: z.lazy(() => InvitationsPartialWithRelationsSchema).array(),
})).partial()

export type projectOptionalDefaultsWithPartialRelations = z.infer<typeof projectOptionalDefaultsSchema> & projectPartialRelations

export const projectOptionalDefaultsWithPartialRelationsSchema: z.ZodType<projectOptionalDefaultsWithPartialRelations> = projectOptionalDefaultsSchema.merge(z.object({
  members: z.lazy(() => ProjectMemberPartialWithRelationsSchema).array(),
  Board: z.lazy(() => BoardPartialWithRelationsSchema).array(),
  invitation: z.lazy(() => InvitationsPartialWithRelationsSchema).array(),
}).partial())

export type projectWithPartialRelations = z.infer<typeof projectSchema> & projectPartialRelations

export const projectWithPartialRelationsSchema: z.ZodType<projectWithPartialRelations> = projectSchema.merge(z.object({
  members: z.lazy(() => ProjectMemberPartialWithRelationsSchema).array(),
  Board: z.lazy(() => BoardPartialWithRelationsSchema).array(),
  invitation: z.lazy(() => InvitationsPartialWithRelationsSchema).array(),
}).partial())

export default projectSchema;
