import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardTodoCreateWithoutCardInputSchema } from './CardTodoCreateWithoutCardInputSchema';
import { CardTodoUncheckedCreateWithoutCardInputSchema } from './CardTodoUncheckedCreateWithoutCardInputSchema';
import { CardTodoCreateOrConnectWithoutCardInputSchema } from './CardTodoCreateOrConnectWithoutCardInputSchema';
import { CardTodoCreateManyCardInputEnvelopeSchema } from './CardTodoCreateManyCardInputEnvelopeSchema';
import { CardTodoWhereUniqueInputSchema } from './CardTodoWhereUniqueInputSchema';

export const CardTodoCreateNestedManyWithoutCardInputSchema: z.ZodType<Prisma.CardTodoCreateNestedManyWithoutCardInput> = z.strictObject({
  create: z.union([ z.lazy(() => CardTodoCreateWithoutCardInputSchema), z.lazy(() => CardTodoCreateWithoutCardInputSchema).array(), z.lazy(() => CardTodoUncheckedCreateWithoutCardInputSchema), z.lazy(() => CardTodoUncheckedCreateWithoutCardInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CardTodoCreateOrConnectWithoutCardInputSchema), z.lazy(() => CardTodoCreateOrConnectWithoutCardInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CardTodoCreateManyCardInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CardTodoWhereUniqueInputSchema), z.lazy(() => CardTodoWhereUniqueInputSchema).array() ]).optional(),
});

export default CardTodoCreateNestedManyWithoutCardInputSchema;
