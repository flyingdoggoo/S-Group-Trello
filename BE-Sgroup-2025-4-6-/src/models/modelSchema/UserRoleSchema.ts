import { z } from 'zod';
import { usersWithRelationsSchema, usersPartialWithRelationsSchema, usersOptionalDefaultsWithRelationsSchema } from './usersSchema'
import type { usersWithRelations, usersPartialWithRelations, usersOptionalDefaultsWithRelations } from './usersSchema'
import { rolesWithRelationsSchema, rolesPartialWithRelationsSchema, rolesOptionalDefaultsWithRelationsSchema } from './rolesSchema'
import type { rolesWithRelations, rolesPartialWithRelations, rolesOptionalDefaultsWithRelations } from './rolesSchema'

/////////////////////////////////////////
// USER ROLE SCHEMA
/////////////////////////////////////////

export const UserRoleSchema = z.object({
  id: z.uuid(),
  userId: z.string(),
  roleId: z.string(),
  assignedAt: z.coerce.date(),
})

export type UserRole = z.infer<typeof UserRoleSchema>

/////////////////////////////////////////
// USER ROLE PARTIAL SCHEMA
/////////////////////////////////////////

export const UserRolePartialSchema = UserRoleSchema.partial()

export type UserRolePartial = z.infer<typeof UserRolePartialSchema>

/////////////////////////////////////////
// USER ROLE OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const UserRoleOptionalDefaultsSchema = UserRoleSchema.merge(z.object({
  id: z.uuid().optional(),
  assignedAt: z.coerce.date().optional(),
}))

export type UserRoleOptionalDefaults = z.infer<typeof UserRoleOptionalDefaultsSchema>

/////////////////////////////////////////
// USER ROLE RELATION SCHEMA
/////////////////////////////////////////

export type UserRoleRelations = {
  user: usersWithRelations;
  role: rolesWithRelations;
};

export type UserRoleWithRelations = z.infer<typeof UserRoleSchema> & UserRoleRelations

export const UserRoleWithRelationsSchema: z.ZodType<UserRoleWithRelations> = UserRoleSchema.merge(z.object({
  user: z.lazy(() => usersWithRelationsSchema),
  role: z.lazy(() => rolesWithRelationsSchema),
}))

/////////////////////////////////////////
// USER ROLE OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type UserRoleOptionalDefaultsRelations = {
  user: usersOptionalDefaultsWithRelations;
  role: rolesOptionalDefaultsWithRelations;
};

export type UserRoleOptionalDefaultsWithRelations = z.infer<typeof UserRoleOptionalDefaultsSchema> & UserRoleOptionalDefaultsRelations

export const UserRoleOptionalDefaultsWithRelationsSchema: z.ZodType<UserRoleOptionalDefaultsWithRelations> = UserRoleOptionalDefaultsSchema.merge(z.object({
  user: z.lazy(() => usersOptionalDefaultsWithRelationsSchema),
  role: z.lazy(() => rolesOptionalDefaultsWithRelationsSchema),
}))

/////////////////////////////////////////
// USER ROLE PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type UserRolePartialRelations = {
  user?: usersPartialWithRelations;
  role?: rolesPartialWithRelations;
};

export type UserRolePartialWithRelations = z.infer<typeof UserRolePartialSchema> & UserRolePartialRelations

export const UserRolePartialWithRelationsSchema: z.ZodType<UserRolePartialWithRelations> = UserRolePartialSchema.merge(z.object({
  user: z.lazy(() => usersPartialWithRelationsSchema),
  role: z.lazy(() => rolesPartialWithRelationsSchema),
})).partial()

export type UserRoleOptionalDefaultsWithPartialRelations = z.infer<typeof UserRoleOptionalDefaultsSchema> & UserRolePartialRelations

export const UserRoleOptionalDefaultsWithPartialRelationsSchema: z.ZodType<UserRoleOptionalDefaultsWithPartialRelations> = UserRoleOptionalDefaultsSchema.merge(z.object({
  user: z.lazy(() => usersPartialWithRelationsSchema),
  role: z.lazy(() => rolesPartialWithRelationsSchema),
}).partial())

export type UserRoleWithPartialRelations = z.infer<typeof UserRoleSchema> & UserRolePartialRelations

export const UserRoleWithPartialRelationsSchema: z.ZodType<UserRoleWithPartialRelations> = UserRoleSchema.merge(z.object({
  user: z.lazy(() => usersPartialWithRelationsSchema),
  role: z.lazy(() => rolesPartialWithRelationsSchema),
}).partial())

export default UserRoleSchema;
