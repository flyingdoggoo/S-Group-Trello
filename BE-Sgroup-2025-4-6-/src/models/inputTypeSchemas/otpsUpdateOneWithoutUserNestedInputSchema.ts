import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { otpsCreateWithoutUserInputSchema } from './otpsCreateWithoutUserInputSchema';
import { otpsUncheckedCreateWithoutUserInputSchema } from './otpsUncheckedCreateWithoutUserInputSchema';
import { otpsCreateOrConnectWithoutUserInputSchema } from './otpsCreateOrConnectWithoutUserInputSchema';
import { otpsUpsertWithoutUserInputSchema } from './otpsUpsertWithoutUserInputSchema';
import { otpsWhereInputSchema } from './otpsWhereInputSchema';
import { otpsWhereUniqueInputSchema } from './otpsWhereUniqueInputSchema';
import { otpsUpdateToOneWithWhereWithoutUserInputSchema } from './otpsUpdateToOneWithWhereWithoutUserInputSchema';
import { otpsUpdateWithoutUserInputSchema } from './otpsUpdateWithoutUserInputSchema';
import { otpsUncheckedUpdateWithoutUserInputSchema } from './otpsUncheckedUpdateWithoutUserInputSchema';

export const otpsUpdateOneWithoutUserNestedInputSchema: z.ZodType<Prisma.otpsUpdateOneWithoutUserNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => otpsCreateWithoutUserInputSchema), z.lazy(() => otpsUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => otpsCreateOrConnectWithoutUserInputSchema).optional(),
  upsert: z.lazy(() => otpsUpsertWithoutUserInputSchema).optional(),
  disconnect: z.union([ z.boolean(),z.lazy(() => otpsWhereInputSchema) ]).optional(),
  delete: z.union([ z.boolean(),z.lazy(() => otpsWhereInputSchema) ]).optional(),
  connect: z.lazy(() => otpsWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => otpsUpdateToOneWithWhereWithoutUserInputSchema), z.lazy(() => otpsUpdateWithoutUserInputSchema), z.lazy(() => otpsUncheckedUpdateWithoutUserInputSchema) ]).optional(),
});

export default otpsUpdateOneWithoutUserNestedInputSchema;
