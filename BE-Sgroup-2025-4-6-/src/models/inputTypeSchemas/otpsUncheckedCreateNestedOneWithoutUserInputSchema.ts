import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { otpsCreateWithoutUserInputSchema } from './otpsCreateWithoutUserInputSchema';
import { otpsUncheckedCreateWithoutUserInputSchema } from './otpsUncheckedCreateWithoutUserInputSchema';
import { otpsCreateOrConnectWithoutUserInputSchema } from './otpsCreateOrConnectWithoutUserInputSchema';
import { otpsWhereUniqueInputSchema } from './otpsWhereUniqueInputSchema';

export const otpsUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.otpsUncheckedCreateNestedOneWithoutUserInput> = z.strictObject({
  create: z.union([ z.lazy(() => otpsCreateWithoutUserInputSchema), z.lazy(() => otpsUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => otpsCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => otpsWhereUniqueInputSchema).optional(),
});

export default otpsUncheckedCreateNestedOneWithoutUserInputSchema;
