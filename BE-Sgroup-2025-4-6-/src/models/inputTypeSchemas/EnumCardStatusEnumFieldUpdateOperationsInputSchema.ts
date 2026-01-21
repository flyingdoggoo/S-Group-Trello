import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardStatusEnumSchema } from './CardStatusEnumSchema';

export const EnumCardStatusEnumFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumCardStatusEnumFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => CardStatusEnumSchema).optional(),
});

export default EnumCardStatusEnumFieldUpdateOperationsInputSchema;
