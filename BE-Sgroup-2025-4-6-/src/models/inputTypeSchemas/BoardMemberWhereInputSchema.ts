import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { BoardScalarRelationFilterSchema } from './BoardScalarRelationFilterSchema';
import { BoardWhereInputSchema } from './BoardWhereInputSchema';
import { UsersScalarRelationFilterSchema } from './UsersScalarRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { RolesScalarRelationFilterSchema } from './RolesScalarRelationFilterSchema';
import { rolesWhereInputSchema } from './rolesWhereInputSchema';

export const BoardMemberWhereInputSchema: z.ZodType<Prisma.BoardMemberWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => BoardMemberWhereInputSchema), z.lazy(() => BoardMemberWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BoardMemberWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BoardMemberWhereInputSchema), z.lazy(() => BoardMemberWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  boardId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  roleId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  joinedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  board: z.union([ z.lazy(() => BoardScalarRelationFilterSchema), z.lazy(() => BoardWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UsersScalarRelationFilterSchema), z.lazy(() => usersWhereInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RolesScalarRelationFilterSchema), z.lazy(() => rolesWhereInputSchema) ]).optional(),
});

export default BoardMemberWhereInputSchema;
