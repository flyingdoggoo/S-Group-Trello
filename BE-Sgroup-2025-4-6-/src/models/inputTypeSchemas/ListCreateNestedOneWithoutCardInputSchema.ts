import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ListCreateWithoutCardInputSchema } from './ListCreateWithoutCardInputSchema';
import { ListUncheckedCreateWithoutCardInputSchema } from './ListUncheckedCreateWithoutCardInputSchema';
import { ListCreateOrConnectWithoutCardInputSchema } from './ListCreateOrConnectWithoutCardInputSchema';
import { ListWhereUniqueInputSchema } from './ListWhereUniqueInputSchema';

export const ListCreateNestedOneWithoutCardInputSchema: z.ZodType<Prisma.ListCreateNestedOneWithoutCardInput> = z.strictObject({
  create: z.union([ z.lazy(() => ListCreateWithoutCardInputSchema), z.lazy(() => ListUncheckedCreateWithoutCardInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ListCreateOrConnectWithoutCardInputSchema).optional(),
  connect: z.lazy(() => ListWhereUniqueInputSchema).optional(),
});

export default ListCreateNestedOneWithoutCardInputSchema;
