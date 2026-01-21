import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardTodoWhereUniqueInputSchema } from './CardTodoWhereUniqueInputSchema';
import { CardTodoUpdateWithoutCardInputSchema } from './CardTodoUpdateWithoutCardInputSchema';
import { CardTodoUncheckedUpdateWithoutCardInputSchema } from './CardTodoUncheckedUpdateWithoutCardInputSchema';

export const CardTodoUpdateWithWhereUniqueWithoutCardInputSchema: z.ZodType<Prisma.CardTodoUpdateWithWhereUniqueWithoutCardInput> = z.strictObject({
  where: z.lazy(() => CardTodoWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CardTodoUpdateWithoutCardInputSchema), z.lazy(() => CardTodoUncheckedUpdateWithoutCardInputSchema) ]),
});

export default CardTodoUpdateWithWhereUniqueWithoutCardInputSchema;
