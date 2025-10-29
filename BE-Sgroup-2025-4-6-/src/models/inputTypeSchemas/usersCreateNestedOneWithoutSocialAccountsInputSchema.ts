import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutSocialAccountsInputSchema } from './usersCreateWithoutSocialAccountsInputSchema';
import { usersUncheckedCreateWithoutSocialAccountsInputSchema } from './usersUncheckedCreateWithoutSocialAccountsInputSchema';
import { usersCreateOrConnectWithoutSocialAccountsInputSchema } from './usersCreateOrConnectWithoutSocialAccountsInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutSocialAccountsInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutSocialAccountsInput> = z.strictObject({
  create: z.union([ z.lazy(() => usersCreateWithoutSocialAccountsInputSchema), z.lazy(() => usersUncheckedCreateWithoutSocialAccountsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutSocialAccountsInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
});

export default usersCreateNestedOneWithoutSocialAccountsInputSchema;
