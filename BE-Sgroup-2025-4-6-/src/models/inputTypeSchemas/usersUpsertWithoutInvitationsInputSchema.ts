import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutInvitationsInputSchema } from './usersUpdateWithoutInvitationsInputSchema';
import { usersUncheckedUpdateWithoutInvitationsInputSchema } from './usersUncheckedUpdateWithoutInvitationsInputSchema';
import { usersCreateWithoutInvitationsInputSchema } from './usersCreateWithoutInvitationsInputSchema';
import { usersUncheckedCreateWithoutInvitationsInputSchema } from './usersUncheckedCreateWithoutInvitationsInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutInvitationsInputSchema: z.ZodType<Prisma.usersUpsertWithoutInvitationsInput> = z.strictObject({
  update: z.union([ z.lazy(() => usersUpdateWithoutInvitationsInputSchema), z.lazy(() => usersUncheckedUpdateWithoutInvitationsInputSchema) ]),
  create: z.union([ z.lazy(() => usersCreateWithoutInvitationsInputSchema), z.lazy(() => usersUncheckedCreateWithoutInvitationsInputSchema) ]),
  where: z.lazy(() => usersWhereInputSchema).optional(),
});

export default usersUpsertWithoutInvitationsInputSchema;
