import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const ProjectMemberScalarWhereInputSchema: z.ZodType<Prisma.ProjectMemberScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ProjectMemberScalarWhereInputSchema), z.lazy(() => ProjectMemberScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ProjectMemberScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ProjectMemberScalarWhereInputSchema), z.lazy(() => ProjectMemberScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  projectId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  roleId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  joinedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export default ProjectMemberScalarWhereInputSchema;
