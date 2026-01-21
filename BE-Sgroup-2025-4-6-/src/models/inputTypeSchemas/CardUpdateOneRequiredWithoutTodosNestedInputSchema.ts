import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardCreateWithoutTodosInputSchema } from './CardCreateWithoutTodosInputSchema';
import { CardUncheckedCreateWithoutTodosInputSchema } from './CardUncheckedCreateWithoutTodosInputSchema';
import { CardCreateOrConnectWithoutTodosInputSchema } from './CardCreateOrConnectWithoutTodosInputSchema';
import { CardUpsertWithoutTodosInputSchema } from './CardUpsertWithoutTodosInputSchema';
import { CardWhereUniqueInputSchema } from './CardWhereUniqueInputSchema';
import { CardUpdateToOneWithWhereWithoutTodosInputSchema } from './CardUpdateToOneWithWhereWithoutTodosInputSchema';
import { CardUpdateWithoutTodosInputSchema } from './CardUpdateWithoutTodosInputSchema';
import { CardUncheckedUpdateWithoutTodosInputSchema } from './CardUncheckedUpdateWithoutTodosInputSchema';

export const CardUpdateOneRequiredWithoutTodosNestedInputSchema: z.ZodType<Prisma.CardUpdateOneRequiredWithoutTodosNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => CardCreateWithoutTodosInputSchema), z.lazy(() => CardUncheckedCreateWithoutTodosInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CardCreateOrConnectWithoutTodosInputSchema).optional(),
  upsert: z.lazy(() => CardUpsertWithoutTodosInputSchema).optional(),
  connect: z.lazy(() => CardWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CardUpdateToOneWithWhereWithoutTodosInputSchema), z.lazy(() => CardUpdateWithoutTodosInputSchema), z.lazy(() => CardUncheckedUpdateWithoutTodosInputSchema) ]).optional(),
});

export default CardUpdateOneRequiredWithoutTodosNestedInputSchema;
