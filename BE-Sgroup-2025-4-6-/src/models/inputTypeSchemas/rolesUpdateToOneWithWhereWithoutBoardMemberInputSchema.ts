import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { rolesWhereInputSchema } from './rolesWhereInputSchema';
import { rolesUpdateWithoutBoardMemberInputSchema } from './rolesUpdateWithoutBoardMemberInputSchema';
import { rolesUncheckedUpdateWithoutBoardMemberInputSchema } from './rolesUncheckedUpdateWithoutBoardMemberInputSchema';

export const rolesUpdateToOneWithWhereWithoutBoardMemberInputSchema: z.ZodType<Prisma.rolesUpdateToOneWithWhereWithoutBoardMemberInput> = z.strictObject({
  where: z.lazy(() => rolesWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => rolesUpdateWithoutBoardMemberInputSchema), z.lazy(() => rolesUncheckedUpdateWithoutBoardMemberInputSchema) ]),
});

export default rolesUpdateToOneWithWhereWithoutBoardMemberInputSchema;
