import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { socialAccountsSelectSchema } from '../inputTypeSchemas/socialAccountsSelectSchema';
import { socialAccountsIncludeSchema } from '../inputTypeSchemas/socialAccountsIncludeSchema';

export const socialAccountsArgsSchema: z.ZodType<Prisma.socialAccountsDefaultArgs> = z.object({
  select: z.lazy(() => socialAccountsSelectSchema).optional(),
  include: z.lazy(() => socialAccountsIncludeSchema).optional(),
}).strict();

export default socialAccountsArgsSchema;
