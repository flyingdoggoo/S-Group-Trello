import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardCreateWithoutTagsInputSchema } from './CardCreateWithoutTagsInputSchema';
import { CardUncheckedCreateWithoutTagsInputSchema } from './CardUncheckedCreateWithoutTagsInputSchema';
import { CardCreateOrConnectWithoutTagsInputSchema } from './CardCreateOrConnectWithoutTagsInputSchema';
import { CardWhereUniqueInputSchema } from './CardWhereUniqueInputSchema';

export const CardCreateNestedOneWithoutTagsInputSchema: z.ZodType<Prisma.CardCreateNestedOneWithoutTagsInput> = z.strictObject({
  create: z.union([ z.lazy(() => CardCreateWithoutTagsInputSchema), z.lazy(() => CardUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CardCreateOrConnectWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => CardWhereUniqueInputSchema).optional(),
});

export default CardCreateNestedOneWithoutTagsInputSchema;
