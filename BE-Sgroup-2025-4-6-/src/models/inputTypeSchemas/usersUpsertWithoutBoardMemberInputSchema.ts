import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutBoardMemberInputSchema } from './usersUpdateWithoutBoardMemberInputSchema';
import { usersUncheckedUpdateWithoutBoardMemberInputSchema } from './usersUncheckedUpdateWithoutBoardMemberInputSchema';
import { usersCreateWithoutBoardMemberInputSchema } from './usersCreateWithoutBoardMemberInputSchema';
import { usersUncheckedCreateWithoutBoardMemberInputSchema } from './usersUncheckedCreateWithoutBoardMemberInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutBoardMemberInputSchema: z.ZodType<Prisma.usersUpsertWithoutBoardMemberInput> = z.strictObject({
  update: z.union([ z.lazy(() => usersUpdateWithoutBoardMemberInputSchema), z.lazy(() => usersUncheckedUpdateWithoutBoardMemberInputSchema) ]),
  create: z.union([ z.lazy(() => usersCreateWithoutBoardMemberInputSchema), z.lazy(() => usersUncheckedCreateWithoutBoardMemberInputSchema) ]),
  where: z.lazy(() => usersWhereInputSchema).optional(),
});

export default usersUpsertWithoutBoardMemberInputSchema;
