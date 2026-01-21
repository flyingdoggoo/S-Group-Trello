import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardUpdateWithoutTodosInputSchema } from './CardUpdateWithoutTodosInputSchema';
import { CardUncheckedUpdateWithoutTodosInputSchema } from './CardUncheckedUpdateWithoutTodosInputSchema';
import { CardCreateWithoutTodosInputSchema } from './CardCreateWithoutTodosInputSchema';
import { CardUncheckedCreateWithoutTodosInputSchema } from './CardUncheckedCreateWithoutTodosInputSchema';
import { CardWhereInputSchema } from './CardWhereInputSchema';

export const CardUpsertWithoutTodosInputSchema: z.ZodType<Prisma.CardUpsertWithoutTodosInput> = z.strictObject({
  update: z.union([ z.lazy(() => CardUpdateWithoutTodosInputSchema), z.lazy(() => CardUncheckedUpdateWithoutTodosInputSchema) ]),
  create: z.union([ z.lazy(() => CardCreateWithoutTodosInputSchema), z.lazy(() => CardUncheckedCreateWithoutTodosInputSchema) ]),
  where: z.lazy(() => CardWhereInputSchema).optional(),
});

export default CardUpsertWithoutTodosInputSchema;
