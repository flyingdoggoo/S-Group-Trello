import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateNestedOneWithoutSocialAccountsInputSchema } from './usersCreateNestedOneWithoutSocialAccountsInputSchema';

export const socialAccountsCreateInputSchema: z.ZodType<Prisma.socialAccountsCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  googleId: z.string(),
  googleAccessToken: z.string(),
  googleRefreshToken: z.string(),
  user: z.lazy(() => usersCreateNestedOneWithoutSocialAccountsInputSchema),
});

export default socialAccountsCreateInputSchema;
