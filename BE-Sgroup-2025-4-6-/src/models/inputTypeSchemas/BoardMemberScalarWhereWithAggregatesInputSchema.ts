import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const BoardMemberScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BoardMemberScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => BoardMemberScalarWhereWithAggregatesInputSchema), z.lazy(() => BoardMemberScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BoardMemberScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BoardMemberScalarWhereWithAggregatesInputSchema), z.lazy(() => BoardMemberScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  boardId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  roleId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  joinedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export default BoardMemberScalarWhereWithAggregatesInputSchema;
