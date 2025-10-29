import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { otpsWhereInputSchema } from '../inputTypeSchemas/otpsWhereInputSchema'
import { otpsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/otpsOrderByWithAggregationInputSchema'
import { OtpsScalarFieldEnumSchema } from '../inputTypeSchemas/OtpsScalarFieldEnumSchema'
import { otpsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/otpsScalarWhereWithAggregatesInputSchema'

export const otpsGroupByArgsSchema: z.ZodType<Prisma.otpsGroupByArgs> = z.object({
  where: otpsWhereInputSchema.optional(), 
  orderBy: z.union([ otpsOrderByWithAggregationInputSchema.array(), otpsOrderByWithAggregationInputSchema ]).optional(),
  by: OtpsScalarFieldEnumSchema.array(), 
  having: otpsScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default otpsGroupByArgsSchema;
