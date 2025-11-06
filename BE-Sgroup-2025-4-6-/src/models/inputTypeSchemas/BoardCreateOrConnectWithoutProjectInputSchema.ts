import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardWhereUniqueInputSchema } from './BoardWhereUniqueInputSchema';
import { BoardCreateWithoutProjectInputSchema } from './BoardCreateWithoutProjectInputSchema';
import { BoardUncheckedCreateWithoutProjectInputSchema } from './BoardUncheckedCreateWithoutProjectInputSchema';

export const BoardCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.BoardCreateOrConnectWithoutProjectInput> = z.strictObject({
  where: z.lazy(() => BoardWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BoardCreateWithoutProjectInputSchema), z.lazy(() => BoardUncheckedCreateWithoutProjectInputSchema) ]),
});

export default BoardCreateOrConnectWithoutProjectInputSchema;
