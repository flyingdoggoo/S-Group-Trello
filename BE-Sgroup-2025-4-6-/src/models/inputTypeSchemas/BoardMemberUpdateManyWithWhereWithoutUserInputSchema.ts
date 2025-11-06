import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardMemberScalarWhereInputSchema } from './BoardMemberScalarWhereInputSchema';
import { BoardMemberUpdateManyMutationInputSchema } from './BoardMemberUpdateManyMutationInputSchema';
import { BoardMemberUncheckedUpdateManyWithoutUserInputSchema } from './BoardMemberUncheckedUpdateManyWithoutUserInputSchema';

export const BoardMemberUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.BoardMemberUpdateManyWithWhereWithoutUserInput> = z.strictObject({
  where: z.lazy(() => BoardMemberScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BoardMemberUpdateManyMutationInputSchema), z.lazy(() => BoardMemberUncheckedUpdateManyWithoutUserInputSchema) ]),
});

export default BoardMemberUpdateManyWithWhereWithoutUserInputSchema;
