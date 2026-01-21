import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardWhereInputSchema } from './CardWhereInputSchema';
import { CardUpdateWithoutTagsInputSchema } from './CardUpdateWithoutTagsInputSchema';
import { CardUncheckedUpdateWithoutTagsInputSchema } from './CardUncheckedUpdateWithoutTagsInputSchema';

export const CardUpdateToOneWithWhereWithoutTagsInputSchema: z.ZodType<Prisma.CardUpdateToOneWithWhereWithoutTagsInput> = z.strictObject({
  where: z.lazy(() => CardWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => CardUpdateWithoutTagsInputSchema), z.lazy(() => CardUncheckedUpdateWithoutTagsInputSchema) ]),
});

export default CardUpdateToOneWithWhereWithoutTagsInputSchema;
