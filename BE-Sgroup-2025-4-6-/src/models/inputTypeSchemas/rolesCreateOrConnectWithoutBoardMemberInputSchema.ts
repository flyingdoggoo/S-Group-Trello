import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { rolesWhereUniqueInputSchema } from './rolesWhereUniqueInputSchema';
import { rolesCreateWithoutBoardMemberInputSchema } from './rolesCreateWithoutBoardMemberInputSchema';
import { rolesUncheckedCreateWithoutBoardMemberInputSchema } from './rolesUncheckedCreateWithoutBoardMemberInputSchema';

export const rolesCreateOrConnectWithoutBoardMemberInputSchema: z.ZodType<Prisma.rolesCreateOrConnectWithoutBoardMemberInput> = z.strictObject({
  where: z.lazy(() => rolesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => rolesCreateWithoutBoardMemberInputSchema), z.lazy(() => rolesUncheckedCreateWithoutBoardMemberInputSchema) ]),
});

export default rolesCreateOrConnectWithoutBoardMemberInputSchema;
