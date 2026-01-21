import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardTagWhereUniqueInputSchema } from './CardTagWhereUniqueInputSchema';
import { CardTagUpdateWithoutCardInputSchema } from './CardTagUpdateWithoutCardInputSchema';
import { CardTagUncheckedUpdateWithoutCardInputSchema } from './CardTagUncheckedUpdateWithoutCardInputSchema';
import { CardTagCreateWithoutCardInputSchema } from './CardTagCreateWithoutCardInputSchema';
import { CardTagUncheckedCreateWithoutCardInputSchema } from './CardTagUncheckedCreateWithoutCardInputSchema';

export const CardTagUpsertWithWhereUniqueWithoutCardInputSchema: z.ZodType<Prisma.CardTagUpsertWithWhereUniqueWithoutCardInput> = z.strictObject({
  where: z.lazy(() => CardTagWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => CardTagUpdateWithoutCardInputSchema), z.lazy(() => CardTagUncheckedUpdateWithoutCardInputSchema) ]),
  create: z.union([ z.lazy(() => CardTagCreateWithoutCardInputSchema), z.lazy(() => CardTagUncheckedCreateWithoutCardInputSchema) ]),
});

export default CardTagUpsertWithWhereUniqueWithoutCardInputSchema;
