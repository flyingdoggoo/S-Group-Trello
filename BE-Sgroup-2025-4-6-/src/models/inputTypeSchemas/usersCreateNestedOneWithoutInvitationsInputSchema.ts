import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutInvitationsInputSchema } from './usersCreateWithoutInvitationsInputSchema';
import { usersUncheckedCreateWithoutInvitationsInputSchema } from './usersUncheckedCreateWithoutInvitationsInputSchema';
import { usersCreateOrConnectWithoutInvitationsInputSchema } from './usersCreateOrConnectWithoutInvitationsInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutInvitationsInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutInvitationsInput> = z.strictObject({
  create: z.union([ z.lazy(() => usersCreateWithoutInvitationsInputSchema), z.lazy(() => usersUncheckedCreateWithoutInvitationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutInvitationsInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
});

export default usersCreateNestedOneWithoutInvitationsInputSchema;
