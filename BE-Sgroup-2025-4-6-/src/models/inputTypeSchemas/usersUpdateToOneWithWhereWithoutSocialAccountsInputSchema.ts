import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutSocialAccountsInputSchema } from './usersUpdateWithoutSocialAccountsInputSchema';
import { usersUncheckedUpdateWithoutSocialAccountsInputSchema } from './usersUncheckedUpdateWithoutSocialAccountsInputSchema';

export const usersUpdateToOneWithWhereWithoutSocialAccountsInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutSocialAccountsInput> = z.strictObject({
  where: z.lazy(() => usersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => usersUpdateWithoutSocialAccountsInputSchema), z.lazy(() => usersUncheckedUpdateWithoutSocialAccountsInputSchema) ]),
});

export default usersUpdateToOneWithWhereWithoutSocialAccountsInputSchema;
