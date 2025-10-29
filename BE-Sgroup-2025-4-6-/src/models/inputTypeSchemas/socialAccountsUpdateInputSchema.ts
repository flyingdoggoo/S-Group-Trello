import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { usersUpdateOneRequiredWithoutSocialAccountsNestedInputSchema } from './usersUpdateOneRequiredWithoutSocialAccountsNestedInputSchema';

export const socialAccountsUpdateInputSchema: z.ZodType<Prisma.socialAccountsUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  googleId: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  googleAccessToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  googleRefreshToken: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => usersUpdateOneRequiredWithoutSocialAccountsNestedInputSchema).optional(),
});

export default socialAccountsUpdateInputSchema;
