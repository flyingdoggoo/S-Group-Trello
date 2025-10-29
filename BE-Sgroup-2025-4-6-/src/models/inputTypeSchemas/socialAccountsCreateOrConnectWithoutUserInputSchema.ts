import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { socialAccountsWhereUniqueInputSchema } from './socialAccountsWhereUniqueInputSchema';
import { socialAccountsCreateWithoutUserInputSchema } from './socialAccountsCreateWithoutUserInputSchema';
import { socialAccountsUncheckedCreateWithoutUserInputSchema } from './socialAccountsUncheckedCreateWithoutUserInputSchema';

export const socialAccountsCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.socialAccountsCreateOrConnectWithoutUserInput> = z.strictObject({
  where: z.lazy(() => socialAccountsWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => socialAccountsCreateWithoutUserInputSchema), z.lazy(() => socialAccountsUncheckedCreateWithoutUserInputSchema) ]),
});

export default socialAccountsCreateOrConnectWithoutUserInputSchema;
