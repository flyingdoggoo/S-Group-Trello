import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardCreateWithoutListInputSchema } from './BoardCreateWithoutListInputSchema';
import { BoardUncheckedCreateWithoutListInputSchema } from './BoardUncheckedCreateWithoutListInputSchema';
import { BoardCreateOrConnectWithoutListInputSchema } from './BoardCreateOrConnectWithoutListInputSchema';
import { BoardUpsertWithoutListInputSchema } from './BoardUpsertWithoutListInputSchema';
import { BoardWhereUniqueInputSchema } from './BoardWhereUniqueInputSchema';
import { BoardUpdateToOneWithWhereWithoutListInputSchema } from './BoardUpdateToOneWithWhereWithoutListInputSchema';
import { BoardUpdateWithoutListInputSchema } from './BoardUpdateWithoutListInputSchema';
import { BoardUncheckedUpdateWithoutListInputSchema } from './BoardUncheckedUpdateWithoutListInputSchema';

export const BoardUpdateOneRequiredWithoutListNestedInputSchema: z.ZodType<Prisma.BoardUpdateOneRequiredWithoutListNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => BoardCreateWithoutListInputSchema), z.lazy(() => BoardUncheckedCreateWithoutListInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => BoardCreateOrConnectWithoutListInputSchema).optional(),
  upsert: z.lazy(() => BoardUpsertWithoutListInputSchema).optional(),
  connect: z.lazy(() => BoardWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => BoardUpdateToOneWithWhereWithoutListInputSchema), z.lazy(() => BoardUpdateWithoutListInputSchema), z.lazy(() => BoardUncheckedUpdateWithoutListInputSchema) ]).optional(),
});

export default BoardUpdateOneRequiredWithoutListNestedInputSchema;
