import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardMemberWhereUniqueInputSchema } from './BoardMemberWhereUniqueInputSchema';
import { BoardMemberCreateWithoutRoleInputSchema } from './BoardMemberCreateWithoutRoleInputSchema';
import { BoardMemberUncheckedCreateWithoutRoleInputSchema } from './BoardMemberUncheckedCreateWithoutRoleInputSchema';

export const BoardMemberCreateOrConnectWithoutRoleInputSchema: z.ZodType<Prisma.BoardMemberCreateOrConnectWithoutRoleInput> = z.strictObject({
  where: z.lazy(() => BoardMemberWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BoardMemberCreateWithoutRoleInputSchema), z.lazy(() => BoardMemberUncheckedCreateWithoutRoleInputSchema) ]),
});

export default BoardMemberCreateOrConnectWithoutRoleInputSchema;
