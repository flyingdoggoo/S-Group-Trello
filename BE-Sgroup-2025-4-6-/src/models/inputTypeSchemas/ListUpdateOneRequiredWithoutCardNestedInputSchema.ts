import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ListCreateWithoutCardInputSchema } from './ListCreateWithoutCardInputSchema';
import { ListUncheckedCreateWithoutCardInputSchema } from './ListUncheckedCreateWithoutCardInputSchema';
import { ListCreateOrConnectWithoutCardInputSchema } from './ListCreateOrConnectWithoutCardInputSchema';
import { ListUpsertWithoutCardInputSchema } from './ListUpsertWithoutCardInputSchema';
import { ListWhereUniqueInputSchema } from './ListWhereUniqueInputSchema';
import { ListUpdateToOneWithWhereWithoutCardInputSchema } from './ListUpdateToOneWithWhereWithoutCardInputSchema';
import { ListUpdateWithoutCardInputSchema } from './ListUpdateWithoutCardInputSchema';
import { ListUncheckedUpdateWithoutCardInputSchema } from './ListUncheckedUpdateWithoutCardInputSchema';

export const ListUpdateOneRequiredWithoutCardNestedInputSchema: z.ZodType<Prisma.ListUpdateOneRequiredWithoutCardNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ListCreateWithoutCardInputSchema), z.lazy(() => ListUncheckedCreateWithoutCardInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => ListCreateOrConnectWithoutCardInputSchema).optional(),
  upsert: z.lazy(() => ListUpsertWithoutCardInputSchema).optional(),
  connect: z.lazy(() => ListWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => ListUpdateToOneWithWhereWithoutCardInputSchema), z.lazy(() => ListUpdateWithoutCardInputSchema), z.lazy(() => ListUncheckedUpdateWithoutCardInputSchema) ]).optional(),
});

export default ListUpdateOneRequiredWithoutCardNestedInputSchema;
