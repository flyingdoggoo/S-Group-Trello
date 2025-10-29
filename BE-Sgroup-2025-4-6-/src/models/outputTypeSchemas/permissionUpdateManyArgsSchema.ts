import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { permissionUpdateManyMutationInputSchema } from '../inputTypeSchemas/permissionUpdateManyMutationInputSchema'
import { permissionUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/permissionUncheckedUpdateManyInputSchema'
import { permissionWhereInputSchema } from '../inputTypeSchemas/permissionWhereInputSchema'

export const permissionUpdateManyArgsSchema: z.ZodType<Prisma.permissionUpdateManyArgs> = z.object({
  data: z.union([ permissionUpdateManyMutationInputSchema, permissionUncheckedUpdateManyInputSchema ]),
  where: permissionWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default permissionUpdateManyArgsSchema;
