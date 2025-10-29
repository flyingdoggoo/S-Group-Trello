import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { permissionWhereInputSchema } from '../inputTypeSchemas/permissionWhereInputSchema'

export const permissionDeleteManyArgsSchema: z.ZodType<Prisma.permissionDeleteManyArgs> = z.object({
  where: permissionWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default permissionDeleteManyArgsSchema;
