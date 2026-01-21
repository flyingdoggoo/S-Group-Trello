import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardCreateManyProjectInputSchema } from './BoardCreateManyProjectInputSchema';

export const BoardCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.BoardCreateManyProjectInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => BoardCreateManyProjectInputSchema), z.lazy(() => BoardCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default BoardCreateManyProjectInputEnvelopeSchema;
