import { z } from 'zod';
import { BoardStatusEnumSchema } from '../inputTypeSchemas/BoardStatusEnumSchema'
import { projectWithRelationsSchema, projectPartialWithRelationsSchema, projectOptionalDefaultsWithRelationsSchema } from './projectSchema'
import type { projectWithRelations, projectPartialWithRelations, projectOptionalDefaultsWithRelations } from './projectSchema'
import { ListWithRelationsSchema, ListPartialWithRelationsSchema, ListOptionalDefaultsWithRelationsSchema } from './ListSchema'
import type { ListWithRelations, ListPartialWithRelations, ListOptionalDefaultsWithRelations } from './ListSchema'
import { InvitationsWithRelationsSchema, InvitationsPartialWithRelationsSchema, InvitationsOptionalDefaultsWithRelationsSchema } from './InvitationsSchema'
import type { InvitationsWithRelations, InvitationsPartialWithRelations, InvitationsOptionalDefaultsWithRelations } from './InvitationsSchema'
import { BoardMemberWithRelationsSchema, BoardMemberPartialWithRelationsSchema, BoardMemberOptionalDefaultsWithRelationsSchema } from './BoardMemberSchema'
import type { BoardMemberWithRelations, BoardMemberPartialWithRelations, BoardMemberOptionalDefaultsWithRelations } from './BoardMemberSchema'

/////////////////////////////////////////
// BOARD SCHEMA
/////////////////////////////////////////

export const BoardSchema = z.object({
  status: BoardStatusEnumSchema,
  id: z.uuid(),
  projectId: z.string(),
  title: z.string(),
  description: z.string().nullish(),
  coverUrl: z.string().nullish(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullish(),
})

export type Board = z.infer<typeof BoardSchema>

/////////////////////////////////////////
// BOARD PARTIAL SCHEMA
/////////////////////////////////////////

export const BoardPartialSchema = BoardSchema.partial()

export type BoardPartial = z.infer<typeof BoardPartialSchema>

/////////////////////////////////////////
// BOARD OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const BoardOptionalDefaultsSchema = BoardSchema.merge(z.object({
  status: BoardStatusEnumSchema.optional(),
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type BoardOptionalDefaults = z.infer<typeof BoardOptionalDefaultsSchema>

/////////////////////////////////////////
// BOARD RELATION SCHEMA
/////////////////////////////////////////

export type BoardRelations = {
  project: projectWithRelations;
  List: ListWithRelations[];
  invitation: InvitationsWithRelations[];
  BoardMember: BoardMemberWithRelations[];
};

export type BoardWithRelations = z.infer<typeof BoardSchema> & BoardRelations

export const BoardWithRelationsSchema: z.ZodType<BoardWithRelations> = BoardSchema.merge(z.object({
  project: z.lazy(() => projectWithRelationsSchema),
  List: z.lazy(() => ListWithRelationsSchema).array(),
  invitation: z.lazy(() => InvitationsWithRelationsSchema).array(),
  BoardMember: z.lazy(() => BoardMemberWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// BOARD OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type BoardOptionalDefaultsRelations = {
  project: projectOptionalDefaultsWithRelations;
  List: ListOptionalDefaultsWithRelations[];
  invitation: InvitationsOptionalDefaultsWithRelations[];
  BoardMember: BoardMemberOptionalDefaultsWithRelations[];
};

export type BoardOptionalDefaultsWithRelations = z.infer<typeof BoardOptionalDefaultsSchema> & BoardOptionalDefaultsRelations

export const BoardOptionalDefaultsWithRelationsSchema: z.ZodType<BoardOptionalDefaultsWithRelations> = BoardOptionalDefaultsSchema.merge(z.object({
  project: z.lazy(() => projectOptionalDefaultsWithRelationsSchema),
  List: z.lazy(() => ListOptionalDefaultsWithRelationsSchema).array(),
  invitation: z.lazy(() => InvitationsOptionalDefaultsWithRelationsSchema).array(),
  BoardMember: z.lazy(() => BoardMemberOptionalDefaultsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// BOARD PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type BoardPartialRelations = {
  project?: projectPartialWithRelations;
  List?: ListPartialWithRelations[];
  invitation?: InvitationsPartialWithRelations[];
  BoardMember?: BoardMemberPartialWithRelations[];
};

export type BoardPartialWithRelations = z.infer<typeof BoardPartialSchema> & BoardPartialRelations

export const BoardPartialWithRelationsSchema: z.ZodType<BoardPartialWithRelations> = BoardPartialSchema.merge(z.object({
  project: z.lazy(() => projectPartialWithRelationsSchema),
  List: z.lazy(() => ListPartialWithRelationsSchema).array(),
  invitation: z.lazy(() => InvitationsPartialWithRelationsSchema).array(),
  BoardMember: z.lazy(() => BoardMemberPartialWithRelationsSchema).array(),
})).partial()

export type BoardOptionalDefaultsWithPartialRelations = z.infer<typeof BoardOptionalDefaultsSchema> & BoardPartialRelations

export const BoardOptionalDefaultsWithPartialRelationsSchema: z.ZodType<BoardOptionalDefaultsWithPartialRelations> = BoardOptionalDefaultsSchema.merge(z.object({
  project: z.lazy(() => projectPartialWithRelationsSchema),
  List: z.lazy(() => ListPartialWithRelationsSchema).array(),
  invitation: z.lazy(() => InvitationsPartialWithRelationsSchema).array(),
  BoardMember: z.lazy(() => BoardMemberPartialWithRelationsSchema).array(),
}).partial())

export type BoardWithPartialRelations = z.infer<typeof BoardSchema> & BoardPartialRelations

export const BoardWithPartialRelationsSchema: z.ZodType<BoardWithPartialRelations> = BoardSchema.merge(z.object({
  project: z.lazy(() => projectPartialWithRelationsSchema),
  List: z.lazy(() => ListPartialWithRelationsSchema).array(),
  invitation: z.lazy(() => InvitationsPartialWithRelationsSchema).array(),
  BoardMember: z.lazy(() => BoardMemberPartialWithRelationsSchema).array(),
}).partial())

export default BoardSchema;
