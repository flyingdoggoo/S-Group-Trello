import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ListUpdateWithoutCardInputSchema } from './ListUpdateWithoutCardInputSchema';
import { ListUncheckedUpdateWithoutCardInputSchema } from './ListUncheckedUpdateWithoutCardInputSchema';
import { ListCreateWithoutCardInputSchema } from './ListCreateWithoutCardInputSchema';
import { ListUncheckedCreateWithoutCardInputSchema } from './ListUncheckedCreateWithoutCardInputSchema';
import { ListWhereInputSchema } from './ListWhereInputSchema';

export const ListUpsertWithoutCardInputSchema: z.ZodType<Prisma.ListUpsertWithoutCardInput> = z.strictObject({
  update: z.union([ z.lazy(() => ListUpdateWithoutCardInputSchema), z.lazy(() => ListUncheckedUpdateWithoutCardInputSchema) ]),
  create: z.union([ z.lazy(() => ListCreateWithoutCardInputSchema), z.lazy(() => ListUncheckedCreateWithoutCardInputSchema) ]),
  where: z.lazy(() => ListWhereInputSchema).optional(),
});

export default ListUpsertWithoutCardInputSchema;
