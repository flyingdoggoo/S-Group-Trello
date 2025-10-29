import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const ProjectMemberScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ProjectMemberScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ProjectMemberScalarWhereWithAggregatesInputSchema), z.lazy(() => ProjectMemberScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectMemberScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectMemberScalarWhereWithAggregatesInputSchema), z.lazy(() => ProjectMemberScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  projectId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  roleId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  joinedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export default ProjectMemberScalarWhereWithAggregatesInputSchema;
