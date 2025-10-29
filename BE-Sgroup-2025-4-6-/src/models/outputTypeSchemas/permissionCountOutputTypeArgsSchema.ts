import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { permissionCountOutputTypeSelectSchema } from './permissionCountOutputTypeSelectSchema';

export const permissionCountOutputTypeArgsSchema: z.ZodType<Prisma.permissionCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => permissionCountOutputTypeSelectSchema).nullish(),
}).strict();

export default permissionCountOutputTypeSelectSchema;
