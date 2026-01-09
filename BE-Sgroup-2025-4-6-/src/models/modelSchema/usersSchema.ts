import { z } from 'zod';
import { UserStatusEnumSchema } from '../inputTypeSchemas/UserStatusEnumSchema'
import { accountsWithRelationsSchema, accountsPartialWithRelationsSchema, accountsOptionalDefaultsWithRelationsSchema } from './accountsSchema'
import type { accountsWithRelations, accountsPartialWithRelations, accountsOptionalDefaultsWithRelations } from './accountsSchema'
import { socialAccountsWithRelationsSchema, socialAccountsPartialWithRelationsSchema, socialAccountsOptionalDefaultsWithRelationsSchema } from './socialAccountsSchema'
import type { socialAccountsWithRelations, socialAccountsPartialWithRelations, socialAccountsOptionalDefaultsWithRelations } from './socialAccountsSchema'
import { tokensWithRelationsSchema, tokensPartialWithRelationsSchema, tokensOptionalDefaultsWithRelationsSchema } from './tokensSchema'
import type { tokensWithRelations, tokensPartialWithRelations, tokensOptionalDefaultsWithRelations } from './tokensSchema'
import { otpsWithRelationsSchema, otpsPartialWithRelationsSchema, otpsOptionalDefaultsWithRelationsSchema } from './otpsSchema'
import type { otpsWithRelations, otpsPartialWithRelations, otpsOptionalDefaultsWithRelations } from './otpsSchema'
import { ProjectMemberWithRelationsSchema, ProjectMemberPartialWithRelationsSchema, ProjectMemberOptionalDefaultsWithRelationsSchema } from './ProjectMemberSchema'
import type { ProjectMemberWithRelations, ProjectMemberPartialWithRelations, ProjectMemberOptionalDefaultsWithRelations } from './ProjectMemberSchema'
import { UserRoleWithRelationsSchema, UserRolePartialWithRelationsSchema, UserRoleOptionalDefaultsWithRelationsSchema } from './UserRoleSchema'
import type { UserRoleWithRelations, UserRolePartialWithRelations, UserRoleOptionalDefaultsWithRelations } from './UserRoleSchema'
import { BoardMemberWithRelationsSchema, BoardMemberPartialWithRelationsSchema, BoardMemberOptionalDefaultsWithRelationsSchema } from './BoardMemberSchema'
import type { BoardMemberWithRelations, BoardMemberPartialWithRelations, BoardMemberOptionalDefaultsWithRelations } from './BoardMemberSchema'
import { InvitationsWithRelationsSchema, InvitationsPartialWithRelationsSchema, InvitationsOptionalDefaultsWithRelationsSchema } from './InvitationsSchema'
import type { InvitationsWithRelations, InvitationsPartialWithRelations, InvitationsOptionalDefaultsWithRelations } from './InvitationsSchema'

/////////////////////////////////////////
// USERS SCHEMA
/////////////////////////////////////////

export const usersSchema = z.object({
  status: UserStatusEnumSchema,
  id: z.uuid(),
  email: z.string(),
  name: z.string().nullish(),
  bio: z.string().nullish(),
  address: z.string().nullish(),
  avatar: z.string().nullish(),
  verify: z.boolean(),
  createdAt: z.coerce.date(),
  updatedAt: z.coerce.date(),
  deletedAt: z.coerce.date().nullish(),
})

export type users = z.infer<typeof usersSchema>

/////////////////////////////////////////
// USERS PARTIAL SCHEMA
/////////////////////////////////////////

export const usersPartialSchema = usersSchema.partial()

export type usersPartial = z.infer<typeof usersPartialSchema>

/////////////////////////////////////////
// USERS OPTIONAL DEFAULTS SCHEMA
/////////////////////////////////////////

export const usersOptionalDefaultsSchema = usersSchema.merge(z.object({
  status: UserStatusEnumSchema.optional(),
  id: z.uuid().optional(),
  verify: z.boolean().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
}))

export type usersOptionalDefaults = z.infer<typeof usersOptionalDefaultsSchema>

/////////////////////////////////////////
// USERS RELATION SCHEMA
/////////////////////////////////////////

export type usersRelations = {
  accounts?: accountsWithRelations | null;
  socialAccounts?: socialAccountsWithRelations | null;
  tokens: tokensWithRelations[];
  otps?: otpsWithRelations | null;
  projectMembers: ProjectMemberWithRelations[];
  UserRole: UserRoleWithRelations[];
  BoardMember: BoardMemberWithRelations[];
  Invitations: InvitationsWithRelations[];
};

export type usersWithRelations = z.infer<typeof usersSchema> & usersRelations

