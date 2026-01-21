import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardCreateWithoutCommentsInputSchema } from './CardCreateWithoutCommentsInputSchema';
import { CardUncheckedCreateWithoutCommentsInputSchema } from './CardUncheckedCreateWithoutCommentsInputSchema';
import { CardCreateOrConnectWithoutCommentsInputSchema } from './CardCreateOrConnectWithoutCommentsInputSchema';
import { CardWhereUniqueInputSchema } from './CardWhereUniqueInputSchema';

export const CardCreateNestedOneWithoutCommentsInputSchema: z.ZodType<Prisma.CardCreateNestedOneWithoutCommentsInput> = z.strictObject({
  create: z.union([ z.lazy(() => CardCreateWithoutCommentsInputSchema), z.lazy(() => CardUncheckedCreateWithoutCommentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CardCreateOrConnectWithoutCommentsInputSchema).optional(),
  connect: z.lazy(() => CardWhereUniqueInputSchema).optional(),
});

export default CardCreateNestedOneWithoutCommentsInputSchema;
