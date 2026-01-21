import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardWhereUniqueInputSchema } from './CardWhereUniqueInputSchema';
import { CardUpdateWithoutListInputSchema } from './CardUpdateWithoutListInputSchema';
import { CardUncheckedUpdateWithoutListInputSchema } from './CardUncheckedUpdateWithoutListInputSchema';

export const CardUpdateWithWhereUniqueWithoutListInputSchema: z.ZodType<Prisma.CardUpdateWithWhereUniqueWithoutListInput> = z.strictObject({
  where: z.lazy(() => CardWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CardUpdateWithoutListInputSchema), z.lazy(() => CardUncheckedUpdateWithoutListInputSchema) ]),
});

export default CardUpdateWithWhereUniqueWithoutListInputSchema;
