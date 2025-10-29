import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const rolesCountOutputTypeSelectSchema: z.ZodType<Prisma.rolesCountOutputTypeSelect> = z.object({
  projectMembers: z.boolean().optional(),
  RolePermission: z.boolean().optional(),
  UserRole: z.boolean().optional(),
}).strict();

export default rolesCountOutputTypeSelectSchema;
