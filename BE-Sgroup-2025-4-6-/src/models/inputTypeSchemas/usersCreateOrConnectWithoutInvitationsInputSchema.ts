import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutInvitationsInputSchema } from './usersCreateWithoutInvitationsInputSchema';
import { usersUncheckedCreateWithoutInvitationsInputSchema } from './usersUncheckedCreateWithoutInvitationsInputSchema';

export const usersCreateOrConnectWithoutInvitationsInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutInvitationsInput> = z.strictObject({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => usersCreateWithoutInvitationsInputSchema), z.lazy(() => usersUncheckedCreateWithoutInvitationsInputSchema) ]),
});

export default usersCreateOrConnectWithoutInvitationsInputSchema;
