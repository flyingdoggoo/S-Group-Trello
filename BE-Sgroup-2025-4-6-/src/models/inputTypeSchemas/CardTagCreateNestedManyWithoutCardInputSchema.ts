import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardTagCreateWithoutCardInputSchema } from './CardTagCreateWithoutCardInputSchema';
import { CardTagUncheckedCreateWithoutCardInputSchema } from './CardTagUncheckedCreateWithoutCardInputSchema';
import { CardTagCreateOrConnectWithoutCardInputSchema } from './CardTagCreateOrConnectWithoutCardInputSchema';
import { CardTagCreateManyCardInputEnvelopeSchema } from './CardTagCreateManyCardInputEnvelopeSchema';
import { CardTagWhereUniqueInputSchema } from './CardTagWhereUniqueInputSchema';

export const CardTagCreateNestedManyWithoutCardInputSchema: z.ZodType<Prisma.CardTagCreateNestedManyWithoutCardInput> = z.strictObject({
  create: z.union([ z.lazy(() => CardTagCreateWithoutCardInputSchema), z.lazy(() => CardTagCreateWithoutCardInputSchema).array(), z.lazy(() => CardTagUncheckedCreateWithoutCardInputSchema), z.lazy(() => CardTagUncheckedCreateWithoutCardInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CardTagCreateOrConnectWithoutCardInputSchema), z.lazy(() => CardTagCreateOrConnectWithoutCardInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CardTagCreateManyCardInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CardTagWhereUniqueInputSchema), z.lazy(() => CardTagWhereUniqueInputSchema).array() ]).optional(),
});

export default CardTagCreateNestedManyWithoutCardInputSchema;
