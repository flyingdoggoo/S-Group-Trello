import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardArgsSchema } from "../outputTypeSchemas/CardArgsSchema"
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"

export const CardMemberIncludeSchema: z.ZodType<Prisma.CardMemberInclude> = z.object({
  card: z.union([z.boolean(),z.lazy(() => CardArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
}).strict();

export default CardMemberIncludeSchema;
