import { z } from 'zod';
import { RolePermissionWithRelationsSchema, RolePermissionPartialWithRelationsSchema, RolePermissionOptionalDefaultsWithRelationsSchema } from './RolePermissionSchema'
import type { RolePermissionWithRelations, RolePermissionPartialWithRelations, RolePermissionOptionalDefaultsWithRelations } from './RolePermissionSchema'

/////////////////////////////////////////
// PERMISSION SCHEMA
/////////////////////////////////////////

export const permissionSchema = z.object({
  id: z.uuid(),
  permission: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullish(),
})

export type permission = z.infer<typeof permissionSchema>

/////////////////////////////////////////
// PERMISSION PARTIAL SCHEMA
/////////////////////////////////////////

export const permissionPartialSchema = permissionSchema.partial()

export type permissionPartial = z.infer<typeof permissionPartialSchema>

/////////////////////////////////////////
// PERMISSION OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const permissionOptionalDefaultsSchema = permissionSchema.merge(z.object({
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type permissionOptionalDefaults = z.infer<typeof permissionOptionalDefaultsSchema>

/////////////////////////////////////////
// PERMISSION RELATION SCHEMA
/////////////////////////////////////////

export type permissionRelations = {
  RolePermission: RolePermissionWithRelations[];
};

export type permissionWithRelations = z.infer<typeof permissionSchema> & permissionRelations

export const permissionWithRelationsSchema: z.ZodType<permissionWithRelations> = permissionSchema.merge(z.object({
  RolePermission: z.lazy(() => RolePermissionWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// PERMISSION OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type permissionOptionalDefaultsRelations = {
  RolePermission: RolePermissionOptionalDefaultsWithRelations[];
};

export type permissionOptionalDefaultsWithRelations = z.infer<typeof permissionOptionalDefaultsSchema> & permissionOptionalDefaultsRelations

export const permissionOptionalDefaultsWithRelationsSchema: z.ZodType<permissionOptionalDefaultsWithRelations> = permissionOptionalDefaultsSchema.merge(z.object({
  RolePermission: z.lazy(() => RolePermissionOptionalDefaultsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// PERMISSION PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type permissionPartialRelations = {
  RolePermission?: RolePermissionPartialWithRelations[];
};

export type permissionPartialWithRelations = z.infer<typeof permissionPartialSchema> & permissionPartialRelations

export const permissionPartialWithRelationsSchema: z.ZodType<permissionPartialWithRelations> = permissionPartialSchema.merge(z.object({
  RolePermission: z.lazy(() => RolePermissionPartialWithRelationsSchema).array(),
})).partial()

export type permissionOptionalDefaultsWithPartialRelations = z.infer<typeof permissionOptionalDefaultsSchema> & permissionPartialRelations

export const permissionOptionalDefaultsWithPartialRelationsSchema: z.ZodType<permissionOptionalDefaultsWithPartialRelations> = permissionOptionalDefaultsSchema.merge(z.object({
  RolePermission: z.lazy(() => RolePermissionPartialWithRelationsSchema).array(),
}).partial())

export type permissionWithPartialRelations = z.infer<typeof permissionSchema> & permissionPartialRelations

export const permissionWithPartialRelationsSchema: z.ZodType<permissionWithPartialRelations> = permissionSchema.merge(z.object({
  RolePermission: z.lazy(() => RolePermissionPartialWithRelationsSchema).array(),
}).partial())

export default permissionSchema;
