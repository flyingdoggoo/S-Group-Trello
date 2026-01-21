import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardWhereInputSchema } from './CardWhereInputSchema';
import { CardUpdateWithoutCommentsInputSchema } from './CardUpdateWithoutCommentsInputSchema';
import { CardUncheckedUpdateWithoutCommentsInputSchema } from './CardUncheckedUpdateWithoutCommentsInputSchema';

export const CardUpdateToOneWithWhereWithoutCommentsInputSchema: z.ZodType<Prisma.CardUpdateToOneWithWhereWithoutCommentsInput> = z.strictObject({
  where: z.lazy(() => CardWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CardUpdateWithoutCommentsInputSchema), z.lazy(() => CardUncheckedUpdateWithoutCommentsInputSchema) ]),
});

export default CardUpdateToOneWithWhereWithoutCommentsInputSchema;
