import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardCreateWithoutBoardMemberInputSchema } from './BoardCreateWithoutBoardMemberInputSchema';
import { BoardUncheckedCreateWithoutBoardMemberInputSchema } from './BoardUncheckedCreateWithoutBoardMemberInputSchema';
import { BoardCreateOrConnectWithoutBoardMemberInputSchema } from './BoardCreateOrConnectWithoutBoardMemberInputSchema';
import { BoardUpsertWithoutBoardMemberInputSchema } from './BoardUpsertWithoutBoardMemberInputSchema';
import { BoardWhereUniqueInputSchema } from './BoardWhereUniqueInputSchema';
import { BoardUpdateToOneWithWhereWithoutBoardMemberInputSchema } from './BoardUpdateToOneWithWhereWithoutBoardMemberInputSchema';
import { BoardUpdateWithoutBoardMemberInputSchema } from './BoardUpdateWithoutBoardMemberInputSchema';
import { BoardUncheckedUpdateWithoutBoardMemberInputSchema } from './BoardUncheckedUpdateWithoutBoardMemberInputSchema';

export const BoardUpdateOneRequiredWithoutBoardMemberNestedInputSchema: z.ZodType<Prisma.BoardUpdateOneRequiredWithoutBoardMemberNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => BoardCreateWithoutBoardMemberInputSchema), z.lazy(() => BoardUncheckedCreateWithoutBoardMemberInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BoardCreateOrConnectWithoutBoardMemberInputSchema).optional(),
  upsert: z.lazy(() => BoardUpsertWithoutBoardMemberInputSchema).optional(),
  connect: z.lazy(() => BoardWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BoardUpdateToOneWithWhereWithoutBoardMemberInputSchema), z.lazy(() => BoardUpdateWithoutBoardMemberInputSchema), z.lazy(() => BoardUncheckedUpdateWithoutBoardMemberInputSchema) ]).optional(),
});

export default BoardUpdateOneRequiredWithoutBoardMemberNestedInputSchema;
