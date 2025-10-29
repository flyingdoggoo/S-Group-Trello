import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { permissionSelectSchema } from '../inputTypeSchemas/permissionSelectSchema';
import { permissionIncludeSchema } from '../inputTypeSchemas/permissionIncludeSchema';

export const permissionArgsSchema: z.ZodType<Prisma.permissionDefaultArgs> = z.object({
  select: z.lazy(() => permissionSelectSchema).optional(),
  include: z.lazy(() => permissionIncludeSchema).optional(),
}).strict();

export default permissionArgsSchema;
