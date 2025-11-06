import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardWhereUniqueInputSchema } from './CardWhereUniqueInputSchema';
import { CardUpdateWithoutListInputSchema } from './CardUpdateWithoutListInputSchema';
import { CardUncheckedUpdateWithoutListInputSchema } from './CardUncheckedUpdateWithoutListInputSchema';
import { CardCreateWithoutListInputSchema } from './CardCreateWithoutListInputSchema';
import { CardUncheckedCreateWithoutListInputSchema } from './CardUncheckedCreateWithoutListInputSchema';

export const CardUpsertWithWhereUniqueWithoutListInputSchema: z.ZodType<Prisma.CardUpsertWithWhereUniqueWithoutListInput> = z.strictObject({
  where: z.lazy(() => CardWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CardUpdateWithoutListInputSchema), z.lazy(() => CardUncheckedUpdateWithoutListInputSchema) ]),
  create: z.union([ z.lazy(() => CardCreateWithoutListInputSchema), z.lazy(() => CardUncheckedCreateWithoutListInputSchema) ]),
});

export default CardUpsertWithWhereUniqueWithoutListInputSchema;
