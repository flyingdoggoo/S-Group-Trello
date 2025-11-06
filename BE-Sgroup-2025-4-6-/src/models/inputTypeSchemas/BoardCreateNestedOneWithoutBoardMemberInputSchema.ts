import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardCreateWithoutBoardMemberInputSchema } from './BoardCreateWithoutBoardMemberInputSchema';
import { BoardUncheckedCreateWithoutBoardMemberInputSchema } from './BoardUncheckedCreateWithoutBoardMemberInputSchema';
import { BoardCreateOrConnectWithoutBoardMemberInputSchema } from './BoardCreateOrConnectWithoutBoardMemberInputSchema';
import { BoardWhereUniqueInputSchema } from './BoardWhereUniqueInputSchema';

export const BoardCreateNestedOneWithoutBoardMemberInputSchema: z.ZodType<Prisma.BoardCreateNestedOneWithoutBoardMemberInput> = z.strictObject({
  create: z.union([ z.lazy(() => BoardCreateWithoutBoardMemberInputSchema), z.lazy(() => BoardUncheckedCreateWithoutBoardMemberInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BoardCreateOrConnectWithoutBoardMemberInputSchema).optional(),
  connect: z.lazy(() => BoardWhereUniqueInputSchema).optional(),
});

export default BoardCreateNestedOneWithoutBoardMemberInputSchema;
