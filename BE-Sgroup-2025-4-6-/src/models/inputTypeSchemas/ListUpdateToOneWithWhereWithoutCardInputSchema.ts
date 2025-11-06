import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ListWhereInputSchema } from './ListWhereInputSchema';
import { ListUpdateWithoutCardInputSchema } from './ListUpdateWithoutCardInputSchema';
import { ListUncheckedUpdateWithoutCardInputSchema } from './ListUncheckedUpdateWithoutCardInputSchema';

export const ListUpdateToOneWithWhereWithoutCardInputSchema: z.ZodType<Prisma.ListUpdateToOneWithWhereWithoutCardInput> = z.strictObject({
  where: z.lazy(() => ListWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => ListUpdateWithoutCardInputSchema), z.lazy(() => ListUncheckedUpdateWithoutCardInputSchema) ]),
});

export default ListUpdateToOneWithWhereWithoutCardInputSchema;
