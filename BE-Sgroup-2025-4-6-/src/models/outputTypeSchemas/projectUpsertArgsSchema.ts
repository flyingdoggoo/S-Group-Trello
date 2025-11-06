import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { projectIncludeSchema } from '../inputTypeSchemas/projectIncludeSchema'
import { projectWhereUniqueInputSchema } from '../inputTypeSchemas/projectWhereUniqueInputSchema'
import { projectCreateInputSchema } from '../inputTypeSchemas/projectCreateInputSchema'
import { projectUncheckedCreateInputSchema } from '../inputTypeSchemas/projectUncheckedCreateInputSchema'
import { projectUpdateInputSchema } from '../inputTypeSchemas/projectUpdateInputSchema'
import { projectUncheckedUpdateInputSchema } from '../inputTypeSchemas/projectUncheckedUpdateInputSchema'
import { ProjectMemberFindManyArgsSchema } from "../outputTypeSchemas/ProjectMemberFindManyArgsSchema"
import { BoardFindManyArgsSchema } from "../outputTypeSchemas/BoardFindManyArgsSchema"
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
  Board: z.union([z.boolean(),z.lazy(() => BoardFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ProjectCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const projectUpsertArgsSchema: z.ZodType<Prisma.projectUpsertArgs> = z.object({
  select: projectSelectSchema.optional(),
  include: z.lazy(() => projectIncludeSchema).optional(),
  where: projectWhereUniqueInputSchema, 
  create: z.union([ projectCreateInputSchema, projectUncheckedCreateInputSchema ]),
  update: z.union([ projectUpdateInputSchema, projectUncheckedUpdateInputSchema ]),
}).strict();

export default projectUpsertArgsSchema;
