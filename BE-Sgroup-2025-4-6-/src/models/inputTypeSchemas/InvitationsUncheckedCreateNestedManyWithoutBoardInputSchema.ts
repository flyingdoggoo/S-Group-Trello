import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationsCreateWithoutBoardInputSchema } from './InvitationsCreateWithoutBoardInputSchema';
import { InvitationsUncheckedCreateWithoutBoardInputSchema } from './InvitationsUncheckedCreateWithoutBoardInputSchema';
import { InvitationsCreateOrConnectWithoutBoardInputSchema } from './InvitationsCreateOrConnectWithoutBoardInputSchema';
import { InvitationsCreateManyBoardInputEnvelopeSchema } from './InvitationsCreateManyBoardInputEnvelopeSchema';
import { InvitationsWhereUniqueInputSchema } from './InvitationsWhereUniqueInputSchema';

export const InvitationsUncheckedCreateNestedManyWithoutBoardInputSchema: z.ZodType<Prisma.InvitationsUncheckedCreateNestedManyWithoutBoardInput> = z.strictObject({
  create: z.union([ z.lazy(() => InvitationsCreateWithoutBoardInputSchema), z.lazy(() => InvitationsCreateWithoutBoardInputSchema).array(), z.lazy(() => InvitationsUncheckedCreateWithoutBoardInputSchema), z.lazy(() => InvitationsUncheckedCreateWithoutBoardInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InvitationsCreateOrConnectWithoutBoardInputSchema), z.lazy(() => InvitationsCreateOrConnectWithoutBoardInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InvitationsCreateManyBoardInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => InvitationsWhereUniqueInputSchema), z.lazy(() => InvitationsWhereUniqueInputSchema).array() ]).optional(),
});

export default InvitationsUncheckedCreateNestedManyWithoutBoardInputSchema;
