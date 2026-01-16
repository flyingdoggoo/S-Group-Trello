import { z } from 'zod';
import { CardWithRelationsSchema, CardPartialWithRelationsSchema, CardOptionalDefaultsWithRelationsSchema } from './CardSchema'
import type { CardWithRelations, CardPartialWithRelations, CardOptionalDefaultsWithRelations } from './CardSchema'
import { usersWithRelationsSchema, usersPartialWithRelationsSchema, usersOptionalDefaultsWithRelationsSchema } from './usersSchema'
import type { usersWithRelations, usersPartialWithRelations, usersOptionalDefaultsWithRelations } from './usersSchema'

/////////////////////////////////////////
// CARD MEMBER SCHEMA
/////////////////////////////////////////

export const CardMemberSchema = z.object({
  id: z.uuid(),
  cardId: z.string(),
  userId: z.string(),
  joinedAt: z.coerce.date(),
})

export type CardMember = z.infer<typeof CardMemberSchema>

/////////////////////////////////////////
// CARD MEMBER PARTIAL SCHEMA
/////////////////////////////////////////

export const CardMemberPartialSchema = CardMemberSchema.partial()

export type CardMemberPartial = z.infer<typeof CardMemberPartialSchema>

/////////////////////////////////////////
// CARD MEMBER OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CardMemberOptionalDefaultsSchema = CardMemberSchema.merge(z.object({
  id: z.uuid().optional(),
  joinedAt: z.coerce.date().optional(),
}))

export type CardMemberOptionalDefaults = z.infer<typeof CardMemberOptionalDefaultsSchema>

/////////////////////////////////////////
// CARD MEMBER RELATION SCHEMA
/////////////////////////////////////////

export type CardMemberRelations = {
  card: CardWithRelations;
  user: usersWithRelations;
};

export type CardMemberWithRelations = z.infer<typeof CardMemberSchema> & CardMemberRelations

export const CardMemberWithRelationsSchema: z.ZodType<CardMemberWithRelations> = CardMemberSchema.merge(z.object({
  card: z.lazy(() => CardWithRelationsSchema),
  user: z.lazy(() => usersWithRelationsSchema),
}))

/////////////////////////////////////////
// CARD MEMBER OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type CardMemberOptionalDefaultsRelations = {
  card: CardOptionalDefaultsWithRelations;
  user: usersOptionalDefaultsWithRelations;
};

export type CardMemberOptionalDefaultsWithRelations = z.infer<typeof CardMemberOptionalDefaultsSchema> & CardMemberOptionalDefaultsRelations

export const CardMemberOptionalDefaultsWithRelationsSchema: z.ZodType<CardMemberOptionalDefaultsWithRelations> = CardMemberOptionalDefaultsSchema.merge(z.object({
  card: z.lazy(() => CardOptionalDefaultsWithRelationsSchema),
  user: z.lazy(() => usersOptionalDefaultsWithRelationsSchema),
}))

/////////////////////////////////////////
// CARD MEMBER PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type CardMemberPartialRelations = {
  card?: CardPartialWithRelations;
  user?: usersPartialWithRelations;
};

export type CardMemberPartialWithRelations = z.infer<typeof CardMemberPartialSchema> & CardMemberPartialRelations

export const CardMemberPartialWithRelationsSchema: z.ZodType<CardMemberPartialWithRelations> = CardMemberPartialSchema.merge(z.object({
  card: z.lazy(() => CardPartialWithRelationsSchema),
  user: z.lazy(() => usersPartialWithRelationsSchema),
})).partial()

export type CardMemberOptionalDefaultsWithPartialRelations = z.infer<typeof CardMemberOptionalDefaultsSchema> & CardMemberPartialRelations

export const CardMemberOptionalDefaultsWithPartialRelationsSchema: z.ZodType<CardMemberOptionalDefaultsWithPartialRelations> = CardMemberOptionalDefaultsSchema.merge(z.object({
  card: z.lazy(() => CardPartialWithRelationsSchema),
  user: z.lazy(() => usersPartialWithRelationsSchema),
}).partial())

export type CardMemberWithPartialRelations = z.infer<typeof CardMemberSchema> & CardMemberPartialRelations

export const CardMemberWithPartialRelationsSchema: z.ZodType<CardMemberWithPartialRelations> = CardMemberSchema.merge(z.object({
  card: z.lazy(() => CardPartialWithRelationsSchema),
  user: z.lazy(() => usersPartialWithRelationsSchema),
}).partial())

export default CardMemberSchema;
