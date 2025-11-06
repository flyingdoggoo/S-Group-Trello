import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const BoardMemberScalarWhereInputSchema: z.ZodType<Prisma.BoardMemberScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => BoardMemberScalarWhereInputSchema), z.lazy(() => BoardMemberScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BoardMemberScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BoardMemberScalarWhereInputSchema), z.lazy(() => BoardMemberScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  boardId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  roleId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  joinedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export default BoardMemberScalarWhereInputSchema;
