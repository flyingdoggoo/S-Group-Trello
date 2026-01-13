import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationsWhereUniqueInputSchema } from './InvitationsWhereUniqueInputSchema';
import { InvitationsCreateWithoutOwnerInputSchema } from './InvitationsCreateWithoutOwnerInputSchema';
import { InvitationsUncheckedCreateWithoutOwnerInputSchema } from './InvitationsUncheckedCreateWithoutOwnerInputSchema';

export const InvitationsCreateOrConnectWithoutOwnerInputSchema: z.ZodType<Prisma.InvitationsCreateOrConnectWithoutOwnerInput> = z.strictObject({
  where: z.lazy(() => InvitationsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InvitationsCreateWithoutOwnerInputSchema), z.lazy(() => InvitationsUncheckedCreateWithoutOwnerInputSchema) ]),
});

export default InvitationsCreateOrConnectWithoutOwnerInputSchema;
