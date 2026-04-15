import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationsUpdateWithoutNotificationsInputSchema } from './InvitationsUpdateWithoutNotificationsInputSchema';
import { InvitationsUncheckedUpdateWithoutNotificationsInputSchema } from './InvitationsUncheckedUpdateWithoutNotificationsInputSchema';
import { InvitationsCreateWithoutNotificationsInputSchema } from './InvitationsCreateWithoutNotificationsInputSchema';
import { InvitationsUncheckedCreateWithoutNotificationsInputSchema } from './InvitationsUncheckedCreateWithoutNotificationsInputSchema';
import { InvitationsWhereInputSchema } from './InvitationsWhereInputSchema';

export const InvitationsUpsertWithoutNotificationsInputSchema: z.ZodType<Prisma.InvitationsUpsertWithoutNotificationsInput> = z.strictObject({
  update: z.union([ z.lazy(() => InvitationsUpdateWithoutNotificationsInputSchema), z.lazy(() => InvitationsUncheckedUpdateWithoutNotificationsInputSchema) ]),
  create: z.union([ z.lazy(() => InvitationsCreateWithoutNotificationsInputSchema), z.lazy(() => InvitationsUncheckedCreateWithoutNotificationsInputSchema) ]),
  where: z.lazy(() => InvitationsWhereInputSchema).optional(),
});

export default InvitationsUpsertWithoutNotificationsInputSchema;
