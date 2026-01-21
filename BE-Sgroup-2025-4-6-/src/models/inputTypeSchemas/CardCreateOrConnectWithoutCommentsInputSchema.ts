import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardWhereUniqueInputSchema } from './CardWhereUniqueInputSchema';
import { CardCreateWithoutCommentsInputSchema } from './CardCreateWithoutCommentsInputSchema';
import { CardUncheckedCreateWithoutCommentsInputSchema } from './CardUncheckedCreateWithoutCommentsInputSchema';

export const CardCreateOrConnectWithoutCommentsInputSchema: z.ZodType<Prisma.CardCreateOrConnectWithoutCommentsInput> = z.strictObject({
  where: z.lazy(() => CardWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CardCreateWithoutCommentsInputSchema), z.lazy(() => CardUncheckedCreateWithoutCommentsInputSchema) ]),
});

export default CardCreateOrConnectWithoutCommentsInputSchema;
