import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardWhereUniqueInputSchema } from './BoardWhereUniqueInputSchema';
import { BoardCreateWithoutBoardMemberInputSchema } from './BoardCreateWithoutBoardMemberInputSchema';
import { BoardUncheckedCreateWithoutBoardMemberInputSchema } from './BoardUncheckedCreateWithoutBoardMemberInputSchema';

export const BoardCreateOrConnectWithoutBoardMemberInputSchema: z.ZodType<Prisma.BoardCreateOrConnectWithoutBoardMemberInput> = z.strictObject({
  where: z.lazy(() => BoardWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BoardCreateWithoutBoardMemberInputSchema), z.lazy(() => BoardUncheckedCreateWithoutBoardMemberInputSchema) ]),
});

export default BoardCreateOrConnectWithoutBoardMemberInputSchema;
