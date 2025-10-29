import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleCreateManyRoleInputSchema } from './UserRoleCreateManyRoleInputSchema';

export const UserRoleCreateManyRoleInputEnvelopeSchema: z.ZodType<Prisma.UserRoleCreateManyRoleInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => UserRoleCreateManyRoleInputSchema), z.lazy(() => UserRoleCreateManyRoleInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default UserRoleCreateManyRoleInputEnvelopeSchema;
