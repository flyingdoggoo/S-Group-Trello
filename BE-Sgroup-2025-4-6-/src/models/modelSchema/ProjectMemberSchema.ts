import { z } from 'zod';
import { projectWithRelationsSchema, projectPartialWithRelationsSchema, projectOptionalDefaultsWithRelationsSchema } from './projectSchema'
import type { projectWithRelations, projectPartialWithRelations, projectOptionalDefaultsWithRelations } from './projectSchema'
import { usersWithRelationsSchema, usersPartialWithRelationsSchema, usersOptionalDefaultsWithRelationsSchema } from './usersSchema'
import type { usersWithRelations, usersPartialWithRelations, usersOptionalDefaultsWithRelations } from './usersSchema'
import { rolesWithRelationsSchema, rolesPartialWithRelationsSchema, rolesOptionalDefaultsWithRelationsSchema } from './rolesSchema'
import type { rolesWithRelations, rolesPartialWithRelations, rolesOptionalDefaultsWithRelations } from './rolesSchema'

/////////////////////////////////////////
// PROJECT MEMBER SCHEMA
/////////////////////////////////////////

export const ProjectMemberSchema = z.object({
  id: z.uuid(),
  projectId: z.string(),
  userId: z.string(),
  roleId: z.string(),
  joinedAt: z.coerce.date(),
})

export type ProjectMember = z.infer<typeof ProjectMemberSchema>

/////////////////////////////////////////
// PROJECT MEMBER PARTIAL SCHEMA
/////////////////////////////////////////

export const ProjectMemberPartialSchema = ProjectMemberSchema.partial()

export type ProjectMemberPartial = z.infer<typeof ProjectMemberPartialSchema>

/////////////////////////////////////////
// PROJECT MEMBER OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ProjectMemberOptionalDefaultsSchema = ProjectMemberSchema.merge(z.object({
  id: z.uuid().optional(),
  joinedAt: z.coerce.date().optional(),
}))

export type ProjectMemberOptionalDefaults = z.infer<typeof ProjectMemberOptionalDefaultsSchema>

/////////////////////////////////////////
// PROJECT MEMBER RELATION SCHEMA
/////////////////////////////////////////

export type ProjectMemberRelations = {
  project: projectWithRelations;
  user: usersWithRelations;
  role: rolesWithRelations;
};

export type ProjectMemberWithRelations = z.infer<typeof ProjectMemberSchema> & ProjectMemberRelations

export const ProjectMemberWithRelationsSchema: z.ZodType<ProjectMemberWithRelations> = ProjectMemberSchema.merge(z.object({
  project: z.lazy(() => projectWithRelationsSchema),
  user: z.lazy(() => usersWithRelationsSchema),
  role: z.lazy(() => rolesWithRelationsSchema),
}))

/////////////////////////////////////////
// PROJECT MEMBER OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type ProjectMemberOptionalDefaultsRelations = {
  project: projectOptionalDefaultsWithRelations;
  user: usersOptionalDefaultsWithRelations;
  role: rolesOptionalDefaultsWithRelations;
};

export type ProjectMemberOptionalDefaultsWithRelations = z.infer<typeof ProjectMemberOptionalDefaultsSchema> & ProjectMemberOptionalDefaultsRelations

export const ProjectMemberOptionalDefaultsWithRelationsSchema: z.ZodType<ProjectMemberOptionalDefaultsWithRelations> = ProjectMemberOptionalDefaultsSchema.merge(z.object({
  project: z.lazy(() => projectOptionalDefaultsWithRelationsSchema),
  user: z.lazy(() => usersOptionalDefaultsWithRelationsSchema),
  role: z.lazy(() => rolesOptionalDefaultsWithRelationsSchema),
}))

/////////////////////////////////////////
// PROJECT MEMBER PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ProjectMemberPartialRelations = {
  project?: projectPartialWithRelations;
  user?: usersPartialWithRelations;
  role?: rolesPartialWithRelations;
};

export type ProjectMemberPartialWithRelations = z.infer<typeof ProjectMemberPartialSchema> & ProjectMemberPartialRelations

export const ProjectMemberPartialWithRelationsSchema: z.ZodType<ProjectMemberPartialWithRelations> = ProjectMemberPartialSchema.merge(z.object({
  project: z.lazy(() => projectPartialWithRelationsSchema),
  user: z.lazy(() => usersPartialWithRelationsSchema),
  role: z.lazy(() => rolesPartialWithRelationsSchema),
})).partial()

export type ProjectMemberOptionalDefaultsWithPartialRelations = z.infer<typeof ProjectMemberOptionalDefaultsSchema> & ProjectMemberPartialRelations

export const ProjectMemberOptionalDefaultsWithPartialRelationsSchema: z.ZodType<ProjectMemberOptionalDefaultsWithPartialRelations> = ProjectMemberOptionalDefaultsSchema.merge(z.object({
  project: z.lazy(() => projectPartialWithRelationsSchema),
  user: z.lazy(() => usersPartialWithRelationsSchema),
  role: z.lazy(() => rolesPartialWithRelationsSchema),
}).partial())

export type ProjectMemberWithPartialRelations = z.infer<typeof ProjectMemberSchema> & ProjectMemberPartialRelations

export const ProjectMemberWithPartialRelationsSchema: z.ZodType<ProjectMemberWithPartialRelations> = ProjectMemberSchema.merge(z.object({
  project: z.lazy(() => projectPartialWithRelationsSchema),
  user: z.lazy(() => usersPartialWithRelationsSchema),
  role: z.lazy(() => rolesPartialWithRelationsSchema),
}).partial())

export default ProjectMemberSchema;
