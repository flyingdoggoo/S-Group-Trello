import { z } from 'zod';
import { BoardWithRelationsSchema, BoardPartialWithRelationsSchema, BoardOptionalDefaultsWithRelationsSchema } from './BoardSchema'
import type { BoardWithRelations, BoardPartialWithRelations, BoardOptionalDefaultsWithRelations } from './BoardSchema'
import { usersWithRelationsSchema, usersPartialWithRelationsSchema, usersOptionalDefaultsWithRelationsSchema } from './usersSchema'
import type { usersWithRelations, usersPartialWithRelations, usersOptionalDefaultsWithRelations } from './usersSchema'
import { rolesWithRelationsSchema, rolesPartialWithRelationsSchema, rolesOptionalDefaultsWithRelationsSchema } from './rolesSchema'
import type { rolesWithRelations, rolesPartialWithRelations, rolesOptionalDefaultsWithRelations } from './rolesSchema'

/////////////////////////////////////////
// BOARD MEMBER SCHEMA
/////////////////////////////////////////

export const BoardMemberSchema = z.object({
  id: z.uuid(),
  boardId: z.string(),
  userId: z.string(),
  roleId: z.string(),
  joinedAt: z.coerce.date(),
})

export type BoardMember = z.infer<typeof BoardMemberSchema>

/////////////////////////////////////////
// BOARD MEMBER PARTIAL SCHEMA
/////////////////////////////////////////

export const BoardMemberPartialSchema = BoardMemberSchema.partial()

export type BoardMemberPartial = z.infer<typeof BoardMemberPartialSchema>

/////////////////////////////////////////
// BOARD MEMBER OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const BoardMemberOptionalDefaultsSchema = BoardMemberSchema.merge(z.object({
  id: z.uuid().optional(),
  joinedAt: z.coerce.date().optional(),
}))

export type BoardMemberOptionalDefaults = z.infer<typeof BoardMemberOptionalDefaultsSchema>

/////////////////////////////////////////
// BOARD MEMBER RELATION SCHEMA
/////////////////////////////////////////

export type BoardMemberRelations = {
  board: BoardWithRelations;
  user: usersWithRelations;
  role: rolesWithRelations;
};

export type BoardMemberWithRelations = z.infer<typeof BoardMemberSchema> & BoardMemberRelations

export const BoardMemberWithRelationsSchema: z.ZodType<BoardMemberWithRelations> = BoardMemberSchema.merge(z.object({
  board: z.lazy(() => BoardWithRelationsSchema),
  user: z.lazy(() => usersWithRelationsSchema),
  role: z.lazy(() => rolesWithRelationsSchema),
}))

/////////////////////////////////////////
// BOARD MEMBER OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type BoardMemberOptionalDefaultsRelations = {
  board: BoardOptionalDefaultsWithRelations;
  user: usersOptionalDefaultsWithRelations;
  role: rolesOptionalDefaultsWithRelations;
};

export type BoardMemberOptionalDefaultsWithRelations = z.infer<typeof BoardMemberOptionalDefaultsSchema> & BoardMemberOptionalDefaultsRelations

export const BoardMemberOptionalDefaultsWithRelationsSchema: z.ZodType<BoardMemberOptionalDefaultsWithRelations> = BoardMemberOptionalDefaultsSchema.merge(z.object({
  board: z.lazy(() => BoardOptionalDefaultsWithRelationsSchema),
  user: z.lazy(() => usersOptionalDefaultsWithRelationsSchema),
  role: z.lazy(() => rolesOptionalDefaultsWithRelationsSchema),
}))

/////////////////////////////////////////
// BOARD MEMBER PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type BoardMemberPartialRelations = {
  board?: BoardPartialWithRelations;
  user?: usersPartialWithRelations;
  role?: rolesPartialWithRelations;
};

export type BoardMemberPartialWithRelations = z.infer<typeof BoardMemberPartialSchema> & BoardMemberPartialRelations

export const BoardMemberPartialWithRelationsSchema: z.ZodType<BoardMemberPartialWithRelations> = BoardMemberPartialSchema.merge(z.object({
  board: z.lazy(() => BoardPartialWithRelationsSchema),
  user: z.lazy(() => usersPartialWithRelationsSchema),
  role: z.lazy(() => rolesPartialWithRelationsSchema),
})).partial()

export type BoardMemberOptionalDefaultsWithPartialRelations = z.infer<typeof BoardMemberOptionalDefaultsSchema> & BoardMemberPartialRelations

export const BoardMemberOptionalDefaultsWithPartialRelationsSchema: z.ZodType<BoardMemberOptionalDefaultsWithPartialRelations> = BoardMemberOptionalDefaultsSchema.merge(z.object({
  board: z.lazy(() => BoardPartialWithRelationsSchema),
  user: z.lazy(() => usersPartialWithRelationsSchema),
  role: z.lazy(() => rolesPartialWithRelationsSchema),
}).partial())

export type BoardMemberWithPartialRelations = z.infer<typeof BoardMemberSchema> & BoardMemberPartialRelations

export const BoardMemberWithPartialRelationsSchema: z.ZodType<BoardMemberWithPartialRelations> = BoardMemberSchema.merge(z.object({
  board: z.lazy(() => BoardPartialWithRelationsSchema),
  user: z.lazy(() => usersPartialWithRelationsSchema),
  role: z.lazy(() => rolesPartialWithRelationsSchema),
}).partial())

export default BoardMemberSchema;
