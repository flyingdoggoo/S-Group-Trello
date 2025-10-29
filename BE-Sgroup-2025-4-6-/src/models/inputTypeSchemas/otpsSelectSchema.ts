import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"

export const otpsSelectSchema: z.ZodType<Prisma.otpsSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  otp: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
}).strict()

export default otpsSelectSchema;
