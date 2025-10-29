import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutSocialAccountsInputSchema } from './usersCreateWithoutSocialAccountsInputSchema';
import { usersUncheckedCreateWithoutSocialAccountsInputSchema } from './usersUncheckedCreateWithoutSocialAccountsInputSchema';

export const usersCreateOrConnectWithoutSocialAccountsInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutSocialAccountsInput> = z.strictObject({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => usersCreateWithoutSocialAccountsInputSchema), z.lazy(() => usersUncheckedCreateWithoutSocialAccountsInputSchema) ]),
});

export default usersCreateOrConnectWithoutSocialAccountsInputSchema;
