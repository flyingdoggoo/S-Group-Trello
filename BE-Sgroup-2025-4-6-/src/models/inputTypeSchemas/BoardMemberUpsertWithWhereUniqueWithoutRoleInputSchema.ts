import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardMemberWhereUniqueInputSchema } from './BoardMemberWhereUniqueInputSchema';
import { BoardMemberUpdateWithoutRoleInputSchema } from './BoardMemberUpdateWithoutRoleInputSchema';
import { BoardMemberUncheckedUpdateWithoutRoleInputSchema } from './BoardMemberUncheckedUpdateWithoutRoleInputSchema';
import { BoardMemberCreateWithoutRoleInputSchema } from './BoardMemberCreateWithoutRoleInputSchema';
import { BoardMemberUncheckedCreateWithoutRoleInputSchema } from './BoardMemberUncheckedCreateWithoutRoleInputSchema';

export const BoardMemberUpsertWithWhereUniqueWithoutRoleInputSchema: z.ZodType<Prisma.BoardMemberUpsertWithWhereUniqueWithoutRoleInput> = z.strictObject({
  where: z.lazy(() => BoardMemberWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BoardMemberUpdateWithoutRoleInputSchema), z.lazy(() => BoardMemberUncheckedUpdateWithoutRoleInputSchema) ]),
  create: z.union([ z.lazy(() => BoardMemberCreateWithoutRoleInputSchema), z.lazy(() => BoardMemberUncheckedCreateWithoutRoleInputSchema) ]),
});

export default BoardMemberUpsertWithWhereUniqueWithoutRoleInputSchema;
