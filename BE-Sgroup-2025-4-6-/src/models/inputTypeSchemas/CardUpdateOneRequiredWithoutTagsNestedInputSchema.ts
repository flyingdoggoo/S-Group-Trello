import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardCreateWithoutTagsInputSchema } from './CardCreateWithoutTagsInputSchema';
import { CardUncheckedCreateWithoutTagsInputSchema } from './CardUncheckedCreateWithoutTagsInputSchema';
import { CardCreateOrConnectWithoutTagsInputSchema } from './CardCreateOrConnectWithoutTagsInputSchema';
import { CardUpsertWithoutTagsInputSchema } from './CardUpsertWithoutTagsInputSchema';
import { CardWhereUniqueInputSchema } from './CardWhereUniqueInputSchema';
import { CardUpdateToOneWithWhereWithoutTagsInputSchema } from './CardUpdateToOneWithWhereWithoutTagsInputSchema';
import { CardUpdateWithoutTagsInputSchema } from './CardUpdateWithoutTagsInputSchema';
import { CardUncheckedUpdateWithoutTagsInputSchema } from './CardUncheckedUpdateWithoutTagsInputSchema';

export const CardUpdateOneRequiredWithoutTagsNestedInputSchema: z.ZodType<Prisma.CardUpdateOneRequiredWithoutTagsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => CardCreateWithoutTagsInputSchema), z.lazy(() => CardUncheckedCreateWithoutTagsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => CardCreateOrConnectWithoutTagsInputSchema).optional(),
  upsert: z.lazy(() => CardUpsertWithoutTagsInputSchema).optional(),
  connect: z.lazy(() => CardWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => CardUpdateToOneWithWhereWithoutTagsInputSchema), z.lazy(() => CardUpdateWithoutTagsInputSchema), z.lazy(() => CardUncheckedUpdateWithoutTagsInputSchema) ]).optional(),
});

export default CardUpdateOneRequiredWithoutTagsNestedInputSchema;
