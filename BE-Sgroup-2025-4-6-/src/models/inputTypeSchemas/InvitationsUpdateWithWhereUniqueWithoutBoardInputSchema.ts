import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationsWhereUniqueInputSchema } from './InvitationsWhereUniqueInputSchema';
import { InvitationsUpdateWithoutBoardInputSchema } from './InvitationsUpdateWithoutBoardInputSchema';
import { InvitationsUncheckedUpdateWithoutBoardInputSchema } from './InvitationsUncheckedUpdateWithoutBoardInputSchema';

export const InvitationsUpdateWithWhereUniqueWithoutBoardInputSchema: z.ZodType<Prisma.InvitationsUpdateWithWhereUniqueWithoutBoardInput> = z.strictObject({
  where: z.lazy(() => InvitationsWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => InvitationsUpdateWithoutBoardInputSchema), z.lazy(() => InvitationsUncheckedUpdateWithoutBoardInputSchema) ]),
});

export default InvitationsUpdateWithWhereUniqueWithoutBoardInputSchema;
