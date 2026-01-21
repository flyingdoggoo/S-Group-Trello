import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectStatusEnumSchema } from './ProjectStatusEnumSchema';

export const EnumProjectStatusEnumFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumProjectStatusEnumFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => ProjectStatusEnumSchema).optional(),
});

export default EnumProjectStatusEnumFieldUpdateOperationsInputSchema;
