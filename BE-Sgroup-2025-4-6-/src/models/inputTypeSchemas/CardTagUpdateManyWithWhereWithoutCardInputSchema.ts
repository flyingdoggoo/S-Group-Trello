import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardTagScalarWhereInputSchema } from './CardTagScalarWhereInputSchema';
import { CardTagUpdateManyMutationInputSchema } from './CardTagUpdateManyMutationInputSchema';
import { CardTagUncheckedUpdateManyWithoutCardInputSchema } from './CardTagUncheckedUpdateManyWithoutCardInputSchema';

export const CardTagUpdateManyWithWhereWithoutCardInputSchema: z.ZodType<Prisma.CardTagUpdateManyWithWhereWithoutCardInput> = z.strictObject({
  where: z.lazy(() => CardTagScalarWhereInputSchema),
  data: z.union([ z.lazy(() => CardTagUpdateManyMutationInputSchema), z.lazy(() => CardTagUncheckedUpdateManyWithoutCardInputSchema) ]),
});

export default CardTagUpdateManyWithWhereWithoutCardInputSchema;
