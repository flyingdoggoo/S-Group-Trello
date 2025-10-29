import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutOtpsInputSchema } from './usersUpdateWithoutOtpsInputSchema';
import { usersUncheckedUpdateWithoutOtpsInputSchema } from './usersUncheckedUpdateWithoutOtpsInputSchema';

export const usersUpdateToOneWithWhereWithoutOtpsInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutOtpsInput> = z.strictObject({
  where: z.lazy(() => usersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => usersUpdateWithoutOtpsInputSchema), z.lazy(() => usersUncheckedUpdateWithoutOtpsInputSchema) ]),
});

export default usersUpdateToOneWithWhereWithoutOtpsInputSchema;
