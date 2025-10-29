import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { permissionWhereInputSchema } from '../inputTypeSchemas/permissionWhereInputSchema'
import { permissionOrderByWithRelationInputSchema } from '../inputTypeSchemas/permissionOrderByWithRelationInputSchema'
import { permissionWhereUniqueInputSchema } from '../inputTypeSchemas/permissionWhereUniqueInputSchema'

export const permissionAggregateArgsSchema: z.ZodType<Prisma.permissionAggregateArgs> = z.object({
  where: permissionWhereInputSchema.optional(), 
  orderBy: z.union([ permissionOrderByWithRelationInputSchema.array(), permissionOrderByWithRelationInputSchema ]).optional(),
  cursor: permissionWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default permissionAggregateArgsSchema;
