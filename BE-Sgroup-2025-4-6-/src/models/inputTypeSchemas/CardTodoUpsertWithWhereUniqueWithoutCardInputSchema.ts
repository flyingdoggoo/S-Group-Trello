import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardTodoWhereUniqueInputSchema } from './CardTodoWhereUniqueInputSchema';
import { CardTodoUpdateWithoutCardInputSchema } from './CardTodoUpdateWithoutCardInputSchema';
import { CardTodoUncheckedUpdateWithoutCardInputSchema } from './CardTodoUncheckedUpdateWithoutCardInputSchema';
import { CardTodoCreateWithoutCardInputSchema } from './CardTodoCreateWithoutCardInputSchema';
import { CardTodoUncheckedCreateWithoutCardInputSchema } from './CardTodoUncheckedCreateWithoutCardInputSchema';

export const CardTodoUpsertWithWhereUniqueWithoutCardInputSchema: z.ZodType<Prisma.CardTodoUpsertWithWhereUniqueWithoutCardInput> = z.strictObject({
  where: z.lazy(() => CardTodoWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CardTodoUpdateWithoutCardInputSchema), z.lazy(() => CardTodoUncheckedUpdateWithoutCardInputSchema) ]),
  create: z.union([ z.lazy(() => CardTodoCreateWithoutCardInputSchema), z.lazy(() => CardTodoUncheckedCreateWithoutCardInputSchema) ]),
});

export default CardTodoUpsertWithWhereUniqueWithoutCardInputSchema;
