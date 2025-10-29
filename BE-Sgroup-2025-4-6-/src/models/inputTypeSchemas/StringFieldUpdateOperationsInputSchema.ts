import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const StringFieldUpdateOperationsInputSchema: z.ZodType<Prisma.StringFieldUpdateOperationsInput> = z.strictObject({
  set: z.string().optional(),
});

export default StringFieldUpdateOperationsInputSchema;
