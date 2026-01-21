import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardUpdateWithoutTagsInputSchema } from './CardUpdateWithoutTagsInputSchema';
import { CardUncheckedUpdateWithoutTagsInputSchema } from './CardUncheckedUpdateWithoutTagsInputSchema';
import { CardCreateWithoutTagsInputSchema } from './CardCreateWithoutTagsInputSchema';
import { CardUncheckedCreateWithoutTagsInputSchema } from './CardUncheckedCreateWithoutTagsInputSchema';
import { CardWhereInputSchema } from './CardWhereInputSchema';

export const CardUpsertWithoutTagsInputSchema: z.ZodType<Prisma.CardUpsertWithoutTagsInput> = z.strictObject({
  update: z.union([ z.lazy(() => CardUpdateWithoutTagsInputSchema), z.lazy(() => CardUncheckedUpdateWithoutTagsInputSchema) ]),
  create: z.union([ z.lazy(() => CardCreateWithoutTagsInputSchema), z.lazy(() => CardUncheckedCreateWithoutTagsInputSchema) ]),
  where: z.lazy(() => CardWhereInputSchema).optional(),
});

export default CardUpsertWithoutTagsInputSchema;
