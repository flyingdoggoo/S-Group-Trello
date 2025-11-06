import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardMemberWhereUniqueInputSchema } from './BoardMemberWhereUniqueInputSchema';
import { BoardMemberCreateWithoutUserInputSchema } from './BoardMemberCreateWithoutUserInputSchema';
import { BoardMemberUncheckedCreateWithoutUserInputSchema } from './BoardMemberUncheckedCreateWithoutUserInputSchema';

export const BoardMemberCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.BoardMemberCreateOrConnectWithoutUserInput> = z.strictObject({
  where: z.lazy(() => BoardMemberWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BoardMemberCreateWithoutUserInputSchema), z.lazy(() => BoardMemberUncheckedCreateWithoutUserInputSchema) ]),
});

export default BoardMemberCreateOrConnectWithoutUserInputSchema;
