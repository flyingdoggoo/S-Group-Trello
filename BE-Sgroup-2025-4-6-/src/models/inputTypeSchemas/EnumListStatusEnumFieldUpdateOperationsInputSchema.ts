import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ListStatusEnumSchema } from './ListStatusEnumSchema';

export const EnumListStatusEnumFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumListStatusEnumFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => ListStatusEnumSchema).optional(),
});

export default EnumListStatusEnumFieldUpdateOperationsInputSchema;
