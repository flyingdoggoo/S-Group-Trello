import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardMemberCreateWithoutRoleInputSchema } from './BoardMemberCreateWithoutRoleInputSchema';
import { BoardMemberUncheckedCreateWithoutRoleInputSchema } from './BoardMemberUncheckedCreateWithoutRoleInputSchema';
import { BoardMemberCreateOrConnectWithoutRoleInputSchema } from './BoardMemberCreateOrConnectWithoutRoleInputSchema';
import { BoardMemberCreateManyRoleInputEnvelopeSchema } from './BoardMemberCreateManyRoleInputEnvelopeSchema';
import { BoardMemberWhereUniqueInputSchema } from './BoardMemberWhereUniqueInputSchema';

export const BoardMemberCreateNestedManyWithoutRoleInputSchema: z.ZodType<Prisma.BoardMemberCreateNestedManyWithoutRoleInput> = z.strictObject({
  create: z.union([ z.lazy(() => BoardMemberCreateWithoutRoleInputSchema), z.lazy(() => BoardMemberCreateWithoutRoleInputSchema).array(), z.lazy(() => BoardMemberUncheckedCreateWithoutRoleInputSchema), z.lazy(() => BoardMemberUncheckedCreateWithoutRoleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BoardMemberCreateOrConnectWithoutRoleInputSchema), z.lazy(() => BoardMemberCreateOrConnectWithoutRoleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BoardMemberCreateManyRoleInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BoardMemberWhereUniqueInputSchema), z.lazy(() => BoardMemberWhereUniqueInputSchema).array() ]).optional(),
});

export default BoardMemberCreateNestedManyWithoutRoleInputSchema;
