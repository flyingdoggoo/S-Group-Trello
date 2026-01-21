import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardCreateWithoutTodosInputSchema } from './CardCreateWithoutTodosInputSchema';
import { CardUncheckedCreateWithoutTodosInputSchema } from './CardUncheckedCreateWithoutTodosInputSchema';
import { CardCreateOrConnectWithoutTodosInputSchema } from './CardCreateOrConnectWithoutTodosInputSchema';
import { CardWhereUniqueInputSchema } from './CardWhereUniqueInputSchema';

export const CardCreateNestedOneWithoutTodosInputSchema: z.ZodType<Prisma.CardCreateNestedOneWithoutTodosInput> = z.strictObject({
  create: z.union([ z.lazy(() => CardCreateWithoutTodosInputSchema), z.lazy(() => CardUncheckedCreateWithoutTodosInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CardCreateOrConnectWithoutTodosInputSchema).optional(),
  connect: z.lazy(() => CardWhereUniqueInputSchema).optional(),
});

export default CardCreateNestedOneWithoutTodosInputSchema;
