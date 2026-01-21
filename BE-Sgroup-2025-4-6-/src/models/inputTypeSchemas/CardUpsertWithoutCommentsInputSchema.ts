import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardUpdateWithoutCommentsInputSchema } from './CardUpdateWithoutCommentsInputSchema';
import { CardUncheckedUpdateWithoutCommentsInputSchema } from './CardUncheckedUpdateWithoutCommentsInputSchema';
import { CardCreateWithoutCommentsInputSchema } from './CardCreateWithoutCommentsInputSchema';
import { CardUncheckedCreateWithoutCommentsInputSchema } from './CardUncheckedCreateWithoutCommentsInputSchema';
import { CardWhereInputSchema } from './CardWhereInputSchema';

export const CardUpsertWithoutCommentsInputSchema: z.ZodType<Prisma.CardUpsertWithoutCommentsInput> = z.strictObject({
  update: z.union([ z.lazy(() => CardUpdateWithoutCommentsInputSchema), z.lazy(() => CardUncheckedUpdateWithoutCommentsInputSchema) ]),
  create: z.union([ z.lazy(() => CardCreateWithoutCommentsInputSchema), z.lazy(() => CardUncheckedCreateWithoutCommentsInputSchema) ]),
  where: z.lazy(() => CardWhereInputSchema).optional(),
});

export default CardUpsertWithoutCommentsInputSchema;
