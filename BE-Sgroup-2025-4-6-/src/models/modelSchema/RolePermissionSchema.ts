import { z } from 'zod';
import { permissionWithRelationsSchema, permissionPartialWithRelationsSchema, permissionOptionalDefaultsWithRelationsSchema } from './permissionSchema'
import type { permissionWithRelations, permissionPartialWithRelations, permissionOptionalDefaultsWithRelations } from './permissionSchema'
import { rolesWithRelationsSchema, rolesPartialWithRelationsSchema, rolesOptionalDefaultsWithRelationsSchema } from './rolesSchema'
import type { rolesWithRelations, rolesPartialWithRelations, rolesOptionalDefaultsWithRelations } from './rolesSchema'

/////////////////////////////////////////
// ROLE PERMISSION SCHEMA
/////////////////////////////////////////

export const RolePermissionSchema = z.object({
  id: z.uuid(),
  roleId: z.string(),
  permissionId: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullish(),
})

export type RolePermission = z.infer<typeof RolePermissionSchema>

/////////////////////////////////////////
// ROLE PERMISSION PARTIAL SCHEMA
/////////////////////////////////////////

export const RolePermissionPartialSchema = RolePermissionSchema.partial()

export type RolePermissionPartial = z.infer<typeof RolePermissionPartialSchema>

/////////////////////////////////////////
// ROLE PERMISSION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const RolePermissionOptionalDefaultsSchema = RolePermissionSchema.merge(z.object({
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type RolePermissionOptionalDefaults = z.infer<typeof RolePermissionOptionalDefaultsSchema>

/////////////////////////////////////////
// ROLE PERMISSION RELATION SCHEMA
/////////////////////////////////////////

export type RolePermissionRelations = {
  permission: permissionWithRelations;
  role: rolesWithRelations;
};

export type RolePermissionWithRelations = z.infer<typeof RolePermissionSchema> & RolePermissionRelations

export const RolePermissionWithRelationsSchema: z.ZodType<RolePermissionWithRelations> = RolePermissionSchema.merge(z.object({
  permission: z.lazy(() => permissionWithRelationsSchema),
  role: z.lazy(() => rolesWithRelationsSchema),
}))

/////////////////////////////////////////
// ROLE PERMISSION OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type RolePermissionOptionalDefaultsRelations = {
  permission: permissionOptionalDefaultsWithRelations;
  role: rolesOptionalDefaultsWithRelations;
};

export type RolePermissionOptionalDefaultsWithRelations = z.infer<typeof RolePermissionOptionalDefaultsSchema> & RolePermissionOptionalDefaultsRelations

export const RolePermissionOptionalDefaultsWithRelationsSchema: z.ZodType<RolePermissionOptionalDefaultsWithRelations> = RolePermissionOptionalDefaultsSchema.merge(z.object({
  permission: z.lazy(() => permissionOptionalDefaultsWithRelationsSchema),
  role: z.lazy(() => rolesOptionalDefaultsWithRelationsSchema),
}))

/////////////////////////////////////////
// ROLE PERMISSION PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type RolePermissionPartialRelations = {
  permission?: permissionPartialWithRelations;
  role?: rolesPartialWithRelations;
};

export type RolePermissionPartialWithRelations = z.infer<typeof RolePermissionPartialSchema> & RolePermissionPartialRelations

export const RolePermissionPartialWithRelationsSchema: z.ZodType<RolePermissionPartialWithRelations> = RolePermissionPartialSchema.merge(z.object({
  permission: z.lazy(() => permissionPartialWithRelationsSchema),
  role: z.lazy(() => rolesPartialWithRelationsSchema),
})).partial()

export type RolePermissionOptionalDefaultsWithPartialRelations = z.infer<typeof RolePermissionOptionalDefaultsSchema> & RolePermissionPartialRelations

export const RolePermissionOptionalDefaultsWithPartialRelationsSchema: z.ZodType<RolePermissionOptionalDefaultsWithPartialRelations> = RolePermissionOptionalDefaultsSchema.merge(z.object({
  permission: z.lazy(() => permissionPartialWithRelationsSchema),
  role: z.lazy(() => rolesPartialWithRelationsSchema),
}).partial())

export type RolePermissionWithPartialRelations = z.infer<typeof RolePermissionSchema> & RolePermissionPartialRelations

export const RolePermissionWithPartialRelationsSchema: z.ZodType<RolePermissionWithPartialRelations> = RolePermissionSchema.merge(z.object({
  permission: z.lazy(() => permissionPartialWithRelationsSchema),
  role: z.lazy(() => rolesPartialWithRelationsSchema),
}).partial())

export default RolePermissionSchema;
