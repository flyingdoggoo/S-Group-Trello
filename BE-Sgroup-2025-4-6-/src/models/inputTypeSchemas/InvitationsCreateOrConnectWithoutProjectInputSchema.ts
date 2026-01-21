import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationsWhereUniqueInputSchema } from './InvitationsWhereUniqueInputSchema';
import { InvitationsCreateWithoutProjectInputSchema } from './InvitationsCreateWithoutProjectInputSchema';
import { InvitationsUncheckedCreateWithoutProjectInputSchema } from './InvitationsUncheckedCreateWithoutProjectInputSchema';

export const InvitationsCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.InvitationsCreateOrConnectWithoutProjectInput> = z.strictObject({
  where: z.lazy(() => InvitationsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InvitationsCreateWithoutProjectInputSchema), z.lazy(() => InvitationsUncheckedCreateWithoutProjectInputSchema) ]),
});

export default InvitationsCreateOrConnectWithoutProjectInputSchema;
