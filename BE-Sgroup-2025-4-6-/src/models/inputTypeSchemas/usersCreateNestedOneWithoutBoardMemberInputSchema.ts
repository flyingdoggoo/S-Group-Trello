import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutBoardMemberInputSchema } from './usersCreateWithoutBoardMemberInputSchema';
import { usersUncheckedCreateWithoutBoardMemberInputSchema } from './usersUncheckedCreateWithoutBoardMemberInputSchema';
import { usersCreateOrConnectWithoutBoardMemberInputSchema } from './usersCreateOrConnectWithoutBoardMemberInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutBoardMemberInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutBoardMemberInput> = z.strictObject({
  create: z.union([ z.lazy(() => usersCreateWithoutBoardMemberInputSchema), z.lazy(() => usersUncheckedCreateWithoutBoardMemberInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutBoardMemberInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
});

export default usersCreateNestedOneWithoutBoardMemberInputSchema;
