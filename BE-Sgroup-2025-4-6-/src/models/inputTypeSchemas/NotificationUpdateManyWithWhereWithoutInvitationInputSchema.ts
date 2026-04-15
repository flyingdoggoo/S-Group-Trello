import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationScalarWhereInputSchema } from './NotificationScalarWhereInputSchema';
import { NotificationUpdateManyMutationInputSchema } from './NotificationUpdateManyMutationInputSchema';
import { NotificationUncheckedUpdateManyWithoutInvitationInputSchema } from './NotificationUncheckedUpdateManyWithoutInvitationInputSchema';

export const NotificationUpdateManyWithWhereWithoutInvitationInputSchema: z.ZodType<Prisma.NotificationUpdateManyWithWhereWithoutInvitationInput> = z.strictObject({
  where: z.lazy(() => NotificationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => NotificationUpdateManyMutationInputSchema), z.lazy(() => NotificationUncheckedUpdateManyWithoutInvitationInputSchema) ]),
});

export default NotificationUpdateManyWithWhereWithoutInvitationInputSchema;
