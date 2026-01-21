import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationsWhereUniqueInputSchema } from './InvitationsWhereUniqueInputSchema';
import { InvitationsCreateWithoutBoardInputSchema } from './InvitationsCreateWithoutBoardInputSchema';
import { InvitationsUncheckedCreateWithoutBoardInputSchema } from './InvitationsUncheckedCreateWithoutBoardInputSchema';

export const InvitationsCreateOrConnectWithoutBoardInputSchema: z.ZodType<Prisma.InvitationsCreateOrConnectWithoutBoardInput> = z.strictObject({
  where: z.lazy(() => InvitationsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => InvitationsCreateWithoutBoardInputSchema), z.lazy(() => InvitationsUncheckedCreateWithoutBoardInputSchema) ]),
});

export default InvitationsCreateOrConnectWithoutBoardInputSchema;
