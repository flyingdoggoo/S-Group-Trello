import { z } from 'zod';
import { usersWithRelationsSchema, usersPartialWithRelationsSchema, usersOptionalDefaultsWithRelationsSchema } from './usersSchema'
import type { usersWithRelations, usersPartialWithRelations, usersOptionalDefaultsWithRelations } from './usersSchema'

/////////////////////////////////////////
// SOCIAL ACCOUNTS SCHEMA
/////////////////////////////////////////

export const socialAccountsSchema = z.object({
  id: z.uuid(),
  userId: z.string(),
  googleId: z.string(),
  googleAccessToken: z.string(),
  googleRefreshToken: z.string(),
})

export type socialAccounts = z.infer<typeof socialAccountsSchema>

/////////////////////////////////////////
// SOCIAL ACCOUNTS PARTIAL SCHEMA
/////////////////////////////////////////

export const socialAccountsPartialSchema = socialAccountsSchema.partial()

export type socialAccountsPartial = z.infer<typeof socialAccountsPartialSchema>

/////////////////////////////////////////
// SOCIAL ACCOUNTS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const socialAccountsOptionalDefaultsSchema = socialAccountsSchema.merge(z.object({
  id: z.uuid().optional(),
}))

export type socialAccountsOptionalDefaults = z.infer<typeof socialAccountsOptionalDefaultsSchema>

/////////////////////////////////////////
// SOCIAL ACCOUNTS RELATION SCHEMA
/////////////////////////////////////////

export type socialAccountsRelations = {
  user: usersWithRelations;
};

export type socialAccountsWithRelations = z.infer<typeof socialAccountsSchema> & socialAccountsRelations

export const socialAccountsWithRelationsSchema: z.ZodType<socialAccountsWithRelations> = socialAccountsSchema.merge(z.object({
  user: z.lazy(() => usersWithRelationsSchema),
}))

/////////////////////////////////////////
// SOCIAL ACCOUNTS OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type socialAccountsOptionalDefaultsRelations = {
  user: usersOptionalDefaultsWithRelations;
};

export type socialAccountsOptionalDefaultsWithRelations = z.infer<typeof socialAccountsOptionalDefaultsSchema> & socialAccountsOptionalDefaultsRelations

export const socialAccountsOptionalDefaultsWithRelationsSchema: z.ZodType<socialAccountsOptionalDefaultsWithRelations> = socialAccountsOptionalDefaultsSchema.merge(z.object({
  user: z.lazy(() => usersOptionalDefaultsWithRelationsSchema),
}))

/////////////////////////////////////////
// SOCIAL ACCOUNTS PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type socialAccountsPartialRelations = {
  user?: usersPartialWithRelations;
};

export type socialAccountsPartialWithRelations = z.infer<typeof socialAccountsPartialSchema> & socialAccountsPartialRelations

export const socialAccountsPartialWithRelationsSchema: z.ZodType<socialAccountsPartialWithRelations> = socialAccountsPartialSchema.merge(z.object({
  user: z.lazy(() => usersPartialWithRelationsSchema),
})).partial()

export type socialAccountsOptionalDefaultsWithPartialRelations = z.infer<typeof socialAccountsOptionalDefaultsSchema> & socialAccountsPartialRelations

export const socialAccountsOptionalDefaultsWithPartialRelationsSchema: z.ZodType<socialAccountsOptionalDefaultsWithPartialRelations> = socialAccountsOptionalDefaultsSchema.merge(z.object({
  user: z.lazy(() => usersPartialWithRelationsSchema),
}).partial())

export type socialAccountsWithPartialRelations = z.infer<typeof socialAccountsSchema> & socialAccountsPartialRelations

export const socialAccountsWithPartialRelationsSchema: z.ZodType<socialAccountsWithPartialRelations> = socialAccountsSchema.merge(z.object({
  user: z.lazy(() => usersPartialWithRelationsSchema),
}).partial())

export default socialAccountsSchema;
