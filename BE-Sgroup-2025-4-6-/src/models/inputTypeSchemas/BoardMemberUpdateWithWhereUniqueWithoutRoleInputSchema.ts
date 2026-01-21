import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardMemberWhereUniqueInputSchema } from './BoardMemberWhereUniqueInputSchema';
import { BoardMemberUpdateWithoutRoleInputSchema } from './BoardMemberUpdateWithoutRoleInputSchema';
import { BoardMemberUncheckedUpdateWithoutRoleInputSchema } from './BoardMemberUncheckedUpdateWithoutRoleInputSchema';

export const BoardMemberUpdateWithWhereUniqueWithoutRoleInputSchema: z.ZodType<Prisma.BoardMemberUpdateWithWhereUniqueWithoutRoleInput> = z.strictObject({
  where: z.lazy(() => BoardMemberWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BoardMemberUpdateWithoutRoleInputSchema), z.lazy(() => BoardMemberUncheckedUpdateWithoutRoleInputSchema) ]),
});

export default BoardMemberUpdateWithWhereUniqueWithoutRoleInputSchema;
