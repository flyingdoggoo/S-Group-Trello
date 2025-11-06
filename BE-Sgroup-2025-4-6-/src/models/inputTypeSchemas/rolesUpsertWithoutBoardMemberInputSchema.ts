import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { rolesUpdateWithoutBoardMemberInputSchema } from './rolesUpdateWithoutBoardMemberInputSchema';
import { rolesUncheckedUpdateWithoutBoardMemberInputSchema } from './rolesUncheckedUpdateWithoutBoardMemberInputSchema';
import { rolesCreateWithoutBoardMemberInputSchema } from './rolesCreateWithoutBoardMemberInputSchema';
import { rolesUncheckedCreateWithoutBoardMemberInputSchema } from './rolesUncheckedCreateWithoutBoardMemberInputSchema';
import { rolesWhereInputSchema } from './rolesWhereInputSchema';

export const rolesUpsertWithoutBoardMemberInputSchema: z.ZodType<Prisma.rolesUpsertWithoutBoardMemberInput> = z.strictObject({
  update: z.union([ z.lazy(() => rolesUpdateWithoutBoardMemberInputSchema), z.lazy(() => rolesUncheckedUpdateWithoutBoardMemberInputSchema) ]),
  create: z.union([ z.lazy(() => rolesCreateWithoutBoardMemberInputSchema), z.lazy(() => rolesUncheckedCreateWithoutBoardMemberInputSchema) ]),
  where: z.lazy(() => rolesWhereInputSchema).optional(),
});

export default rolesUpsertWithoutBoardMemberInputSchema;
