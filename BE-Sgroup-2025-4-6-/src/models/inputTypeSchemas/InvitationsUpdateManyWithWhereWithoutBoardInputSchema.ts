import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationsScalarWhereInputSchema } from './InvitationsScalarWhereInputSchema';
import { InvitationsUpdateManyMutationInputSchema } from './InvitationsUpdateManyMutationInputSchema';
import { InvitationsUncheckedUpdateManyWithoutBoardInputSchema } from './InvitationsUncheckedUpdateManyWithoutBoardInputSchema';

export const InvitationsUpdateManyWithWhereWithoutBoardInputSchema: z.ZodType<Prisma.InvitationsUpdateManyWithWhereWithoutBoardInput> = z.strictObject({
  where: z.lazy(() => InvitationsScalarWhereInputSchema),
  data: z.union([ z.lazy(() => InvitationsUpdateManyMutationInputSchema), z.lazy(() => InvitationsUncheckedUpdateManyWithoutBoardInputSchema) ]),
});

export default InvitationsUpdateManyWithWhereWithoutBoardInputSchema;
