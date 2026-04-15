import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationsCreateWithoutNotificationsInputSchema } from './InvitationsCreateWithoutNotificationsInputSchema';
import { InvitationsUncheckedCreateWithoutNotificationsInputSchema } from './InvitationsUncheckedCreateWithoutNotificationsInputSchema';
import { InvitationsCreateOrConnectWithoutNotificationsInputSchema } from './InvitationsCreateOrConnectWithoutNotificationsInputSchema';
import { InvitationsWhereUniqueInputSchema } from './InvitationsWhereUniqueInputSchema';

export const InvitationsCreateNestedOneWithoutNotificationsInputSchema: z.ZodType<Prisma.InvitationsCreateNestedOneWithoutNotificationsInput> = z.strictObject({
  create: z.union([ z.lazy(() => InvitationsCreateWithoutNotificationsInputSchema), z.lazy(() => InvitationsUncheckedCreateWithoutNotificationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InvitationsCreateOrConnectWithoutNotificationsInputSchema).optional(),
  connect: z.lazy(() => InvitationsWhereUniqueInputSchema).optional(),
});

export default InvitationsCreateNestedOneWithoutNotificationsInputSchema;
