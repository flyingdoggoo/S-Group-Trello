import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { usersOrderByWithRelationInputSchema } from './usersOrderByWithRelationInputSchema';
import { projectOrderByWithRelationInputSchema } from './projectOrderByWithRelationInputSchema';
import { BoardOrderByWithRelationInputSchema } from './BoardOrderByWithRelationInputSchema';

export const InvitationsOrderByWithRelationInputSchema: z.ZodType<Prisma.InvitationsOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  boardId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  roleId: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  acceptedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  owner: z.lazy(() => usersOrderByWithRelationInputSchema).optional(),
  project: z.lazy(() => projectOrderByWithRelationInputSchema).optional(),
  board: z.lazy(() => BoardOrderByWithRelationInputSchema).optional(),
});

export default InvitationsOrderByWithRelationInputSchema;
