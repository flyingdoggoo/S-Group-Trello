import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardTodoCreateWithoutCardInputSchema } from './CardTodoCreateWithoutCardInputSchema';
import { CardTodoUncheckedCreateWithoutCardInputSchema } from './CardTodoUncheckedCreateWithoutCardInputSchema';
import { CardTodoCreateOrConnectWithoutCardInputSchema } from './CardTodoCreateOrConnectWithoutCardInputSchema';
import { CardTodoUpsertWithWhereUniqueWithoutCardInputSchema } from './CardTodoUpsertWithWhereUniqueWithoutCardInputSchema';
import { CardTodoCreateManyCardInputEnvelopeSchema } from './CardTodoCreateManyCardInputEnvelopeSchema';
import { CardTodoWhereUniqueInputSchema } from './CardTodoWhereUniqueInputSchema';
import { CardTodoUpdateWithWhereUniqueWithoutCardInputSchema } from './CardTodoUpdateWithWhereUniqueWithoutCardInputSchema';
import { CardTodoUpdateManyWithWhereWithoutCardInputSchema } from './CardTodoUpdateManyWithWhereWithoutCardInputSchema';
import { CardTodoScalarWhereInputSchema } from './CardTodoScalarWhereInputSchema';

export const CardTodoUncheckedUpdateManyWithoutCardNestedInputSchema: z.ZodType<Prisma.CardTodoUncheckedUpdateManyWithoutCardNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => CardTodoCreateWithoutCardInputSchema), z.lazy(() => CardTodoCreateWithoutCardInputSchema).array(), z.lazy(() => CardTodoUncheckedCreateWithoutCardInputSchema), z.lazy(() => CardTodoUncheckedCreateWithoutCardInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CardTodoCreateOrConnectWithoutCardInputSchema), z.lazy(() => CardTodoCreateOrConnectWithoutCardInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CardTodoUpsertWithWhereUniqueWithoutCardInputSchema), z.lazy(() => CardTodoUpsertWithWhereUniqueWithoutCardInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CardTodoCreateManyCardInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CardTodoWhereUniqueInputSchema), z.lazy(() => CardTodoWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CardTodoWhereUniqueInputSchema), z.lazy(() => CardTodoWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CardTodoWhereUniqueInputSchema), z.lazy(() => CardTodoWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CardTodoWhereUniqueInputSchema), z.lazy(() => CardTodoWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CardTodoUpdateWithWhereUniqueWithoutCardInputSchema), z.lazy(() => CardTodoUpdateWithWhereUniqueWithoutCardInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CardTodoUpdateManyWithWhereWithoutCardInputSchema), z.lazy(() => CardTodoUpdateManyWithWhereWithoutCardInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CardTodoScalarWhereInputSchema), z.lazy(() => CardTodoScalarWhereInputSchema).array() ]).optional(),
});

export default CardTodoUncheckedUpdateManyWithoutCardNestedInputSchema;
