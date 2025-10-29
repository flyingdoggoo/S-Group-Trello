import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { otpsWhereUniqueInputSchema } from './otpsWhereUniqueInputSchema';
import { otpsCreateWithoutUserInputSchema } from './otpsCreateWithoutUserInputSchema';
import { otpsUncheckedCreateWithoutUserInputSchema } from './otpsUncheckedCreateWithoutUserInputSchema';

export const otpsCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.otpsCreateOrConnectWithoutUserInput> = z.strictObject({
  where: z.lazy(() => otpsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => otpsCreateWithoutUserInputSchema), z.lazy(() => otpsUncheckedCreateWithoutUserInputSchema) ]),
});

export default otpsCreateOrConnectWithoutUserInputSchema;
