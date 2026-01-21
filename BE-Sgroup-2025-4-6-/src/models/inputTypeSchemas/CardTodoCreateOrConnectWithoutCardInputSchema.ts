import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardTodoWhereUniqueInputSchema } from './CardTodoWhereUniqueInputSchema';
import { CardTodoCreateWithoutCardInputSchema } from './CardTodoCreateWithoutCardInputSchema';
import { CardTodoUncheckedCreateWithoutCardInputSchema } from './CardTodoUncheckedCreateWithoutCardInputSchema';

export const CardTodoCreateOrConnectWithoutCardInputSchema: z.ZodType<Prisma.CardTodoCreateOrConnectWithoutCardInput> = z.strictObject({
  where: z.lazy(() => CardTodoWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CardTodoCreateWithoutCardInputSchema), z.lazy(() => CardTodoUncheckedCreateWithoutCardInputSchema) ]),
});

export default CardTodoCreateOrConnectWithoutCardInputSchema;
