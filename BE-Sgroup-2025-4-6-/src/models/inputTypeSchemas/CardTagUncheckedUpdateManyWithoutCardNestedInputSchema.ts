import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardTagCreateWithoutCardInputSchema } from './CardTagCreateWithoutCardInputSchema';
import { CardTagUncheckedCreateWithoutCardInputSchema } from './CardTagUncheckedCreateWithoutCardInputSchema';
import { CardTagCreateOrConnectWithoutCardInputSchema } from './CardTagCreateOrConnectWithoutCardInputSchema';
import { CardTagUpsertWithWhereUniqueWithoutCardInputSchema } from './CardTagUpsertWithWhereUniqueWithoutCardInputSchema';
import { CardTagCreateManyCardInputEnvelopeSchema } from './CardTagCreateManyCardInputEnvelopeSchema';
import { CardTagWhereUniqueInputSchema } from './CardTagWhereUniqueInputSchema';
import { CardTagUpdateWithWhereUniqueWithoutCardInputSchema } from './CardTagUpdateWithWhereUniqueWithoutCardInputSchema';
import { CardTagUpdateManyWithWhereWithoutCardInputSchema } from './CardTagUpdateManyWithWhereWithoutCardInputSchema';
import { CardTagScalarWhereInputSchema } from './CardTagScalarWhereInputSchema';

export const CardTagUncheckedUpdateManyWithoutCardNestedInputSchema: z.ZodType<Prisma.CardTagUncheckedUpdateManyWithoutCardNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => CardTagCreateWithoutCardInputSchema), z.lazy(() => CardTagCreateWithoutCardInputSchema).array(), z.lazy(() => CardTagUncheckedCreateWithoutCardInputSchema), z.lazy(() => CardTagUncheckedCreateWithoutCardInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CardTagCreateOrConnectWithoutCardInputSchema), z.lazy(() => CardTagCreateOrConnectWithoutCardInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => CardTagUpsertWithWhereUniqueWithoutCardInputSchema), z.lazy(() => CardTagUpsertWithWhereUniqueWithoutCardInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CardTagCreateManyCardInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => CardTagWhereUniqueInputSchema), z.lazy(() => CardTagWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => CardTagWhereUniqueInputSchema), z.lazy(() => CardTagWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => CardTagWhereUniqueInputSchema), z.lazy(() => CardTagWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => CardTagWhereUniqueInputSchema), z.lazy(() => CardTagWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => CardTagUpdateWithWhereUniqueWithoutCardInputSchema), z.lazy(() => CardTagUpdateWithWhereUniqueWithoutCardInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => CardTagUpdateManyWithWhereWithoutCardInputSchema), z.lazy(() => CardTagUpdateManyWithWhereWithoutCardInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => CardTagScalarWhereInputSchema), z.lazy(() => CardTagScalarWhereInputSchema).array() ]).optional(),
});

export default CardTagUncheckedUpdateManyWithoutCardNestedInputSchema;
