import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvitationsWhereInputSchema } from '../inputTypeSchemas/InvitationsWhereInputSchema'
import { InvitationsOrderByWithRelationInputSchema } from '../inputTypeSchemas/InvitationsOrderByWithRelationInputSchema'
import { InvitationsWhereUniqueInputSchema } from '../inputTypeSchemas/InvitationsWhereUniqueInputSchema'

export const InvitationsAggregateArgsSchema: z.ZodType<Prisma.InvitationsAggregateArgs> = z.object({
  where: InvitationsWhereInputSchema.optional(), 
  orderBy: z.union([ InvitationsOrderByWithRelationInputSchema.array(), InvitationsOrderByWithRelationInputSchema ]).optional(),
  cursor: InvitationsWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default InvitationsAggregateArgsSchema;
