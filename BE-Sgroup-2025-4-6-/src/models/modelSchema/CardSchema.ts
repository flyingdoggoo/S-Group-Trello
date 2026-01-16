import { z } from 'zod';
import { CardStatusEnumSchema } from '../inputTypeSchemas/CardStatusEnumSchema'
import { ListWithRelationsSchema, ListPartialWithRelationsSchema, ListOptionalDefaultsWithRelationsSchema } from './ListSchema'
import type { ListWithRelations, ListPartialWithRelations, ListOptionalDefaultsWithRelations } from './ListSchema'
import { CardTagWithRelationsSchema, CardTagPartialWithRelationsSchema, CardTagOptionalDefaultsWithRelationsSchema } from './CardTagSchema'
import type { CardTagWithRelations, CardTagPartialWithRelations, CardTagOptionalDefaultsWithRelations } from './CardTagSchema'
import { CardTodoWithRelationsSchema, CardTodoPartialWithRelationsSchema, CardTodoOptionalDefaultsWithRelationsSchema } from './CardTodoSchema'
import type { CardTodoWithRelations, CardTodoPartialWithRelations, CardTodoOptionalDefaultsWithRelations } from './CardTodoSchema'
import { CardMemberWithRelationsSchema, CardMemberPartialWithRelationsSchema, CardMemberOptionalDefaultsWithRelationsSchema } from './CardMemberSchema'
import type { CardMemberWithRelations, CardMemberPartialWithRelations, CardMemberOptionalDefaultsWithRelations } from './CardMemberSchema'
import { CardCommentWithRelationsSchema, CardCommentPartialWithRelationsSchema, CardCommentOptionalDefaultsWithRelationsSchema } from './CardCommentSchema'
import type { CardCommentWithRelations, CardCommentPartialWithRelations, CardCommentOptionalDefaultsWithRelations } from './CardCommentSchema'

/////////////////////////////////////////
// CARD SCHEMA
/////////////////////////////////////////

export const CardSchema = z.object({
  status: CardStatusEnumSchema,
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
  status: CardStatusEnumSchema.optional(),
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
  tags: CardTagWithRelations[];
  todos: CardTodoWithRelations[];
  members: CardMemberWithRelations[];
  comments: CardCommentWithRelations[];
};

export type CardWithRelations = z.infer<typeof CardSchema> & CardRelations

export const CardWithRelationsSchema: z.ZodType<CardWithRelations> = CardSchema.merge(z.object({
  list: z.lazy(() => ListWithRelationsSchema),
  tags: z.lazy(() => CardTagWithRelationsSchema).array(),
  todos: z.lazy(() => CardTodoWithRelationsSchema).array(),
  members: z.lazy(() => CardMemberWithRelationsSchema).array(),
  comments: z.lazy(() => CardCommentWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// CARD OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type CardOptionalDefaultsRelations = {
  list: ListOptionalDefaultsWithRelations;
  tags: CardTagOptionalDefaultsWithRelations[];
  todos: CardTodoOptionalDefaultsWithRelations[];
  members: CardMemberOptionalDefaultsWithRelations[];
  comments: CardCommentOptionalDefaultsWithRelations[];
};

export type CardOptionalDefaultsWithRelations = z.infer<typeof CardOptionalDefaultsSchema> & CardOptionalDefaultsRelations

export const CardOptionalDefaultsWithRelationsSchema: z.ZodType<CardOptionalDefaultsWithRelations> = CardOptionalDefaultsSchema.merge(z.object({
  list: z.lazy(() => ListOptionalDefaultsWithRelationsSchema),
  tags: z.lazy(() => CardTagOptionalDefaultsWithRelationsSchema).array(),
  todos: z.lazy(() => CardTodoOptionalDefaultsWithRelationsSchema).array(),
  members: z.lazy(() => CardMemberOptionalDefaultsWithRelationsSchema).array(),
  comments: z.lazy(() => CardCommentOptionalDefaultsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// CARD PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type CardPartialRelations = {
  list?: ListPartialWithRelations;
  tags?: CardTagPartialWithRelations[];
  todos?: CardTodoPartialWithRelations[];
  members?: CardMemberPartialWithRelations[];
  comments?: CardCommentPartialWithRelations[];
};

export type CardPartialWithRelations = z.infer<typeof CardPartialSchema> & CardPartialRelations

export const CardPartialWithRelationsSchema: z.ZodType<CardPartialWithRelations> = CardPartialSchema.merge(z.object({
  list: z.lazy(() => ListPartialWithRelationsSchema),
  tags: z.lazy(() => CardTagPartialWithRelationsSchema).array(),
  todos: z.lazy(() => CardTodoPartialWithRelationsSchema).array(),
  members: z.lazy(() => CardMemberPartialWithRelationsSchema).array(),
  comments: z.lazy(() => CardCommentPartialWithRelationsSchema).array(),
})).partial()

export type CardOptionalDefaultsWithPartialRelations = z.infer<typeof CardOptionalDefaultsSchema> & CardPartialRelations

export const CardOptionalDefaultsWithPartialRelationsSchema: z.ZodType<CardOptionalDefaultsWithPartialRelations> = CardOptionalDefaultsSchema.merge(z.object({
  list: z.lazy(() => ListPartialWithRelationsSchema),
  tags: z.lazy(() => CardTagPartialWithRelationsSchema).array(),
  todos: z.lazy(() => CardTodoPartialWithRelationsSchema).array(),
  members: z.lazy(() => CardMemberPartialWithRelationsSchema).array(),
  comments: z.lazy(() => CardCommentPartialWithRelationsSchema).array(),
}).partial())

export type CardWithPartialRelations = z.infer<typeof CardSchema> & CardPartialRelations

export const CardWithPartialRelationsSchema: z.ZodType<CardWithPartialRelations> = CardSchema.merge(z.object({
  list: z.lazy(() => ListPartialWithRelationsSchema),
  tags: z.lazy(() => CardTagPartialWithRelationsSchema).array(),
  todos: z.lazy(() => CardTodoPartialWithRelationsSchema).array(),
  members: z.lazy(() => CardMemberPartialWithRelationsSchema).array(),
  comments: z.lazy(() => CardCommentPartialWithRelationsSchema).array(),
}).partial())

export default CardSchema;
