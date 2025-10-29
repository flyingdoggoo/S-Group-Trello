import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { otpsWhereInputSchema } from './otpsWhereInputSchema';
import { otpsUpdateWithoutUserInputSchema } from './otpsUpdateWithoutUserInputSchema';
import { otpsUncheckedUpdateWithoutUserInputSchema } from './otpsUncheckedUpdateWithoutUserInputSchema';

export const otpsUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.otpsUpdateToOneWithWhereWithoutUserInput> = z.strictObject({
  where: z.lazy(() => otpsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => otpsUpdateWithoutUserInputSchema), z.lazy(() => otpsUncheckedUpdateWithoutUserInputSchema) ]),
});

export default otpsUpdateToOneWithWhereWithoutUserInputSchema;
