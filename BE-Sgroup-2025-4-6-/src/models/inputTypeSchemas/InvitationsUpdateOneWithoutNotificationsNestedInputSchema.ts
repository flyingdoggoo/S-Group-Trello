import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationsCreateWithoutNotificationsInputSchema } from './InvitationsCreateWithoutNotificationsInputSchema';
import { InvitationsUncheckedCreateWithoutNotificationsInputSchema } from './InvitationsUncheckedCreateWithoutNotificationsInputSchema';
import { InvitationsCreateOrConnectWithoutNotificationsInputSchema } from './InvitationsCreateOrConnectWithoutNotificationsInputSchema';
import { InvitationsUpsertWithoutNotificationsInputSchema } from './InvitationsUpsertWithoutNotificationsInputSchema';
import { InvitationsWhereInputSchema } from './InvitationsWhereInputSchema';
import { InvitationsWhereUniqueInputSchema } from './InvitationsWhereUniqueInputSchema';
import { InvitationsUpdateToOneWithWhereWithoutNotificationsInputSchema } from './InvitationsUpdateToOneWithWhereWithoutNotificationsInputSchema';
import { InvitationsUpdateWithoutNotificationsInputSchema } from './InvitationsUpdateWithoutNotificationsInputSchema';
import { InvitationsUncheckedUpdateWithoutNotificationsInputSchema } from './InvitationsUncheckedUpdateWithoutNotificationsInputSchema';

export const InvitationsUpdateOneWithoutNotificationsNestedInputSchema: z.ZodType<Prisma.InvitationsUpdateOneWithoutNotificationsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => InvitationsCreateWithoutNotificationsInputSchema), z.lazy(() => InvitationsUncheckedCreateWithoutNotificationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => InvitationsCreateOrConnectWithoutNotificationsInputSchema).optional(),
  upsert: z.lazy(() => InvitationsUpsertWithoutNotificationsInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => InvitationsWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => InvitationsWhereInputSchema) ]).optional(),
  connect: z.lazy(() => InvitationsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => InvitationsUpdateToOneWithWhereWithoutNotificationsInputSchema), z.lazy(() => InvitationsUpdateWithoutNotificationsInputSchema), z.lazy(() => InvitationsUncheckedUpdateWithoutNotificationsInputSchema) ]).optional(),
});

export default InvitationsUpdateOneWithoutNotificationsNestedInputSchema;
