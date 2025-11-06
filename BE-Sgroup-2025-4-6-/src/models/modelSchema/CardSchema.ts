import { z } from 'zod';
import { ListWithRelationsSchema, ListPartialWithRelationsSchema, ListOptionalDefaultsWithRelationsSchema } from './ListSchema'
import type { ListWithRelations, ListPartialWithRelations, ListOptionalDefaultsWithRelations } from './ListSchema'

/////////////////////////////////////////
// CARD SCHEMA
/////////////////////////////////////////

export const CardSchema = z.object({
  id: z.uuid(),
  listId: z.string(),
  title: z.string(),
  description: z.string().nullish(),
  position: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullish(),
})

export type Card = z.infer<typeof CardSchema>

/////////////////////////////////////////
// CARD PARTIAL SCHEMA
/////////////////////////////////////////

export const CardPartialSchema = CardSchema.partial()

export type CardPartial = z.infer<typeof CardPartialSchema>

/////////////////////////////////////////
// CARD OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CardOptionalDefaultsSchema = CardSchema.merge(z.object({
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type CardOptionalDefaults = z.infer<typeof CardOptionalDefaultsSchema>

/////////////////////////////////////////
// CARD RELATION SCHEMA
/////////////////////////////////////////

export type CardRelations = {
  list: ListWithRelations;
};

export type CardWithRelations = z.infer<typeof CardSchema> & CardRelations

export const CardWithRelationsSchema: z.ZodType<CardWithRelations> = CardSchema.merge(z.object({
  list: z.lazy(() => ListWithRelationsSchema),
}))

/////////////////////////////////////////
// CARD OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type CardOptionalDefaultsRelations = {
  list: ListOptionalDefaultsWithRelations;
};

export type CardOptionalDefaultsWithRelations = z.infer<typeof CardOptionalDefaultsSchema> & CardOptionalDefaultsRelations

export const CardOptionalDefaultsWithRelationsSchema: z.ZodType<CardOptionalDefaultsWithRelations> = CardOptionalDefaultsSchema.merge(z.object({
  list: z.lazy(() => ListOptionalDefaultsWithRelationsSchema),
}))

/////////////////////////////////////////
// CARD PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type CardPartialRelations = {
  list?: ListPartialWithRelations;
};

export type CardPartialWithRelations = z.infer<typeof CardPartialSchema> & CardPartialRelations

export const CardPartialWithRelationsSchema: z.ZodType<CardPartialWithRelations> = CardPartialSchema.merge(z.object({
  list: z.lazy(() => ListPartialWithRelationsSchema),
})).partial()

export type CardOptionalDefaultsWithPartialRelations = z.infer<typeof CardOptionalDefaultsSchema> & CardPartialRelations

export const CardOptionalDefaultsWithPartialRelationsSchema: z.ZodType<CardOptionalDefaultsWithPartialRelations> = CardOptionalDefaultsSchema.merge(z.object({
  list: z.lazy(() => ListPartialWithRelationsSchema),
}).partial())

export type CardWithPartialRelations = z.infer<typeof CardSchema> & CardPartialRelations

export const CardWithPartialRelationsSchema: z.ZodType<CardWithPartialRelations> = CardSchema.merge(z.object({
  list: z.lazy(() => ListPartialWithRelationsSchema),
}).partial())

export default CardSchema;
