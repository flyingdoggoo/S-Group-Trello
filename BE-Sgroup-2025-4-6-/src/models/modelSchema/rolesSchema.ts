import { z } from 'zod';
import { ProjectMemberWithRelationsSchema, ProjectMemberPartialWithRelationsSchema, ProjectMemberOptionalDefaultsWithRelationsSchema } from './ProjectMemberSchema'
import type { ProjectMemberWithRelations, ProjectMemberPartialWithRelations, ProjectMemberOptionalDefaultsWithRelations } from './ProjectMemberSchema'
import { RolePermissionWithRelationsSchema, RolePermissionPartialWithRelationsSchema, RolePermissionOptionalDefaultsWithRelationsSchema } from './RolePermissionSchema'
import type { RolePermissionWithRelations, RolePermissionPartialWithRelations, RolePermissionOptionalDefaultsWithRelations } from './RolePermissionSchema'
import { UserRoleWithRelationsSchema, UserRolePartialWithRelationsSchema, UserRoleOptionalDefaultsWithRelationsSchema } from './UserRoleSchema'
import type { UserRoleWithRelations, UserRolePartialWithRelations, UserRoleOptionalDefaultsWithRelations } from './UserRoleSchema'

/////////////////////////////////////////
// ROLES SCHEMA
/////////////////////////////////////////

export const rolesSchema = z.object({
  id: z.uuid(),
  roleName: z.string(),
  desciption: z.string().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullish(),
})

export type roles = z.infer<typeof rolesSchema>

/////////////////////////////////////////
// ROLES PARTIAL SCHEMA
/////////////////////////////////////////

export const rolesPartialSchema = rolesSchema.partial()

export type rolesPartial = z.infer<typeof rolesPartialSchema>

/////////////////////////////////////////
// ROLES OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const rolesOptionalDefaultsSchema = rolesSchema.merge(z.object({
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type rolesOptionalDefaults = z.infer<typeof rolesOptionalDefaultsSchema>

/////////////////////////////////////////
// ROLES RELATION SCHEMA
/////////////////////////////////////////

export type rolesRelations = {
  projectMembers: ProjectMemberWithRelations[];
  RolePermission: RolePermissionWithRelations[];
  UserRole: UserRoleWithRelations[];
};

export type rolesWithRelations = z.infer<typeof rolesSchema> & rolesRelations

export const rolesWithRelationsSchema: z.ZodType<rolesWithRelations> = rolesSchema.merge(z.object({
  projectMembers: z.lazy(() => ProjectMemberWithRelationsSchema).array(),
  RolePermission: z.lazy(() => RolePermissionWithRelationsSchema).array(),
  UserRole: z.lazy(() => UserRoleWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// ROLES OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type rolesOptionalDefaultsRelations = {
  projectMembers: ProjectMemberOptionalDefaultsWithRelations[];
  RolePermission: RolePermissionOptionalDefaultsWithRelations[];
  UserRole: UserRoleOptionalDefaultsWithRelations[];
};

export type rolesOptionalDefaultsWithRelations = z.infer<typeof rolesOptionalDefaultsSchema> & rolesOptionalDefaultsRelations

export const rolesOptionalDefaultsWithRelationsSchema: z.ZodType<rolesOptionalDefaultsWithRelations> = rolesOptionalDefaultsSchema.merge(z.object({
  projectMembers: z.lazy(() => ProjectMemberOptionalDefaultsWithRelationsSchema).array(),
  RolePermission: z.lazy(() => RolePermissionOptionalDefaultsWithRelationsSchema).array(),
  UserRole: z.lazy(() => UserRoleOptionalDefaultsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// ROLES PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type rolesPartialRelations = {
  projectMembers?: ProjectMemberPartialWithRelations[];
  RolePermission?: RolePermissionPartialWithRelations[];
  UserRole?: UserRolePartialWithRelations[];
};

export type rolesPartialWithRelations = z.infer<typeof rolesPartialSchema> & rolesPartialRelations

export const rolesPartialWithRelationsSchema: z.ZodType<rolesPartialWithRelations> = rolesPartialSchema.merge(z.object({
  projectMembers: z.lazy(() => ProjectMemberPartialWithRelationsSchema).array(),
  RolePermission: z.lazy(() => RolePermissionPartialWithRelationsSchema).array(),
  UserRole: z.lazy(() => UserRolePartialWithRelationsSchema).array(),
})).partial()

export type rolesOptionalDefaultsWithPartialRelations = z.infer<typeof rolesOptionalDefaultsSchema> & rolesPartialRelations

export const rolesOptionalDefaultsWithPartialRelationsSchema: z.ZodType<rolesOptionalDefaultsWithPartialRelations> = rolesOptionalDefaultsSchema.merge(z.object({
  projectMembers: z.lazy(() => ProjectMemberPartialWithRelationsSchema).array(),
  RolePermission: z.lazy(() => RolePermissionPartialWithRelationsSchema).array(),
  UserRole: z.lazy(() => UserRolePartialWithRelationsSchema).array(),
}).partial())

export type rolesWithPartialRelations = z.infer<typeof rolesSchema> & rolesPartialRelations

export const rolesWithPartialRelationsSchema: z.ZodType<rolesWithPartialRelations> = rolesSchema.merge(z.object({
  projectMembers: z.lazy(() => ProjectMemberPartialWithRelationsSchema).array(),
  RolePermission: z.lazy(() => RolePermissionPartialWithRelationsSchema).array(),
  UserRole: z.lazy(() => UserRolePartialWithRelationsSchema).array(),
}).partial())

export default rolesSchema;
