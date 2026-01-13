import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationsWhereInputSchema } from './InvitationsWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { EnumInvitationStatusEnumFilterSchema } from './EnumInvitationStatusEnumFilterSchema';
import { InvitationStatusEnumSchema } from './InvitationStatusEnumSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { UsersScalarRelationFilterSchema } from './UsersScalarRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { ProjectNullableScalarRelationFilterSchema } from './ProjectNullableScalarRelationFilterSchema';
import { projectWhereInputSchema } from './projectWhereInputSchema';
import { BoardNullableScalarRelationFilterSchema } from './BoardNullableScalarRelationFilterSchema';
import { BoardWhereInputSchema } from './BoardWhereInputSchema';

export const InvitationsWhereUniqueInputSchema: z.ZodType<Prisma.InvitationsWhereUniqueInput> = z.union([
  z.object({
    id: z.uuid(),
    token: z.string(),
  }),
  z.object({
    id: z.uuid(),
  }),
  z.object({
    token: z.string(),
  }),
])
.and(z.strictObject({
  id: z.uuid().optional(),
  token: z.string().optional(),
  AND: z.union([ z.lazy(() => InvitationsWhereInputSchema), z.lazy(() => InvitationsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => InvitationsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => InvitationsWhereInputSchema), z.lazy(() => InvitationsWhereInputSchema).array() ]).optional(),
  projectId: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  boardId: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  email: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  roleId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  status: z.union([ z.lazy(() => EnumInvitationStatusEnumFilterSchema), z.lazy(() => InvitationStatusEnumSchema) ]).optional(),
  createdBy: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  acceptedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  owner: z.union([ z.lazy(() => UsersScalarRelationFilterSchema), z.lazy(() => usersWhereInputSchema) ]).optional(),
  project: z.union([ z.lazy(() => ProjectNullableScalarRelationFilterSchema), z.lazy(() => projectWhereInputSchema) ]).optional().nullable(),
  board: z.union([ z.lazy(() => BoardNullableScalarRelationFilterSchema), z.lazy(() => BoardWhereInputSchema) ]).optional().nullable(),
}));

export default InvitationsWhereUniqueInputSchema;
