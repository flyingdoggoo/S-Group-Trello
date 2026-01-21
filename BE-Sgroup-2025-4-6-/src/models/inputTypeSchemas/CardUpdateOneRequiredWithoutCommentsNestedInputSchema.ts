import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardCreateWithoutCommentsInputSchema } from './CardCreateWithoutCommentsInputSchema';
import { CardUncheckedCreateWithoutCommentsInputSchema } from './CardUncheckedCreateWithoutCommentsInputSchema';
import { CardCreateOrConnectWithoutCommentsInputSchema } from './CardCreateOrConnectWithoutCommentsInputSchema';
import { CardUpsertWithoutCommentsInputSchema } from './CardUpsertWithoutCommentsInputSchema';
import { CardWhereUniqueInputSchema } from './CardWhereUniqueInputSchema';
import { CardUpdateToOneWithWhereWithoutCommentsInputSchema } from './CardUpdateToOneWithWhereWithoutCommentsInputSchema';
import { CardUpdateWithoutCommentsInputSchema } from './CardUpdateWithoutCommentsInputSchema';
import { CardUncheckedUpdateWithoutCommentsInputSchema } from './CardUncheckedUpdateWithoutCommentsInputSchema';

export const CardUpdateOneRequiredWithoutCommentsNestedInputSchema: z.ZodType<Prisma.CardUpdateOneRequiredWithoutCommentsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => CardCreateWithoutCommentsInputSchema), z.lazy(() => CardUncheckedCreateWithoutCommentsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CardCreateOrConnectWithoutCommentsInputSchema).optional(),
  upsert: z.lazy(() => CardUpsertWithoutCommentsInputSchema).optional(),
  connect: z.lazy(() => CardWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CardUpdateToOneWithWhereWithoutCommentsInputSchema), z.lazy(() => CardUpdateWithoutCommentsInputSchema), z.lazy(() => CardUncheckedUpdateWithoutCommentsInputSchema) ]).optional(),
});

export default CardUpdateOneRequiredWithoutCommentsNestedInputSchema;
