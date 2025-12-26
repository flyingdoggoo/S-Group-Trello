import { z } from 'zod';
import { ListStatusEnumSchema } from '../inputTypeSchemas/ListStatusEnumSchema'
import { BoardWithRelationsSchema, BoardPartialWithRelationsSchema, BoardOptionalDefaultsWithRelationsSchema } from './BoardSchema'
import type { BoardWithRelations, BoardPartialWithRelations, BoardOptionalDefaultsWithRelations } from './BoardSchema'
import { CardWithRelationsSchema, CardPartialWithRelationsSchema, CardOptionalDefaultsWithRelationsSchema } from './CardSchema'
import type { CardWithRelations, CardPartialWithRelations, CardOptionalDefaultsWithRelations } from './CardSchema'

/////////////////////////////////////////
// LIST SCHEMA
/////////////////////////////////////////

export const ListSchema = z.object({
  status: ListStatusEnumSchema,
  id: z.uuid(),
  boardId: z.string(),
  title: z.string(),
  position: z.number().int(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullish(),
})

export type List = z.infer<typeof ListSchema>

/////////////////////////////////////////
// LIST PARTIAL SCHEMA
/////////////////////////////////////////

export const ListPartialSchema = ListSchema.partial()

export type ListPartial = z.infer<typeof ListPartialSchema>

/////////////////////////////////////////
// LIST OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const ListOptionalDefaultsSchema = ListSchema.merge(z.object({
  status: ListStatusEnumSchema.optional(),
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type ListOptionalDefaults = z.infer<typeof ListOptionalDefaultsSchema>

/////////////////////////////////////////
// LIST RELATION SCHEMA
/////////////////////////////////////////

export type ListRelations = {
  board: BoardWithRelations;
  Card: CardWithRelations[];
};

export type ListWithRelations = z.infer<typeof ListSchema> & ListRelations

export const ListWithRelationsSchema: z.ZodType<ListWithRelations> = ListSchema.merge(z.object({
  board: z.lazy(() => BoardWithRelationsSchema),
  Card: z.lazy(() => CardWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// LIST OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type ListOptionalDefaultsRelations = {
  board: BoardOptionalDefaultsWithRelations;
  Card: CardOptionalDefaultsWithRelations[];
};

export type ListOptionalDefaultsWithRelations = z.infer<typeof ListOptionalDefaultsSchema> & ListOptionalDefaultsRelations

export const ListOptionalDefaultsWithRelationsSchema: z.ZodType<ListOptionalDefaultsWithRelations> = ListOptionalDefaultsSchema.merge(z.object({
  board: z.lazy(() => BoardOptionalDefaultsWithRelationsSchema),
  Card: z.lazy(() => CardOptionalDefaultsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// LIST PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type ListPartialRelations = {
  board?: BoardPartialWithRelations;
  Card?: CardPartialWithRelations[];
};

export type ListPartialWithRelations = z.infer<typeof ListPartialSchema> & ListPartialRelations

export const ListPartialWithRelationsSchema: z.ZodType<ListPartialWithRelations> = ListPartialSchema.merge(z.object({
  board: z.lazy(() => BoardPartialWithRelationsSchema),
  Card: z.lazy(() => CardPartialWithRelationsSchema).array(),
})).partial()

export type ListOptionalDefaultsWithPartialRelations = z.infer<typeof ListOptionalDefaultsSchema> & ListPartialRelations

export const ListOptionalDefaultsWithPartialRelationsSchema: z.ZodType<ListOptionalDefaultsWithPartialRelations> = ListOptionalDefaultsSchema.merge(z.object({
  board: z.lazy(() => BoardPartialWithRelationsSchema),
  Card: z.lazy(() => CardPartialWithRelationsSchema).array(),
}).partial())

export type ListWithPartialRelations = z.infer<typeof ListSchema> & ListPartialRelations

export const ListWithPartialRelationsSchema: z.ZodType<ListWithPartialRelations> = ListSchema.merge(z.object({
  board: z.lazy(() => BoardPartialWithRelationsSchema),
  Card: z.lazy(() => CardPartialWithRelationsSchema).array(),
}).partial())

export default ListSchema;
