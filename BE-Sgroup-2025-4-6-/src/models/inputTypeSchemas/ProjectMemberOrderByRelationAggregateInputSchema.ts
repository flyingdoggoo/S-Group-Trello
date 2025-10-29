import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ProjectMemberOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ProjectMemberOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default ProjectMemberOrderByRelationAggregateInputSchema;
