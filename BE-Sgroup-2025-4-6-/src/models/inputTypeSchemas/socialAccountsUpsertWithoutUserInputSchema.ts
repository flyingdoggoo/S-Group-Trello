import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { socialAccountsUpdateWithoutUserInputSchema } from './socialAccountsUpdateWithoutUserInputSchema';
import { socialAccountsUncheckedUpdateWithoutUserInputSchema } from './socialAccountsUncheckedUpdateWithoutUserInputSchema';
import { socialAccountsCreateWithoutUserInputSchema } from './socialAccountsCreateWithoutUserInputSchema';
import { socialAccountsUncheckedCreateWithoutUserInputSchema } from './socialAccountsUncheckedCreateWithoutUserInputSchema';
import { socialAccountsWhereInputSchema } from './socialAccountsWhereInputSchema';

export const socialAccountsUpsertWithoutUserInputSchema: z.ZodType<Prisma.socialAccountsUpsertWithoutUserInput> = z.strictObject({
  update: z.union([ z.lazy(() => socialAccountsUpdateWithoutUserInputSchema), z.lazy(() => socialAccountsUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => socialAccountsCreateWithoutUserInputSchema), z.lazy(() => socialAccountsUncheckedCreateWithoutUserInputSchema) ]),
  where: z.lazy(() => socialAccountsWhereInputSchema).optional(),
});

export default socialAccountsUpsertWithoutUserInputSchema;
