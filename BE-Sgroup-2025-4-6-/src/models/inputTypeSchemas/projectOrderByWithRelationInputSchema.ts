import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ProjectMemberOrderByRelationAggregateInputSchema } from './ProjectMemberOrderByRelationAggregateInputSchema';
import { BoardOrderByRelationAggregateInputSchema } from './BoardOrderByRelationAggregateInputSchema';

export const projectOrderByWithRelationInputSchema: z.ZodType<Prisma.projectOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  members: z.lazy(() => ProjectMemberOrderByRelationAggregateInputSchema).optional(),
  Board: z.lazy(() => BoardOrderByRelationAggregateInputSchema).optional(),
});

export default projectOrderByWithRelationInputSchema;
