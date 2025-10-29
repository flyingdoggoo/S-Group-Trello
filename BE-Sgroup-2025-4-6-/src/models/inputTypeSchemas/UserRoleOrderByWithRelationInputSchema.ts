import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { usersOrderByWithRelationInputSchema } from './usersOrderByWithRelationInputSchema';
import { rolesOrderByWithRelationInputSchema } from './rolesOrderByWithRelationInputSchema';

export const UserRoleOrderByWithRelationInputSchema: z.ZodType<Prisma.UserRoleOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  roleId: z.lazy(() => SortOrderSchema).optional(),
  assignedAt: z.lazy(() => SortOrderSchema).optional(),
  user: z.lazy(() => usersOrderByWithRelationInputSchema).optional(),
  role: z.lazy(() => rolesOrderByWithRelationInputSchema).optional(),
});

export default UserRoleOrderByWithRelationInputSchema;
