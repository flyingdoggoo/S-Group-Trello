import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationsScalarWhereInputSchema } from './InvitationsScalarWhereInputSchema';
import { InvitationsUpdateManyMutationInputSchema } from './InvitationsUpdateManyMutationInputSchema';
import { InvitationsUncheckedUpdateManyWithoutOwnerInputSchema } from './InvitationsUncheckedUpdateManyWithoutOwnerInputSchema';

export const InvitationsUpdateManyWithWhereWithoutOwnerInputSchema: z.ZodType<Prisma.InvitationsUpdateManyWithWhereWithoutOwnerInput> = z.strictObject({
  where: z.lazy(() => InvitationsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => InvitationsUpdateManyMutationInputSchema), z.lazy(() => InvitationsUncheckedUpdateManyWithoutOwnerInputSchema) ]),
});

export default InvitationsUpdateManyWithWhereWithoutOwnerInputSchema;
