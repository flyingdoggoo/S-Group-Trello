import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvitationsWhereInputSchema } from '../inputTypeSchemas/InvitationsWhereInputSchema'
import { InvitationsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/InvitationsOrderByWithAggregationInputSchema'
import { InvitationsScalarFieldEnumSchema } from '../inputTypeSchemas/InvitationsScalarFieldEnumSchema'
import { InvitationsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/InvitationsScalarWhereWithAggregatesInputSchema'

export const InvitationsGroupByArgsSchema: z.ZodType<Prisma.InvitationsGroupByArgs> = z.object({
  where: InvitationsWhereInputSchema.optional(), 
  orderBy: z.union([ InvitationsOrderByWithAggregationInputSchema.array(), InvitationsOrderByWithAggregationInputSchema ]).optional(),
  by: InvitationsScalarFieldEnumSchema.array(), 
  having: InvitationsScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default InvitationsGroupByArgsSchema;
