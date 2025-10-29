import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { permissionArgsSchema } from "../outputTypeSchemas/permissionArgsSchema"
import { rolesArgsSchema } from "../outputTypeSchemas/rolesArgsSchema"

export const RolePermissionIncludeSchema: z.ZodType<Prisma.RolePermissionInclude> = z.object({
  permission: z.union([z.boolean(),z.lazy(() => permissionArgsSchema)]).optional(),
  role: z.union([z.boolean(),z.lazy(() => rolesArgsSchema)]).optional(),
}).strict();

export default RolePermissionIncludeSchema;
