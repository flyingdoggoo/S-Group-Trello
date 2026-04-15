import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutActionsInputSchema } from './usersCreateWithoutActionsInputSchema';
import { usersUncheckedCreateWithoutActionsInputSchema } from './usersUncheckedCreateWithoutActionsInputSchema';
import { usersCreateOrConnectWithoutActionsInputSchema } from './usersCreateOrConnectWithoutActionsInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutActionsInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutActionsInput> = z.strictObject({
  create: z.union([ z.lazy(() => usersCreateWithoutActionsInputSchema), z.lazy(() => usersUncheckedCreateWithoutActionsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutActionsInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
});

export default usersCreateNestedOneWithoutActionsInputSchema;
