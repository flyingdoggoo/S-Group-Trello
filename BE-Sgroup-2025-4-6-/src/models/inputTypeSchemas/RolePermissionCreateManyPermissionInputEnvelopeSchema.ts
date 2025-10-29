import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RolePermissionCreateManyPermissionInputSchema } from './RolePermissionCreateManyPermissionInputSchema';

export const RolePermissionCreateManyPermissionInputEnvelopeSchema: z.ZodType<Prisma.RolePermissionCreateManyPermissionInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => RolePermissionCreateManyPermissionInputSchema), z.lazy(() => RolePermissionCreateManyPermissionInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default RolePermissionCreateManyPermissionInputEnvelopeSchema;
