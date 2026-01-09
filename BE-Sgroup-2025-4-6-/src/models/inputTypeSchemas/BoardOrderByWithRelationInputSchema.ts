import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { projectOrderByWithRelationInputSchema } from './projectOrderByWithRelationInputSchema';
import { ListOrderByRelationAggregateInputSchema } from './ListOrderByRelationAggregateInputSchema';
import { InvitationsOrderByRelationAggregateInputSchema } from './InvitationsOrderByRelationAggregateInputSchema';
import { BoardMemberOrderByRelationAggregateInputSchema } from './BoardMemberOrderByRelationAggregateInputSchema';

export const BoardOrderByWithRelationInputSchema: z.ZodType<Prisma.BoardOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  coverUrl: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  project: z.lazy(() => projectOrderByWithRelationInputSchema).optional(),
  List: z.lazy(() => ListOrderByRelationAggregateInputSchema).optional(),
  invitation: z.lazy(() => InvitationsOrderByRelationAggregateInputSchema).optional(),
  BoardMember: z.lazy(() => BoardMemberOrderByRelationAggregateInputSchema).optional(),
});

export default BoardOrderByWithRelationInputSchema;
