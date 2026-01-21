import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardWhereUniqueInputSchema } from './BoardWhereUniqueInputSchema';
import { BoardCreateWithoutListInputSchema } from './BoardCreateWithoutListInputSchema';
import { BoardUncheckedCreateWithoutListInputSchema } from './BoardUncheckedCreateWithoutListInputSchema';

export const BoardCreateOrConnectWithoutListInputSchema: z.ZodType<Prisma.BoardCreateOrConnectWithoutListInput> = z.strictObject({
  where: z.lazy(() => BoardWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BoardCreateWithoutListInputSchema), z.lazy(() => BoardUncheckedCreateWithoutListInputSchema) ]),
});

export default BoardCreateOrConnectWithoutListInputSchema;
