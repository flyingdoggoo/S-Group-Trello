import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardTagWhereUniqueInputSchema } from './CardTagWhereUniqueInputSchema';
import { CardTagUpdateWithoutCardInputSchema } from './CardTagUpdateWithoutCardInputSchema';
import { CardTagUncheckedUpdateWithoutCardInputSchema } from './CardTagUncheckedUpdateWithoutCardInputSchema';

export const CardTagUpdateWithWhereUniqueWithoutCardInputSchema: z.ZodType<Prisma.CardTagUpdateWithWhereUniqueWithoutCardInput> = z.strictObject({
  where: z.lazy(() => CardTagWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => CardTagUpdateWithoutCardInputSchema), z.lazy(() => CardTagUncheckedUpdateWithoutCardInputSchema) ]),
});

export default CardTagUpdateWithWhereUniqueWithoutCardInputSchema;
