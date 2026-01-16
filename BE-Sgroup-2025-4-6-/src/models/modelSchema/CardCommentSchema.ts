import { z } from 'zod';
import { CardWithRelationsSchema, CardPartialWithRelationsSchema, CardOptionalDefaultsWithRelationsSchema } from './CardSchema'
import type { CardWithRelations, CardPartialWithRelations, CardOptionalDefaultsWithRelations } from './CardSchema'
import { usersWithRelationsSchema, usersPartialWithRelationsSchema, usersOptionalDefaultsWithRelationsSchema } from './usersSchema'
import type { usersWithRelations, usersPartialWithRelations, usersOptionalDefaultsWithRelations } from './usersSchema'

/////////////////////////////////////////
// CARD COMMENT SCHEMA
/////////////////////////////////////////

export const CardCommentSchema = z.object({
  id: z.uuid(),
  cardId: z.string(),
  userId: z.string(),
  content: z.string(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type CardComment = z.infer<typeof CardCommentSchema>

/////////////////////////////////////////
// CARD COMMENT PARTIAL SCHEMA
/////////////////////////////////////////

export const CardCommentPartialSchema = CardCommentSchema.partial()

export type CardCommentPartial = z.infer<typeof CardCommentPartialSchema>

/////////////////////////////////////////
// CARD COMMENT OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CardCommentOptionalDefaultsSchema = CardCommentSchema.merge(z.object({
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type CardCommentOptionalDefaults = z.infer<typeof CardCommentOptionalDefaultsSchema>

/////////////////////////////////////////
// CARD COMMENT RELATION SCHEMA
/////////////////////////////////////////

export type CardCommentRelations = {
  card: CardWithRelations;
  user: usersWithRelations;
};

export type CardCommentWithRelations = z.infer<typeof CardCommentSchema> & CardCommentRelations

export const CardCommentWithRelationsSchema: z.ZodType<CardCommentWithRelations> = CardCommentSchema.merge(z.object({
  card: z.lazy(() => CardWithRelationsSchema),
  user: z.lazy(() => usersWithRelationsSchema),
}))

/////////////////////////////////////////
// CARD COMMENT OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type CardCommentOptionalDefaultsRelations = {
  card: CardOptionalDefaultsWithRelations;
  user: usersOptionalDefaultsWithRelations;
};

export type CardCommentOptionalDefaultsWithRelations = z.infer<typeof CardCommentOptionalDefaultsSchema> & CardCommentOptionalDefaultsRelations

export const CardCommentOptionalDefaultsWithRelationsSchema: z.ZodType<CardCommentOptionalDefaultsWithRelations> = CardCommentOptionalDefaultsSchema.merge(z.object({
  card: z.lazy(() => CardOptionalDefaultsWithRelationsSchema),
  user: z.lazy(() => usersOptionalDefaultsWithRelationsSchema),
}))

/////////////////////////////////////////
// CARD COMMENT PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type CardCommentPartialRelations = {
  card?: CardPartialWithRelations;
  user?: usersPartialWithRelations;
};

export type CardCommentPartialWithRelations = z.infer<typeof CardCommentPartialSchema> & CardCommentPartialRelations

export const CardCommentPartialWithRelationsSchema: z.ZodType<CardCommentPartialWithRelations> = CardCommentPartialSchema.merge(z.object({
  card: z.lazy(() => CardPartialWithRelationsSchema),
  user: z.lazy(() => usersPartialWithRelationsSchema),
})).partial()

export type CardCommentOptionalDefaultsWithPartialRelations = z.infer<typeof CardCommentOptionalDefaultsSchema> & CardCommentPartialRelations

export const CardCommentOptionalDefaultsWithPartialRelationsSchema: z.ZodType<CardCommentOptionalDefaultsWithPartialRelations> = CardCommentOptionalDefaultsSchema.merge(z.object({
  card: z.lazy(() => CardPartialWithRelationsSchema),
  user: z.lazy(() => usersPartialWithRelationsSchema),
}).partial())

export type CardCommentWithPartialRelations = z.infer<typeof CardCommentSchema> & CardCommentPartialRelations

export const CardCommentWithPartialRelationsSchema: z.ZodType<CardCommentWithPartialRelations> = CardCommentSchema.merge(z.object({
  card: z.lazy(() => CardPartialWithRelationsSchema),
  user: z.lazy(() => usersPartialWithRelationsSchema),
}).partial())

export default CardCommentSchema;
