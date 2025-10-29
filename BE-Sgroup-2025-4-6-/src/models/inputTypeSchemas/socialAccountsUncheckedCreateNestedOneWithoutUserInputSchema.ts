import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { socialAccountsCreateWithoutUserInputSchema } from './socialAccountsCreateWithoutUserInputSchema';
import { socialAccountsUncheckedCreateWithoutUserInputSchema } from './socialAccountsUncheckedCreateWithoutUserInputSchema';
import { socialAccountsCreateOrConnectWithoutUserInputSchema } from './socialAccountsCreateOrConnectWithoutUserInputSchema';
import { socialAccountsWhereUniqueInputSchema } from './socialAccountsWhereUniqueInputSchema';

export const socialAccountsUncheckedCreateNestedOneWithoutUserInputSchema: z.ZodType<Prisma.socialAccountsUncheckedCreateNestedOneWithoutUserInput> = z.strictObject({
  create: z.union([ z.lazy(() => socialAccountsCreateWithoutUserInputSchema), z.lazy(() => socialAccountsUncheckedCreateWithoutUserInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => socialAccountsCreateOrConnectWithoutUserInputSchema).optional(),
  connect: z.lazy(() => socialAccountsWhereUniqueInputSchema).optional(),
});

export default socialAccountsUncheckedCreateNestedOneWithoutUserInputSchema;
