import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { projectIncludeSchema } from '../inputTypeSchemas/projectIncludeSchema'
import { projectWhereInputSchema } from '../inputTypeSchemas/projectWhereInputSchema'
import { projectOrderByWithRelationInputSchema } from '../inputTypeSchemas/projectOrderByWithRelationInputSchema'
import { projectWhereUniqueInputSchema } from '../inputTypeSchemas/projectWhereUniqueInputSchema'
import { ProjectScalarFieldEnumSchema } from '../inputTypeSchemas/ProjectScalarFieldEnumSchema'
import { ProjectMemberFindManyArgsSchema } from "../outputTypeSchemas/ProjectMemberFindManyArgsSchema"
import { ProjectCountOutputTypeArgsSchema } from "../outputTypeSchemas/ProjectCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const projectSelectSchema: z.ZodType<Prisma.projectSelect> = z.object({
  id: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  status: z.boolean().optional(),
  members: z.union([z.boolean(),z.lazy(() => ProjectMemberFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProjectCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const projectFindFirstOrThrowArgsSchema: z.ZodType<Prisma.projectFindFirstOrThrowArgs> = z.object({
  select: projectSelectSchema.optional(),
  include: z.lazy(() => projectIncludeSchema).optional(),
  where: projectWhereInputSchema.optional(), 
  orderBy: z.union([ projectOrderByWithRelationInputSchema.array(), projectOrderByWithRelationInputSchema ]).optional(),
  cursor: projectWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProjectScalarFieldEnumSchema, ProjectScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default projectFindFirstOrThrowArgsSchema;
