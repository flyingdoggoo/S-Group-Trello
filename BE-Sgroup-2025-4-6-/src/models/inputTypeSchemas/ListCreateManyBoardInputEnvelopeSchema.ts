import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ListCreateManyBoardInputSchema } from './ListCreateManyBoardInputSchema';

export const ListCreateManyBoardInputEnvelopeSchema: z.ZodType<Prisma.ListCreateManyBoardInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => ListCreateManyBoardInputSchema), z.lazy(() => ListCreateManyBoardInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default ListCreateManyBoardInputEnvelopeSchema;
