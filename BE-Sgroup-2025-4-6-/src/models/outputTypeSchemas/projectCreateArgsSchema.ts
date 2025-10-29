import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { projectIncludeSchema } from '../inputTypeSchemas/projectIncludeSchema'
import { projectCreateInputSchema } from '../inputTypeSchemas/projectCreateInputSchema'
import { projectUncheckedCreateInputSchema } from '../inputTypeSchemas/projectUncheckedCreateInputSchema'
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

export const projectCreateArgsSchema: z.ZodType<Prisma.projectCreateArgs> = z.object({
  select: projectSelectSchema.optional(),
  include: z.lazy(() => projectIncludeSchema).optional(),
  data: z.union([ projectCreateInputSchema, projectUncheckedCreateInputSchema ]),
}).strict();

export default projectCreateArgsSchema;
