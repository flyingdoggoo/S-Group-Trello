import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardTodoScalarWhereInputSchema } from './CardTodoScalarWhereInputSchema';
import { CardTodoUpdateManyMutationInputSchema } from './CardTodoUpdateManyMutationInputSchema';
import { CardTodoUncheckedUpdateManyWithoutCardInputSchema } from './CardTodoUncheckedUpdateManyWithoutCardInputSchema';

export const CardTodoUpdateManyWithWhereWithoutCardInputSchema: z.ZodType<Prisma.CardTodoUpdateManyWithWhereWithoutCardInput> = z.strictObject({
  where: z.lazy(() => CardTodoScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CardTodoUpdateManyMutationInputSchema), z.lazy(() => CardTodoUncheckedUpdateManyWithoutCardInputSchema) ]),
});

export default CardTodoUpdateManyWithWhereWithoutCardInputSchema;
