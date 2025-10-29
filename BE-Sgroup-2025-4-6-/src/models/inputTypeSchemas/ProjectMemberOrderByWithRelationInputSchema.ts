import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { projectOrderByWithRelationInputSchema } from './projectOrderByWithRelationInputSchema';
import { usersOrderByWithRelationInputSchema } from './usersOrderByWithRelationInputSchema';
import { rolesOrderByWithRelationInputSchema } from './rolesOrderByWithRelationInputSchema';

export const ProjectMemberOrderByWithRelationInputSchema: z.ZodType<Prisma.ProjectMemberOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  roleId: z.lazy(() => SortOrderSchema).optional(),
  joinedAt: z.lazy(() => SortOrderSchema).optional(),
  project: z.lazy(() => projectOrderByWithRelationInputSchema).optional(),
  user: z.lazy(() => usersOrderByWithRelationInputSchema).optional(),
  role: z.lazy(() => rolesOrderByWithRelationInputSchema).optional(),
});

export default ProjectMemberOrderByWithRelationInputSchema;
