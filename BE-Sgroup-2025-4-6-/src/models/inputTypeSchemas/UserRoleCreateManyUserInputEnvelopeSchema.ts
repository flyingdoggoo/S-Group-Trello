import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleCreateManyUserInputSchema } from './UserRoleCreateManyUserInputSchema';

export const UserRoleCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.UserRoleCreateManyUserInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => UserRoleCreateManyUserInputSchema), z.lazy(() => UserRoleCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default UserRoleCreateManyUserInputEnvelopeSchema;
