import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardMemberScalarWhereInputSchema } from './BoardMemberScalarWhereInputSchema';
import { BoardMemberUpdateManyMutationInputSchema } from './BoardMemberUpdateManyMutationInputSchema';
import { BoardMemberUncheckedUpdateManyWithoutRoleInputSchema } from './BoardMemberUncheckedUpdateManyWithoutRoleInputSchema';

export const BoardMemberUpdateManyWithWhereWithoutRoleInputSchema: z.ZodType<Prisma.BoardMemberUpdateManyWithWhereWithoutRoleInput> = z.strictObject({
  where: z.lazy(() => BoardMemberScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BoardMemberUpdateManyMutationInputSchema), z.lazy(() => BoardMemberUncheckedUpdateManyWithoutRoleInputSchema) ]),
});

export default BoardMemberUpdateManyWithWhereWithoutRoleInputSchema;
