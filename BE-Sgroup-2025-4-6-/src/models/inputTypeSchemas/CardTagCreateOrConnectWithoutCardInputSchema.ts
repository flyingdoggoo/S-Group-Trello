import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardTagWhereUniqueInputSchema } from './CardTagWhereUniqueInputSchema';
import { CardTagCreateWithoutCardInputSchema } from './CardTagCreateWithoutCardInputSchema';
import { CardTagUncheckedCreateWithoutCardInputSchema } from './CardTagUncheckedCreateWithoutCardInputSchema';

export const CardTagCreateOrConnectWithoutCardInputSchema: z.ZodType<Prisma.CardTagCreateOrConnectWithoutCardInput> = z.strictObject({
  where: z.lazy(() => CardTagWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CardTagCreateWithoutCardInputSchema), z.lazy(() => CardTagUncheckedCreateWithoutCardInputSchema) ]),
});

export default CardTagCreateOrConnectWithoutCardInputSchema;
