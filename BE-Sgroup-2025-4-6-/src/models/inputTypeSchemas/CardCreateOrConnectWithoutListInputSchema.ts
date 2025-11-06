import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardWhereUniqueInputSchema } from './CardWhereUniqueInputSchema';
import { CardCreateWithoutListInputSchema } from './CardCreateWithoutListInputSchema';
import { CardUncheckedCreateWithoutListInputSchema } from './CardUncheckedCreateWithoutListInputSchema';

export const CardCreateOrConnectWithoutListInputSchema: z.ZodType<Prisma.CardCreateOrConnectWithoutListInput> = z.strictObject({
  where: z.lazy(() => CardWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CardCreateWithoutListInputSchema), z.lazy(() => CardUncheckedCreateWithoutListInputSchema) ]),
});

export default CardCreateOrConnectWithoutListInputSchema;
