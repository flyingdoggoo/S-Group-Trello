import { z } from 'zod';
import { usersWithRelationsSchema, usersPartialWithRelationsSchema, usersOptionalDefaultsWithRelationsSchema } from './usersSchema'
import type { usersWithRelations, usersPartialWithRelations, usersOptionalDefaultsWithRelations } from './usersSchema'

/////////////////////////////////////////
// OTPS SCHEMA
/////////////////////////////////////////

export const otpsSchema = z.object({
  id: z.uuid(),
  userId: z.string(),
  otp: z.string(),
  expiresAt: z.coerce.date(),
})

export type otps = z.infer<typeof otpsSchema>

/////////////////////////////////////////
// OTPS PARTIAL SCHEMA
/////////////////////////////////////////

export const otpsPartialSchema = otpsSchema.partial()

export type otpsPartial = z.infer<typeof otpsPartialSchema>

/////////////////////////////////////////
// OTPS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const otpsOptionalDefaultsSchema = otpsSchema.merge(z.object({
  id: z.uuid().optional(),
}))

export type otpsOptionalDefaults = z.infer<typeof otpsOptionalDefaultsSchema>

/////////////////////////////////////////
// OTPS RELATION SCHEMA
/////////////////////////////////////////

export type otpsRelations = {
  user: usersWithRelations;
};

export type otpsWithRelations = z.infer<typeof otpsSchema> & otpsRelations

export const otpsWithRelationsSchema: z.ZodType<otpsWithRelations> = otpsSchema.merge(z.object({
  user: z.lazy(() => usersWithRelationsSchema),
}))

/////////////////////////////////////////
// OTPS OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type otpsOptionalDefaultsRelations = {
  user: usersOptionalDefaultsWithRelations;
};

export type otpsOptionalDefaultsWithRelations = z.infer<typeof otpsOptionalDefaultsSchema> & otpsOptionalDefaultsRelations

export const otpsOptionalDefaultsWithRelationsSchema: z.ZodType<otpsOptionalDefaultsWithRelations> = otpsOptionalDefaultsSchema.merge(z.object({
  user: z.lazy(() => usersOptionalDefaultsWithRelationsSchema),
}))

/////////////////////////////////////////
// OTPS PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type otpsPartialRelations = {
  user?: usersPartialWithRelations;
};

export type otpsPartialWithRelations = z.infer<typeof otpsPartialSchema> & otpsPartialRelations

export const otpsPartialWithRelationsSchema: z.ZodType<otpsPartialWithRelations> = otpsPartialSchema.merge(z.object({
  user: z.lazy(() => usersPartialWithRelationsSchema),
})).partial()

export type otpsOptionalDefaultsWithPartialRelations = z.infer<typeof otpsOptionalDefaultsSchema> & otpsPartialRelations

export const otpsOptionalDefaultsWithPartialRelationsSchema: z.ZodType<otpsOptionalDefaultsWithPartialRelations> = otpsOptionalDefaultsSchema.merge(z.object({
  user: z.lazy(() => usersPartialWithRelationsSchema),
}).partial())

export type otpsWithPartialRelations = z.infer<typeof otpsSchema> & otpsPartialRelations

export const otpsWithPartialRelationsSchema: z.ZodType<otpsWithPartialRelations> = otpsSchema.merge(z.object({
  user: z.lazy(() => usersPartialWithRelationsSchema),
}).partial())

export default otpsSchema;
