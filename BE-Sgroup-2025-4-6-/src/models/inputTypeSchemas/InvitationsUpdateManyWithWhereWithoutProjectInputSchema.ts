import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationsScalarWhereInputSchema } from './InvitationsScalarWhereInputSchema';
import { InvitationsUpdateManyMutationInputSchema } from './InvitationsUpdateManyMutationInputSchema';
import { InvitationsUncheckedUpdateManyWithoutProjectInputSchema } from './InvitationsUncheckedUpdateManyWithoutProjectInputSchema';

export const InvitationsUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.InvitationsUpdateManyWithWhereWithoutProjectInput> = z.strictObject({
  where: z.lazy(() => InvitationsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => InvitationsUpdateManyMutationInputSchema), z.lazy(() => InvitationsUncheckedUpdateManyWithoutProjectInputSchema) ]),
});

export default InvitationsUpdateManyWithWhereWithoutProjectInputSchema;
