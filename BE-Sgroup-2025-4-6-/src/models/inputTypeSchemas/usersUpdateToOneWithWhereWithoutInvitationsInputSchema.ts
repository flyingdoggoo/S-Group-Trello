import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutInvitationsInputSchema } from './usersUpdateWithoutInvitationsInputSchema';
import { usersUncheckedUpdateWithoutInvitationsInputSchema } from './usersUncheckedUpdateWithoutInvitationsInputSchema';

export const usersUpdateToOneWithWhereWithoutInvitationsInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutInvitationsInput> = z.strictObject({
  where: z.lazy(() => usersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => usersUpdateWithoutInvitationsInputSchema), z.lazy(() => usersUncheckedUpdateWithoutInvitationsInputSchema) ]),
});

export default usersUpdateToOneWithWhereWithoutInvitationsInputSchema;
