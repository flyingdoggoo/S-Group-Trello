import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardScalarWhereInputSchema } from './CardScalarWhereInputSchema';
import { CardUpdateManyMutationInputSchema } from './CardUpdateManyMutationInputSchema';
import { CardUncheckedUpdateManyWithoutListInputSchema } from './CardUncheckedUpdateManyWithoutListInputSchema';

export const CardUpdateManyWithWhereWithoutListInputSchema: z.ZodType<Prisma.CardUpdateManyWithWhereWithoutListInput> = z.strictObject({
  where: z.lazy(() => CardScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CardUpdateManyMutationInputSchema), z.lazy(() => CardUncheckedUpdateManyWithoutListInputSchema) ]),
});

export default CardUpdateManyWithWhereWithoutListInputSchema;
