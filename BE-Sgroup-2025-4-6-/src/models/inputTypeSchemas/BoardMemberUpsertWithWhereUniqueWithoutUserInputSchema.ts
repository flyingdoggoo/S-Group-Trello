import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardMemberWhereUniqueInputSchema } from './BoardMemberWhereUniqueInputSchema';
import { BoardMemberUpdateWithoutUserInputSchema } from './BoardMemberUpdateWithoutUserInputSchema';
import { BoardMemberUncheckedUpdateWithoutUserInputSchema } from './BoardMemberUncheckedUpdateWithoutUserInputSchema';
import { BoardMemberCreateWithoutUserInputSchema } from './BoardMemberCreateWithoutUserInputSchema';
import { BoardMemberUncheckedCreateWithoutUserInputSchema } from './BoardMemberUncheckedCreateWithoutUserInputSchema';

export const BoardMemberUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.BoardMemberUpsertWithWhereUniqueWithoutUserInput> = z.strictObject({
  where: z.lazy(() => BoardMemberWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BoardMemberUpdateWithoutUserInputSchema), z.lazy(() => BoardMemberUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => BoardMemberCreateWithoutUserInputSchema), z.lazy(() => BoardMemberUncheckedCreateWithoutUserInputSchema) ]),
});

export default BoardMemberUpsertWithWhereUniqueWithoutUserInputSchema;
