import { z } from 'zod';
import { CardWithRelationsSchema, CardPartialWithRelationsSchema, CardOptionalDefaultsWithRelationsSchema } from './CardSchema'
import type { CardWithRelations, CardPartialWithRelations, CardOptionalDefaultsWithRelations } from './CardSchema'

/////////////////////////////////////////
// CARD TODO SCHEMA
/////////////////////////////////////////

export const CardTodoSchema = z.object({
  id: z.uuid(),
  cardId: z.string(),
  title: z.string(),
  completed: z.boolean(),
  position: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
})

export type CardTodo = z.infer<typeof CardTodoSchema>

/////////////////////////////////////////
// CARD TODO PARTIAL SCHEMA
/////////////////////////////////////////

export const CardTodoPartialSchema = CardTodoSchema.partial()

export type CardTodoPartial = z.infer<typeof CardTodoPartialSchema>

/////////////////////////////////////////
// CARD TODO OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const CardTodoOptionalDefaultsSchema = CardTodoSchema.merge(z.object({
  id: z.uuid().optional(),
  completed: z.boolean().optional(),
  position: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type CardTodoOptionalDefaults = z.infer<typeof CardTodoOptionalDefaultsSchema>

/////////////////////////////////////////
// CARD TODO RELATION SCHEMA
/////////////////////////////////////////

export type CardTodoRelations = {
  card: CardWithRelations;
};

export type CardTodoWithRelations = z.infer<typeof CardTodoSchema> & CardTodoRelations

export const CardTodoWithRelationsSchema: z.ZodType<CardTodoWithRelations> = CardTodoSchema.merge(z.object({
  card: z.lazy(() => CardWithRelationsSchema),
}))

/////////////////////////////////////////
// CARD TODO OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type CardTodoOptionalDefaultsRelations = {
  card: CardOptionalDefaultsWithRelations;
};

export type CardTodoOptionalDefaultsWithRelations = z.infer<typeof CardTodoOptionalDefaultsSchema> & CardTodoOptionalDefaultsRelations

export const CardTodoOptionalDefaultsWithRelationsSchema: z.ZodType<CardTodoOptionalDefaultsWithRelations> = CardTodoOptionalDefaultsSchema.merge(z.object({
  card: z.lazy(() => CardOptionalDefaultsWithRelationsSchema),
}))

/////////////////////////////////////////
// CARD TODO PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type CardTodoPartialRelations = {
  card?: CardPartialWithRelations;
};

export type CardTodoPartialWithRelations = z.infer<typeof CardTodoPartialSchema> & CardTodoPartialRelations

export const CardTodoPartialWithRelationsSchema: z.ZodType<CardTodoPartialWithRelations> = CardTodoPartialSchema.merge(z.object({
  card: z.lazy(() => CardPartialWithRelationsSchema),
})).partial()

export type CardTodoOptionalDefaultsWithPartialRelations = z.infer<typeof CardTodoOptionalDefaultsSchema> & CardTodoPartialRelations

export const CardTodoOptionalDefaultsWithPartialRelationsSchema: z.ZodType<CardTodoOptionalDefaultsWithPartialRelations> = CardTodoOptionalDefaultsSchema.merge(z.object({
  card: z.lazy(() => CardPartialWithRelationsSchema),
}).partial())

export type CardTodoWithPartialRelations = z.infer<typeof CardTodoSchema> & CardTodoPartialRelations

export const CardTodoWithPartialRelationsSchema: z.ZodType<CardTodoWithPartialRelations> = CardTodoSchema.merge(z.object({
  card: z.lazy(() => CardPartialWithRelationsSchema),
}).partial())

export default CardTodoSchema;
