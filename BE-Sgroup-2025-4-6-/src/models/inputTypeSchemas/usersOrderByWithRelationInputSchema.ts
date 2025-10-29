import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { accountsOrderByWithRelationInputSchema } from './accountsOrderByWithRelationInputSchema';
import { socialAccountsOrderByWithRelationInputSchema } from './socialAccountsOrderByWithRelationInputSchema';
import { tokensOrderByRelationAggregateInputSchema } from './tokensOrderByRelationAggregateInputSchema';
import { otpsOrderByWithRelationInputSchema } from './otpsOrderByWithRelationInputSchema';
import { ProjectMemberOrderByRelationAggregateInputSchema } from './ProjectMemberOrderByRelationAggregateInputSchema';
import { UserRoleOrderByRelationAggregateInputSchema } from './UserRoleOrderByRelationAggregateInputSchema';

export const usersOrderByWithRelationInputSchema: z.ZodType<Prisma.usersOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  name: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  bio: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  address: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  avatar: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  verify: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  accounts: z.lazy(() => accountsOrderByWithRelationInputSchema).optional(),
  socialAccounts: z.lazy(() => socialAccountsOrderByWithRelationInputSchema).optional(),
  tokens: z.lazy(() => tokensOrderByRelationAggregateInputSchema).optional(),
  otps: z.lazy(() => otpsOrderByWithRelationInputSchema).optional(),
  projectMembers: z.lazy(() => ProjectMemberOrderByRelationAggregateInputSchema).optional(),
  UserRole: z.lazy(() => UserRoleOrderByRelationAggregateInputSchema).optional(),
});

export default usersOrderByWithRelationInputSchema;
