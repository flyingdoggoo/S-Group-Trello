import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardWhereUniqueInputSchema } from './CardWhereUniqueInputSchema';
import { CardCreateWithoutTodosInputSchema } from './CardCreateWithoutTodosInputSchema';
import { CardUncheckedCreateWithoutTodosInputSchema } from './CardUncheckedCreateWithoutTodosInputSchema';

export const CardCreateOrConnectWithoutTodosInputSchema: z.ZodType<Prisma.CardCreateOrConnectWithoutTodosInput> = z.strictObject({
  where: z.lazy(() => CardWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CardCreateWithoutTodosInputSchema), z.lazy(() => CardUncheckedCreateWithoutTodosInputSchema) ]),
});

export default CardCreateOrConnectWithoutTodosInputSchema;
