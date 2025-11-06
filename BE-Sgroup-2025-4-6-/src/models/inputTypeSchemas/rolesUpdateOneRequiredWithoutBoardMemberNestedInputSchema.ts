import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { rolesCreateWithoutBoardMemberInputSchema } from './rolesCreateWithoutBoardMemberInputSchema';
import { rolesUncheckedCreateWithoutBoardMemberInputSchema } from './rolesUncheckedCreateWithoutBoardMemberInputSchema';
import { rolesCreateOrConnectWithoutBoardMemberInputSchema } from './rolesCreateOrConnectWithoutBoardMemberInputSchema';
import { rolesUpsertWithoutBoardMemberInputSchema } from './rolesUpsertWithoutBoardMemberInputSchema';
import { rolesWhereUniqueInputSchema } from './rolesWhereUniqueInputSchema';
import { rolesUpdateToOneWithWhereWithoutBoardMemberInputSchema } from './rolesUpdateToOneWithWhereWithoutBoardMemberInputSchema';
import { rolesUpdateWithoutBoardMemberInputSchema } from './rolesUpdateWithoutBoardMemberInputSchema';
import { rolesUncheckedUpdateWithoutBoardMemberInputSchema } from './rolesUncheckedUpdateWithoutBoardMemberInputSchema';

export const rolesUpdateOneRequiredWithoutBoardMemberNestedInputSchema: z.ZodType<Prisma.rolesUpdateOneRequiredWithoutBoardMemberNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => rolesCreateWithoutBoardMemberInputSchema), z.lazy(() => rolesUncheckedCreateWithoutBoardMemberInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => rolesCreateOrConnectWithoutBoardMemberInputSchema).optional(),
  upsert: z.lazy(() => rolesUpsertWithoutBoardMemberInputSchema).optional(),
  connect: z.lazy(() => rolesWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => rolesUpdateToOneWithWhereWithoutBoardMemberInputSchema), z.lazy(() => rolesUpdateWithoutBoardMemberInputSchema), z.lazy(() => rolesUncheckedUpdateWithoutBoardMemberInputSchema) ]).optional(),
});

export default rolesUpdateOneRequiredWithoutBoardMemberNestedInputSchema;
