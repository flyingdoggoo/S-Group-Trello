import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { socialAccountsWhereInputSchema } from './socialAccountsWhereInputSchema';
import { socialAccountsUpdateWithoutUserInputSchema } from './socialAccountsUpdateWithoutUserInputSchema';
import { socialAccountsUncheckedUpdateWithoutUserInputSchema } from './socialAccountsUncheckedUpdateWithoutUserInputSchema';

export const socialAccountsUpdateToOneWithWhereWithoutUserInputSchema: z.ZodType<Prisma.socialAccountsUpdateToOneWithWhereWithoutUserInput> = z.strictObject({
  where: z.lazy(() => socialAccountsWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => socialAccountsUpdateWithoutUserInputSchema), z.lazy(() => socialAccountsUncheckedUpdateWithoutUserInputSchema) ]),
});

export default socialAccountsUpdateToOneWithWhereWithoutUserInputSchema;
