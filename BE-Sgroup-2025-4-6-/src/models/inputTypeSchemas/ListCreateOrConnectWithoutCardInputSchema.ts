import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ListWhereUniqueInputSchema } from './ListWhereUniqueInputSchema';
import { ListCreateWithoutCardInputSchema } from './ListCreateWithoutCardInputSchema';
import { ListUncheckedCreateWithoutCardInputSchema } from './ListUncheckedCreateWithoutCardInputSchema';

export const ListCreateOrConnectWithoutCardInputSchema: z.ZodType<Prisma.ListCreateOrConnectWithoutCardInput> = z.strictObject({
  where: z.lazy(() => ListWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ListCreateWithoutCardInputSchema), z.lazy(() => ListUncheckedCreateWithoutCardInputSchema) ]),
});

export default ListCreateOrConnectWithoutCardInputSchema;
