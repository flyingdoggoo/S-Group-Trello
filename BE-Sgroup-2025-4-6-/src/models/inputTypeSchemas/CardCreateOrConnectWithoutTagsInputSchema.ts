import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardWhereUniqueInputSchema } from './CardWhereUniqueInputSchema';
import { CardCreateWithoutTagsInputSchema } from './CardCreateWithoutTagsInputSchema';
import { CardUncheckedCreateWithoutTagsInputSchema } from './CardUncheckedCreateWithoutTagsInputSchema';

export const CardCreateOrConnectWithoutTagsInputSchema: z.ZodType<Prisma.CardCreateOrConnectWithoutTagsInput> = z.strictObject({
  where: z.lazy(() => CardWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => CardCreateWithoutTagsInputSchema), z.lazy(() => CardUncheckedCreateWithoutTagsInputSchema) ]),
});

export default CardCreateOrConnectWithoutTagsInputSchema;
