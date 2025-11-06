import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutBoardMemberInputSchema } from './usersUpdateWithoutBoardMemberInputSchema';
import { usersUncheckedUpdateWithoutBoardMemberInputSchema } from './usersUncheckedUpdateWithoutBoardMemberInputSchema';

export const usersUpdateToOneWithWhereWithoutBoardMemberInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutBoardMemberInput> = z.strictObject({
  where: z.lazy(() => usersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => usersUpdateWithoutBoardMemberInputSchema), z.lazy(() => usersUncheckedUpdateWithoutBoardMemberInputSchema) ]),
});

export default usersUpdateToOneWithWhereWithoutBoardMemberInputSchema;
