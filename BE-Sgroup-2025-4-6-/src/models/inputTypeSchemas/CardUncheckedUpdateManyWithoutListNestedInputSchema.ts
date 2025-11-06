import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardCreateWithoutListInputSchema } from './CardCreateWithoutListInputSchema';
import { CardUncheckedCreateWithoutListInputSchema } from './CardUncheckedCreateWithoutListInputSchema';
import { CardCreateOrConnectWithoutListInputSchema } from './CardCreateOrConnectWithoutListInputSchema';
import { CardUpsertWithWhereUniqueWithoutListInputSchema } from './CardUpsertWithWhereUniqueWithoutListInputSchema';
import { CardCreateManyListInputEnvelopeSchema } from './CardCreateManyListInputEnvelopeSchema';
import { CardWhereUniqueInputSchema } from './CardWhereUniqueInputSchema';
import { CardUpdateWithWhereUniqueWithoutListInputSchema } from './CardUpdateWithWhereUniqueWithoutListInputSchema';
import { CardUpdateManyWithWhereWithoutListInputSchema } from './CardUpdateManyWithWhereWithoutListInputSchema';
import { CardScalarWhereInputSchema } from './CardScalarWhereInputSchema';

export const CardUncheckedUpdateManyWithoutListNestedInputSchema: z.ZodType<Prisma.CardUncheckedUpdateManyWithoutListNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => CardCreateWithoutListInputSchema), z.lazy(() => CardCreateWithoutListInputSchema).array(), z.lazy(() => CardUncheckedCreateWithoutListInputSchema), z.lazy(() => CardUncheckedCreateWithoutListInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CardCreateOrConnectWithoutListInputSchema), z.lazy(() => CardCreateOrConnectWithoutListInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CardUpsertWithWhereUniqueWithoutListInputSchema), z.lazy(() => CardUpsertWithWhereUniqueWithoutListInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CardCreateManyListInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CardWhereUniqueInputSchema), z.lazy(() => CardWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CardWhereUniqueInputSchema), z.lazy(() => CardWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CardWhereUniqueInputSchema), z.lazy(() => CardWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CardWhereUniqueInputSchema), z.lazy(() => CardWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CardUpdateWithWhereUniqueWithoutListInputSchema), z.lazy(() => CardUpdateWithWhereUniqueWithoutListInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CardUpdateManyWithWhereWithoutListInputSchema), z.lazy(() => CardUpdateManyWithWhereWithoutListInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CardScalarWhereInputSchema), z.lazy(() => CardScalarWhereInputSchema).array() ]).optional(),
});

export default CardUncheckedUpdateManyWithoutListNestedInputSchema;
