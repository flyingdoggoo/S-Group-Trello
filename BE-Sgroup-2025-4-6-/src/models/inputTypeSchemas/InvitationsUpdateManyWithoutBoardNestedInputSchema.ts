import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationsCreateWithoutBoardInputSchema } from './InvitationsCreateWithoutBoardInputSchema';
import { InvitationsUncheckedCreateWithoutBoardInputSchema } from './InvitationsUncheckedCreateWithoutBoardInputSchema';
import { InvitationsCreateOrConnectWithoutBoardInputSchema } from './InvitationsCreateOrConnectWithoutBoardInputSchema';
import { InvitationsUpsertWithWhereUniqueWithoutBoardInputSchema } from './InvitationsUpsertWithWhereUniqueWithoutBoardInputSchema';
import { InvitationsCreateManyBoardInputEnvelopeSchema } from './InvitationsCreateManyBoardInputEnvelopeSchema';
import { InvitationsWhereUniqueInputSchema } from './InvitationsWhereUniqueInputSchema';
import { InvitationsUpdateWithWhereUniqueWithoutBoardInputSchema } from './InvitationsUpdateWithWhereUniqueWithoutBoardInputSchema';
import { InvitationsUpdateManyWithWhereWithoutBoardInputSchema } from './InvitationsUpdateManyWithWhereWithoutBoardInputSchema';
import { InvitationsScalarWhereInputSchema } from './InvitationsScalarWhereInputSchema';

export const InvitationsUpdateManyWithoutBoardNestedInputSchema: z.ZodType<Prisma.InvitationsUpdateManyWithoutBoardNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => InvitationsCreateWithoutBoardInputSchema), z.lazy(() => InvitationsCreateWithoutBoardInputSchema).array(), z.lazy(() => InvitationsUncheckedCreateWithoutBoardInputSchema), z.lazy(() => InvitationsUncheckedCreateWithoutBoardInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => InvitationsCreateOrConnectWithoutBoardInputSchema), z.lazy(() => InvitationsCreateOrConnectWithoutBoardInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => InvitationsUpsertWithWhereUniqueWithoutBoardInputSchema), z.lazy(() => InvitationsUpsertWithWhereUniqueWithoutBoardInputSchema).array() ]).optional(),
  createMany: z.lazy(() => InvitationsCreateManyBoardInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => InvitationsWhereUniqueInputSchema), z.lazy(() => InvitationsWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => InvitationsWhereUniqueInputSchema), z.lazy(() => InvitationsWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => InvitationsWhereUniqueInputSchema), z.lazy(() => InvitationsWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => InvitationsWhereUniqueInputSchema), z.lazy(() => InvitationsWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => InvitationsUpdateWithWhereUniqueWithoutBoardInputSchema), z.lazy(() => InvitationsUpdateWithWhereUniqueWithoutBoardInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => InvitationsUpdateManyWithWhereWithoutBoardInputSchema), z.lazy(() => InvitationsUpdateManyWithWhereWithoutBoardInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => InvitationsScalarWhereInputSchema), z.lazy(() => InvitationsScalarWhereInputSchema).array() ]).optional(),
});

export default InvitationsUpdateManyWithoutBoardNestedInputSchema;
