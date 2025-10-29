import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RolePermissionFindManyArgsSchema } from "../outputTypeSchemas/RolePermissionFindManyArgsSchema"
import { PermissionCountOutputTypeArgsSchema } from "../outputTypeSchemas/PermissionCountOutputTypeArgsSchema"

export const permissionIncludeSchema: z.ZodType<Prisma.permissionInclude> = z.object({
  RolePermission: z.union([z.boolean(),z.lazy(() => RolePermissionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PermissionCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default permissionIncludeSchema;
