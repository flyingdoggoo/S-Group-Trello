import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationsWhereInputSchema } from './InvitationsWhereInputSchema';
import { InvitationsUpdateWithoutNotificationsInputSchema } from './InvitationsUpdateWithoutNotificationsInputSchema';
import { InvitationsUncheckedUpdateWithoutNotificationsInputSchema } from './InvitationsUncheckedUpdateWithoutNotificationsInputSchema';

export const InvitationsUpdateToOneWithWhereWithoutNotificationsInputSchema: z.ZodType<Prisma.InvitationsUpdateToOneWithWhereWithoutNotificationsInput> = z.strictObject({
  where: z.lazy(() => InvitationsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => InvitationsUpdateWithoutNotificationsInputSchema), z.lazy(() => InvitationsUncheckedUpdateWithoutNotificationsInputSchema) ]),
});

export default InvitationsUpdateToOneWithWhereWithoutNotificationsInputSchema;
