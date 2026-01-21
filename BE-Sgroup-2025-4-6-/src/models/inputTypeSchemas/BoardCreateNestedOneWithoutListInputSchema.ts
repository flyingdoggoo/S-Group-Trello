import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardCreateWithoutListInputSchema } from './BoardCreateWithoutListInputSchema';
import { BoardUncheckedCreateWithoutListInputSchema } from './BoardUncheckedCreateWithoutListInputSchema';
import { BoardCreateOrConnectWithoutListInputSchema } from './BoardCreateOrConnectWithoutListInputSchema';
import { BoardWhereUniqueInputSchema } from './BoardWhereUniqueInputSchema';

export const BoardCreateNestedOneWithoutListInputSchema: z.ZodType<Prisma.BoardCreateNestedOneWithoutListInput> = z.strictObject({
  create: z.union([ z.lazy(() => BoardCreateWithoutListInputSchema), z.lazy(() => BoardUncheckedCreateWithoutListInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BoardCreateOrConnectWithoutListInputSchema).optional(),
  connect: z.lazy(() => BoardWhereUniqueInputSchema).optional(),
});

export default BoardCreateNestedOneWithoutListInputSchema;
