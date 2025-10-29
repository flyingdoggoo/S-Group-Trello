import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const permissionCountOutputTypeSelectSchema: z.ZodType<Prisma.permissionCountOutputTypeSelect> = z.object({
  RolePermission: z.boolean().optional(),
}).strict();

export default permissionCountOutputTypeSelectSchema;
