import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardMemberCreateManyRoleInputSchema } from './BoardMemberCreateManyRoleInputSchema';

export const BoardMemberCreateManyRoleInputEnvelopeSchema: z.ZodType<Prisma.BoardMemberCreateManyRoleInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => BoardMemberCreateManyRoleInputSchema), z.lazy(() => BoardMemberCreateManyRoleInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default BoardMemberCreateManyRoleInputEnvelopeSchema;
