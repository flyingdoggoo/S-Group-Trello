import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { otpsUpdateWithoutUserInputSchema } from './otpsUpdateWithoutUserInputSchema';
import { otpsUncheckedUpdateWithoutUserInputSchema } from './otpsUncheckedUpdateWithoutUserInputSchema';
import { otpsCreateWithoutUserInputSchema } from './otpsCreateWithoutUserInputSchema';
import { otpsUncheckedCreateWithoutUserInputSchema } from './otpsUncheckedCreateWithoutUserInputSchema';
import { otpsWhereInputSchema } from './otpsWhereInputSchema';

export const otpsUpsertWithoutUserInputSchema: z.ZodType<Prisma.otpsUpsertWithoutUserInput> = z.strictObject({
  update: z.union([ z.lazy(() => otpsUpdateWithoutUserInputSchema), z.lazy(() => otpsUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => otpsCreateWithoutUserInputSchema), z.lazy(() => otpsUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => otpsWhereInputSchema).optional(),
});

export default otpsUpsertWithoutUserInputSchema;
