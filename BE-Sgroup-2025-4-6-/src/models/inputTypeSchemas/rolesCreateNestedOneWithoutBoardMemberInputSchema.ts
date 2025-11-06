import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { rolesCreateWithoutBoardMemberInputSchema } from './rolesCreateWithoutBoardMemberInputSchema';
import { rolesUncheckedCreateWithoutBoardMemberInputSchema } from './rolesUncheckedCreateWithoutBoardMemberInputSchema';
import { rolesCreateOrConnectWithoutBoardMemberInputSchema } from './rolesCreateOrConnectWithoutBoardMemberInputSchema';
import { rolesWhereUniqueInputSchema } from './rolesWhereUniqueInputSchema';

export const rolesCreateNestedOneWithoutBoardMemberInputSchema: z.ZodType<Prisma.rolesCreateNestedOneWithoutBoardMemberInput> = z.strictObject({
  create: z.union([ z.lazy(() => rolesCreateWithoutBoardMemberInputSchema), z.lazy(() => rolesUncheckedCreateWithoutBoardMemberInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => rolesCreateOrConnectWithoutBoardMemberInputSchema).optional(),
  connect: z.lazy(() => rolesWhereUniqueInputSchema).optional(),
});

export default rolesCreateNestedOneWithoutBoardMemberInputSchema;
