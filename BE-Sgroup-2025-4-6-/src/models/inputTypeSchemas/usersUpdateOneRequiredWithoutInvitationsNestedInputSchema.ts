import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutInvitationsInputSchema } from './usersCreateWithoutInvitationsInputSchema';
import { usersUncheckedCreateWithoutInvitationsInputSchema } from './usersUncheckedCreateWithoutInvitationsInputSchema';
import { usersCreateOrConnectWithoutInvitationsInputSchema } from './usersCreateOrConnectWithoutInvitationsInputSchema';
import { usersUpsertWithoutInvitationsInputSchema } from './usersUpsertWithoutInvitationsInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutInvitationsInputSchema } from './usersUpdateToOneWithWhereWithoutInvitationsInputSchema';
import { usersUpdateWithoutInvitationsInputSchema } from './usersUpdateWithoutInvitationsInputSchema';
import { usersUncheckedUpdateWithoutInvitationsInputSchema } from './usersUncheckedUpdateWithoutInvitationsInputSchema';

export const usersUpdateOneRequiredWithoutInvitationsNestedInputSchema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutInvitationsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => usersCreateWithoutInvitationsInputSchema), z.lazy(() => usersUncheckedCreateWithoutInvitationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutInvitationsInputSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutInvitationsInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => usersUpdateToOneWithWhereWithoutInvitationsInputSchema), z.lazy(() => usersUpdateWithoutInvitationsInputSchema), z.lazy(() => usersUncheckedUpdateWithoutInvitationsInputSchema) ]).optional(),
});

export default usersUpdateOneRequiredWithoutInvitationsNestedInputSchema;
