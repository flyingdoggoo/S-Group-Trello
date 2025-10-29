import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutSocialAccountsInputSchema } from './usersUpdateWithoutSocialAccountsInputSchema';
import { usersUncheckedUpdateWithoutSocialAccountsInputSchema } from './usersUncheckedUpdateWithoutSocialAccountsInputSchema';
import { usersCreateWithoutSocialAccountsInputSchema } from './usersCreateWithoutSocialAccountsInputSchema';
import { usersUncheckedCreateWithoutSocialAccountsInputSchema } from './usersUncheckedCreateWithoutSocialAccountsInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutSocialAccountsInputSchema: z.ZodType<Prisma.usersUpsertWithoutSocialAccountsInput> = z.strictObject({
  update: z.union([ z.lazy(() => usersUpdateWithoutSocialAccountsInputSchema), z.lazy(() => usersUncheckedUpdateWithoutSocialAccountsInputSchema) ]),
  create: z.union([ z.lazy(() => usersCreateWithoutSocialAccountsInputSchema), z.lazy(() => usersUncheckedCreateWithoutSocialAccountsInputSchema) ]),
  where: z.lazy(() => usersWhereInputSchema).optional(),
});

export default usersUpsertWithoutSocialAccountsInputSchema;
