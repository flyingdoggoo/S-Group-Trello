import { z } from 'zod';
import { CardWithRelationsSchema, CardPartialWithRelationsSchema, CardOptionalDefaultsWithRelationsSchema } from './CardSchema'
import type { CardWithRelations, CardPartialWithRelations, CardOptionalDefaultsWithRelations } from './CardSchema'

/////////////////////////////////////////
// CARD TAG SCHEMA
/////////////////////////////////////////

export const CardTagSchema = z.object({
  id: z.uuid(),
  cardId: z.string(),
  name: z.string(),
  color: z.string(),
  createdAt: z.coerce.date(),
})

export type CardTag = z.infer<typeof CardTagSchema>

/////////////////////////////////////////
// CARD TAG PARTIAL SCHEMA
/////////////////////////////////////////

export const CardTagPartialSchema = CardTagSchema.partial()

export type CardTagPartial = z.infer<typeof CardTagPartialSchema>

/////////////////////////////////////////
// CARD TAG OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CardTagOptionalDefaultsSchema = CardTagSchema.merge(z.object({
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
}))

export type CardTagOptionalDefaults = z.infer<typeof CardTagOptionalDefaultsSchema>

/////////////////////////////////////////
// CARD TAG RELATION SCHEMA
/////////////////////////////////////////

export type CardTagRelations = {
  card: CardWithRelations;
};

export type CardTagWithRelations = z.infer<typeof CardTagSchema> & CardTagRelations

export const CardTagWithRelationsSchema: z.ZodType<CardTagWithRelations> = CardTagSchema.merge(z.object({
  card: z.lazy(() => CardWithRelationsSchema),
}))

/////////////////////////////////////////
// CARD TAG OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type CardTagOptionalDefaultsRelations = {
  card: CardOptionalDefaultsWithRelations;
};

export type CardTagOptionalDefaultsWithRelations = z.infer<typeof CardTagOptionalDefaultsSchema> & CardTagOptionalDefaultsRelations

export const CardTagOptionalDefaultsWithRelationsSchema: z.ZodType<CardTagOptionalDefaultsWithRelations> = CardTagOptionalDefaultsSchema.merge(z.object({
  card: z.lazy(() => CardOptionalDefaultsWithRelationsSchema),
}))

/////////////////////////////////////////
// CARD TAG PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type CardTagPartialRelations = {
  card?: CardPartialWithRelations;
};

export type CardTagPartialWithRelations = z.infer<typeof CardTagPartialSchema> & CardTagPartialRelations

export const CardTagPartialWithRelationsSchema: z.ZodType<CardTagPartialWithRelations> = CardTagPartialSchema.merge(z.object({
  card: z.lazy(() => CardPartialWithRelationsSchema),
})).partial()

export type CardTagOptionalDefaultsWithPartialRelations = z.infer<typeof CardTagOptionalDefaultsSchema> & CardTagPartialRelations

export const CardTagOptionalDefaultsWithPartialRelationsSchema: z.ZodType<CardTagOptionalDefaultsWithPartialRelations> = CardTagOptionalDefaultsSchema.merge(z.object({
  card: z.lazy(() => CardPartialWithRelationsSchema),
}).partial())

export type CardTagWithPartialRelations = z.infer<typeof CardTagSchema> & CardTagPartialRelations

export const CardTagWithPartialRelationsSchema: z.ZodType<CardTagWithPartialRelations> = CardTagSchema.merge(z.object({
  card: z.lazy(() => CardPartialWithRelationsSchema),
}).partial())

export default CardTagSchema;
