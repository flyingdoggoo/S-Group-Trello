import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutBoardMemberInputSchema } from './usersCreateWithoutBoardMemberInputSchema';
import { usersUncheckedCreateWithoutBoardMemberInputSchema } from './usersUncheckedCreateWithoutBoardMemberInputSchema';

export const usersCreateOrConnectWithoutBoardMemberInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutBoardMemberInput> = z.strictObject({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => usersCreateWithoutBoardMemberInputSchema), z.lazy(() => usersUncheckedCreateWithoutBoardMemberInputSchema) ]),
});

export default usersCreateOrConnectWithoutBoardMemberInputSchema;