export const usersWithRelationsSchema: z.ZodType<usersWithRelations> = usersSchema.merge(z.object({
  accounts: z.lazy(() => accountsWithRelationsSchema).nullish(),
  socialAccounts: z.lazy(() => socialAccountsWithRelationsSchema).nullish(),
  tokens: z.lazy(() => tokensWithRelationsSchema).array(),
  otps: z.lazy(() => otpsWithRelationsSchema).nullish(),
  projectMembers: z.lazy(() => ProjectMemberWithRelationsSchema).array(),
  UserRole: z.lazy(() => UserRoleWithRelationsSchema).array(),
  BoardMember: z.lazy(() => BoardMemberWithRelationsSchema).array(),
  Invitations: z.lazy(() => InvitationsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// USERS OPTIONAL DEFAULTS RELATION SCHEMA
/////////////////////////////////////////

export type usersOptionalDefaultsRelations = {
  accounts?: accountsOptionalDefaultsWithRelations | null;
  socialAccounts?: socialAccountsOptionalDefaultsWithRelations | null;
  tokens: tokensOptionalDefaultsWithRelations[];
  otps?: otpsOptionalDefaultsWithRelations | null;
  projectMembers: ProjectMemberOptionalDefaultsWithRelations[];
  UserRole: UserRoleOptionalDefaultsWithRelations[];
  BoardMember: BoardMemberOptionalDefaultsWithRelations[];
  Invitations: InvitationsOptionalDefaultsWithRelations[];
};

export type usersOptionalDefaultsWithRelations = z.infer<typeof usersOptionalDefaultsSchema> & usersOptionalDefaultsRelations

export const usersOptionalDefaultsWithRelationsSchema: z.ZodType<usersOptionalDefaultsWithRelations> = usersOptionalDefaultsSchema.merge(z.object({
  accounts: z.lazy(() => accountsOptionalDefaultsWithRelationsSchema).nullish(),
  socialAccounts: z.lazy(() => socialAccountsOptionalDefaultsWithRelationsSchema).nullish(),
  tokens: z.lazy(() => tokensOptionalDefaultsWithRelationsSchema).array(),
  otps: z.lazy(() => otpsOptionalDefaultsWithRelationsSchema).nullish(),
  projectMembers: z.lazy(() => ProjectMemberOptionalDefaultsWithRelationsSchema).array(),
  UserRole: z.lazy(() => UserRoleOptionalDefaultsWithRelationsSchema).array(),
  BoardMember: z.lazy(() => BoardMemberOptionalDefaultsWithRelationsSchema).array(),
  Invitations: z.lazy(() => InvitationsOptionalDefaultsWithRelationsSchema).array(),
}))

/////////////////////////////////////////
// USERS PARTIAL RELATION SCHEMA
/////////////////////////////////////////

export type usersPartialRelations = {
  accounts?: accountsPartialWithRelations | null;
  socialAccounts?: socialAccountsPartialWithRelations | null;
  tokens?: tokensPartialWithRelations[];
  otps?: otpsPartialWithRelations | null;
  projectMembers?: ProjectMemberPartialWithRelations[];
  UserRole?: UserRolePartialWithRelations[];
  BoardMember?: BoardMemberPartialWithRelations[];
  Invitations?: InvitationsPartialWithRelations[];
};

export type usersPartialWithRelations = z.infer<typeof usersPartialSchema> & usersPartialRelations

export const usersPartialWithRelationsSchema: z.ZodType<usersPartialWithRelations> = usersPartialSchema.merge(z.object({
  accounts: z.lazy(() => accountsPartialWithRelationsSchema).nullish(),
  socialAccounts: z.lazy(() => socialAccountsPartialWithRelationsSchema).nullish(),
  tokens: z.lazy(() => tokensPartialWithRelationsSchema).array(),
  otps: z.lazy(() => otpsPartialWithRelationsSchema).nullish(),
  projectMembers: z.lazy(() => ProjectMemberPartialWithRelationsSchema).array(),
  UserRole: z.lazy(() => UserRolePartialWithRelationsSchema).array(),
  BoardMember: z.lazy(() => BoardMemberPartialWithRelationsSchema).array(),
  Invitations: z.lazy(() => InvitationsPartialWithRelationsSchema).array(),
})).partial()

export type usersOptionalDefaultsWithPartialRelations = z.infer<typeof usersOptionalDefaultsSchema> & usersPartialRelations

export const usersOptionalDefaultsWithPartialRelationsSchema: z.ZodType<usersOptionalDefaultsWithPartialRelations> = usersOptionalDefaultsSchema.merge(z.object({
  accounts: z.lazy(() => accountsPartialWithRelationsSchema).nullish(),
  socialAccounts: z.lazy(() => socialAccountsPartialWithRelationsSchema).nullish(),
  tokens: z.lazy(() => tokensPartialWithRelationsSchema).array(),
  otps: z.lazy(() => otpsPartialWithRelationsSchema).nullish(),
  projectMembers: z.lazy(() => ProjectMemberPartialWithRelationsSchema).array(),
  UserRole: z.lazy(() => UserRolePartialWithRelationsSchema).array(),
  BoardMember: z.lazy(() => BoardMemberPartialWithRelationsSchema).array(),
  Invitations: z.lazy(() => InvitationsPartialWithRelationsSchema).array(),
}).partial())

export type usersWithPartialRelations = z.infer<typeof usersSchema> & usersPartialRelations

export const usersWithPartialRelationsSchema: z.ZodType<usersWithPartialRelations> = usersSchema.merge(z.object({
  accounts: z.lazy(() => accountsPartialWithRelationsSchema).nullish(),
  socialAccounts: z.lazy(() => socialAccountsPartialWithRelationsSchema).nullish(),
  tokens: z.lazy(() => tokensPartialWithRelationsSchema).array(),
  otps: z.lazy(() => otpsPartialWithRelationsSchema).nullish(),
  projectMembers: z.lazy(() => ProjectMemberPartialWithRelationsSchema).array(),
  UserRole: z.lazy(() => UserRolePartialWithRelationsSchema).array(),
  BoardMember: z.lazy(() => BoardMemberPartialWithRelationsSchema).array(),
  Invitations: z.lazy(() => InvitationsPartialWithRelationsSchema).array(),
}).partial())

export default usersSchema;
