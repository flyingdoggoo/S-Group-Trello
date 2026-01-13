import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationsWhereUniqueInputSchema } from './InvitationsWhereUniqueInputSchema';
import { InvitationsUpdateWithoutBoardInputSchema } from './InvitationsUpdateWithoutBoardInputSchema';
import { InvitationsUncheckedUpdateWithoutBoardInputSchema } from './InvitationsUncheckedUpdateWithoutBoardInputSchema';
import { InvitationsCreateWithoutBoardInputSchema } from './InvitationsCreateWithoutBoardInputSchema';
import { InvitationsUncheckedCreateWithoutBoardInputSchema } from './InvitationsUncheckedCreateWithoutBoardInputSchema';

export const InvitationsUpsertWithWhereUniqueWithoutBoardInputSchema: z.ZodType<Prisma.InvitationsUpsertWithWhereUniqueWithoutBoardInput> = z.strictObject({
  where: z.lazy(() => InvitationsWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => InvitationsUpdateWithoutBoardInputSchema), z.lazy(() => InvitationsUncheckedUpdateWithoutBoardInputSchema) ]),
  create: z.union([ z.lazy(() => InvitationsCreateWithoutBoardInputSchema), z.lazy(() => InvitationsUncheckedCreateWithoutBoardInputSchema) ]),
});

export default InvitationsUpsertWithWhereUniqueWithoutBoardInputSchema;
