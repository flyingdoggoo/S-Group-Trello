import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { ProjectMemberCountOrderByAggregateInputSchema } from './ProjectMemberCountOrderByAggregateInputSchema';
import { ProjectMemberMaxOrderByAggregateInputSchema } from './ProjectMemberMaxOrderByAggregateInputSchema';
import { ProjectMemberMinOrderByAggregateInputSchema } from './ProjectMemberMinOrderByAggregateInputSchema';

export const ProjectMemberOrderByWithAggregationInputSchema: z.ZodType<Prisma.ProjectMemberOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  roleId: z.lazy(() => SortOrderSchema).optional(),
  joinedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => ProjectMemberCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ProjectMemberMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ProjectMemberMinOrderByAggregateInputSchema).optional(),
});

export default ProjectMemberOrderByWithAggregationInputSchema;
