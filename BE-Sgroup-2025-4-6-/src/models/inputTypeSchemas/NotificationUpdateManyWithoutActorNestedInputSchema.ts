import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationCreateWithoutActorInputSchema } from './NotificationCreateWithoutActorInputSchema';
import { NotificationUncheckedCreateWithoutActorInputSchema } from './NotificationUncheckedCreateWithoutActorInputSchema';
import { NotificationCreateOrConnectWithoutActorInputSchema } from './NotificationCreateOrConnectWithoutActorInputSchema';
import { NotificationUpsertWithWhereUniqueWithoutActorInputSchema } from './NotificationUpsertWithWhereUniqueWithoutActorInputSchema';
import { NotificationCreateManyActorInputEnvelopeSchema } from './NotificationCreateManyActorInputEnvelopeSchema';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationUpdateWithWhereUniqueWithoutActorInputSchema } from './NotificationUpdateWithWhereUniqueWithoutActorInputSchema';
import { NotificationUpdateManyWithWhereWithoutActorInputSchema } from './NotificationUpdateManyWithWhereWithoutActorInputSchema';
import { NotificationScalarWhereInputSchema } from './NotificationScalarWhereInputSchema';

export const NotificationUpdateManyWithoutActorNestedInputSchema: z.ZodType<Prisma.NotificationUpdateManyWithoutActorNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => NotificationCreateWithoutActorInputSchema), z.lazy(() => NotificationCreateWithoutActorInputSchema).array(), z.lazy(() => NotificationUncheckedCreateWithoutActorInputSchema), z.lazy(() => NotificationUncheckedCreateWithoutActorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutActorInputSchema), z.lazy(() => NotificationCreateOrConnectWithoutActorInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => NotificationUpsertWithWhereUniqueWithoutActorInputSchema), z.lazy(() => NotificationUpsertWithWhereUniqueWithoutActorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManyActorInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema), z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema), z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema), z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema), z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => NotificationUpdateWithWhereUniqueWithoutActorInputSchema), z.lazy(() => NotificationUpdateWithWhereUniqueWithoutActorInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => NotificationUpdateManyWithWhereWithoutActorInputSchema), z.lazy(() => NotificationUpdateManyWithWhereWithoutActorInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => NotificationScalarWhereInputSchema), z.lazy(() => NotificationScalarWhereInputSchema).array() ]).optional(),
});

export default NotificationUpdateManyWithoutActorNestedInputSchema;
