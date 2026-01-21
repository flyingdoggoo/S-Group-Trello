import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardMemberWhereUniqueInputSchema } from './BoardMemberWhereUniqueInputSchema';
import { BoardMemberUpdateWithoutUserInputSchema } from './BoardMemberUpdateWithoutUserInputSchema';
import { BoardMemberUncheckedUpdateWithoutUserInputSchema } from './BoardMemberUncheckedUpdateWithoutUserInputSchema';

export const BoardMemberUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.BoardMemberUpdateWithWhereUniqueWithoutUserInput> = z.strictObject({
  where: z.lazy(() => BoardMemberWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BoardMemberUpdateWithoutUserInputSchema), z.lazy(() => BoardMemberUncheckedUpdateWithoutUserInputSchema) ]),
});

export default BoardMemberUpdateWithWhereUniqueWithoutUserInputSchema;
