import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RolePermissionCreateManyRoleInputSchema } from './RolePermissionCreateManyRoleInputSchema';

export const RolePermissionCreateManyRoleInputEnvelopeSchema: z.ZodType<Prisma.RolePermissionCreateManyRoleInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => RolePermissionCreateManyRoleInputSchema), z.lazy(() => RolePermissionCreateManyRoleInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default RolePermissionCreateManyRoleInputEnvelopeSchema;
