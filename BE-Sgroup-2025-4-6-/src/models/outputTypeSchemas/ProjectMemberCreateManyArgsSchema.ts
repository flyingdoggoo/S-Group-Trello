import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectMemberCreateManyInputSchema } from '../inputTypeSchemas/ProjectMemberCreateManyInputSchema'

export const ProjectMemberCreateManyArgsSchema: z.ZodType<Prisma.ProjectMemberCreateManyArgs> = z.object({
  data: z.union([ ProjectMemberCreateManyInputSchema, ProjectMemberCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default ProjectMemberCreateManyArgsSchema;
