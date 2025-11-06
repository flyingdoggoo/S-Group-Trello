import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardMemberCreateWithoutUserInputSchema } from './BoardMemberCreateWithoutUserInputSchema';
import { BoardMemberUncheckedCreateWithoutUserInputSchema } from './BoardMemberUncheckedCreateWithoutUserInputSchema';
import { BoardMemberCreateOrConnectWithoutUserInputSchema } from './BoardMemberCreateOrConnectWithoutUserInputSchema';
import { BoardMemberCreateManyUserInputEnvelopeSchema } from './BoardMemberCreateManyUserInputEnvelopeSchema';
import { BoardMemberWhereUniqueInputSchema } from './BoardMemberWhereUniqueInputSchema';

export const BoardMemberCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.BoardMemberCreateNestedManyWithoutUserInput> = z.strictObject({
  create: z.union([ z.lazy(() => BoardMemberCreateWithoutUserInputSchema), z.lazy(() => BoardMemberCreateWithoutUserInputSchema).array(), z.lazy(() => BoardMemberUncheckedCreateWithoutUserInputSchema), z.lazy(() => BoardMemberUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BoardMemberCreateOrConnectWithoutUserInputSchema), z.lazy(() => BoardMemberCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BoardMemberCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BoardMemberWhereUniqueInputSchema), z.lazy(() => BoardMemberWhereUniqueInputSchema).array() ]).optional(),
});

export default BoardMemberCreateNestedManyWithoutUserInputSchema;
