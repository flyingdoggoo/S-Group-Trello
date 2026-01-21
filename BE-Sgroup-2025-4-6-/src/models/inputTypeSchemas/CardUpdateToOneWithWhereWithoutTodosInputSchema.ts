import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardWhereInputSchema } from './CardWhereInputSchema';
import { CardUpdateWithoutTodosInputSchema } from './CardUpdateWithoutTodosInputSchema';
import { CardUncheckedUpdateWithoutTodosInputSchema } from './CardUncheckedUpdateWithoutTodosInputSchema';

export const CardUpdateToOneWithWhereWithoutTodosInputSchema: z.ZodType<Prisma.CardUpdateToOneWithWhereWithoutTodosInput> = z.strictObject({
  where: z.lazy(() => CardWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CardUpdateWithoutTodosInputSchema), z.lazy(() => CardUncheckedUpdateWithoutTodosInputSchema) ]),
});

export default CardUpdateToOneWithWhereWithoutTodosInputSchema;
