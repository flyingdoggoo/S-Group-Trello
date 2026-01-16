import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardMemberSelectSchema } from '../inputTypeSchemas/CardMemberSelectSchema';
import { CardMemberIncludeSchema } from '../inputTypeSchemas/CardMemberIncludeSchema';

export const CardMemberArgsSchema: z.ZodType<Prisma.CardMemberDefaultArgs> = z.object({
  select: z.lazy(() => CardMemberSelectSchema).optional(),
  include: z.lazy(() => CardMemberIncludeSchema).optional(),
}).strict();

export default CardMemberArgsSchema;
