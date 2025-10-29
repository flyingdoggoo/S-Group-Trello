import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { permissionWhereInputSchema } from '../inputTypeSchemas/permissionWhereInputSchema'
import { permissionOrderByWithAggregationInputSchema } from '../inputTypeSchemas/permissionOrderByWithAggregationInputSchema'
import { PermissionScalarFieldEnumSchema } from '../inputTypeSchemas/PermissionScalarFieldEnumSchema'
import { permissionScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/permissionScalarWhereWithAggregatesInputSchema'

export const permissionGroupByArgsSchema: z.ZodType<Prisma.permissionGroupByArgs> = z.object({
  where: permissionWhereInputSchema.optional(), 
  orderBy: z.union([ permissionOrderByWithAggregationInputSchema.array(), permissionOrderByWithAggregationInputSchema ]).optional(),
  by: PermissionScalarFieldEnumSchema.array(), 
  having: permissionScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default permissionGroupByArgsSchema;
