import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardCreateWithoutListInputSchema } from './CardCreateWithoutListInputSchema';
import { CardUncheckedCreateWithoutListInputSchema } from './CardUncheckedCreateWithoutListInputSchema';
import { CardCreateOrConnectWithoutListInputSchema } from './CardCreateOrConnectWithoutListInputSchema';
import { CardCreateManyListInputEnvelopeSchema } from './CardCreateManyListInputEnvelopeSchema';
import { CardWhereUniqueInputSchema } from './CardWhereUniqueInputSchema';

export const CardUncheckedCreateNestedManyWithoutListInputSchema: z.ZodType<Prisma.CardUncheckedCreateNestedManyWithoutListInput> = z.strictObject({
  create: z.union([ z.lazy(() => CardCreateWithoutListInputSchema), z.lazy(() => CardCreateWithoutListInputSchema).array(), z.lazy(() => CardUncheckedCreateWithoutListInputSchema), z.lazy(() => CardUncheckedCreateWithoutListInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => CardCreateOrConnectWithoutListInputSchema), z.lazy(() => CardCreateOrConnectWithoutListInputSchema).array() ]).optional(),
  createMany: z.lazy(() => CardCreateManyListInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => CardWhereUniqueInputSchema), z.lazy(() => CardWhereUniqueInputSchema).array() ]).optional(),
});

export default CardUncheckedCreateNestedManyWithoutListInputSchema;
