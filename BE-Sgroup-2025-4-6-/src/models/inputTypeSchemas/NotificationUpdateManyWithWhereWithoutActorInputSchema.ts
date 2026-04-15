import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationScalarWhereInputSchema } from './NotificationScalarWhereInputSchema';
import { NotificationUpdateManyMutationInputSchema } from './NotificationUpdateManyMutationInputSchema';
import { NotificationUncheckedUpdateManyWithoutActorInputSchema } from './NotificationUncheckedUpdateManyWithoutActorInputSchema';

export const NotificationUpdateManyWithWhereWithoutActorInputSchema: z.ZodType<Prisma.NotificationUpdateManyWithWhereWithoutActorInput> = z.strictObject({
  where: z.lazy(() => NotificationScalarWhereInputSchema),
  data: z.union([ z.lazy(() => NotificationUpdateManyMutationInputSchema), z.lazy(() => NotificationUncheckedUpdateManyWithoutActorInputSchema) ]),
});

export default NotificationUpdateManyWithWhereWithoutActorInputSchema;
