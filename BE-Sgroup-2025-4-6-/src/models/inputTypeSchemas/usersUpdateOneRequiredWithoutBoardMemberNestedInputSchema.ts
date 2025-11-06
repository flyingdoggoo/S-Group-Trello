import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutBoardMemberInputSchema } from './usersCreateWithoutBoardMemberInputSchema';
import { usersUncheckedCreateWithoutBoardMemberInputSchema } from './usersUncheckedCreateWithoutBoardMemberInputSchema';
import { usersCreateOrConnectWithoutBoardMemberInputSchema } from './usersCreateOrConnectWithoutBoardMemberInputSchema';
import { usersUpsertWithoutBoardMemberInputSchema } from './usersUpsertWithoutBoardMemberInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutBoardMemberInputSchema } from './usersUpdateToOneWithWhereWithoutBoardMemberInputSchema';
import { usersUpdateWithoutBoardMemberInputSchema } from './usersUpdateWithoutBoardMemberInputSchema';
import { usersUncheckedUpdateWithoutBoardMemberInputSchema } from './usersUncheckedUpdateWithoutBoardMemberInputSchema';

export const usersUpdateOneRequiredWithoutBoardMemberNestedInputSchema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutBoardMemberNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => usersCreateWithoutBoardMemberInputSchema), z.lazy(() => usersUncheckedCreateWithoutBoardMemberInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutBoardMemberInputSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutBoardMemberInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => usersUpdateToOneWithWhereWithoutBoardMemberInputSchema), z.lazy(() => usersUpdateWithoutBoardMemberInputSchema), z.lazy(() => usersUncheckedUpdateWithoutBoardMemberInputSchema) ]).optional(),
});

export default usersUpdateOneRequiredWithoutBoardMemberNestedInputSchema;
