import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationsWhereUniqueInputSchema } from './InvitationsWhereUniqueInputSchema';
import { InvitationsCreateWithoutNotificationsInputSchema } from './InvitationsCreateWithoutNotificationsInputSchema';
import { InvitationsUncheckedCreateWithoutNotificationsInputSchema } from './InvitationsUncheckedCreateWithoutNotificationsInputSchema';

export const InvitationsCreateOrConnectWithoutNotificationsInputSchema: z.ZodType<Prisma.InvitationsCreateOrConnectWithoutNotificationsInput> = z.strictObject({
  where: z.lazy(() => InvitationsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InvitationsCreateWithoutNotificationsInputSchema), z.lazy(() => InvitationsUncheckedCreateWithoutNotificationsInputSchema) ]),
});

export default InvitationsCreateOrConnectWithoutNotificationsInputSchema;
