import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardStatusEnumSchema } from './BoardStatusEnumSchema';

export const EnumBoardStatusEnumFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumBoardStatusEnumFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => BoardStatusEnumSchema).optional(),
});

export default EnumBoardStatusEnumFieldUpdateOperationsInputSchema;
