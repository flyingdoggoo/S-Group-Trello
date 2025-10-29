import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ProjectMemberOrderByRelationAggregateInputSchema } from './ProjectMemberOrderByRelationAggregateInputSchema';
import { RolePermissionOrderByRelationAggregateInputSchema } from './RolePermissionOrderByRelationAggregateInputSchema';
import { UserRoleOrderByRelationAggregateInputSchema } from './UserRoleOrderByRelationAggregateInputSchema';

export const rolesOrderByWithRelationInputSchema: z.ZodType<Prisma.rolesOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  roleName: z.lazy(() => SortOrderSchema).optional(),
  desciption: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  projectMembers: z.lazy(() => ProjectMemberOrderByRelationAggregateInputSchema).optional(),
  RolePermission: z.lazy(() => RolePermissionOrderByRelationAggregateInputSchema).optional(),
  UserRole: z.lazy(() => UserRoleOrderByRelationAggregateInputSchema).optional(),
});

export default rolesOrderByWithRelationInputSchema;
