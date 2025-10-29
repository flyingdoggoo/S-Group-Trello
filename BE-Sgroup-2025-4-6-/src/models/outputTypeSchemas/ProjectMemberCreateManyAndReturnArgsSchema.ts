import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectMemberCreateManyInputSchema } from '../inputTypeSchemas/ProjectMemberCreateManyInputSchema'

export const ProjectMemberCreateManyAndReturnArgsSchema: z.ZodType<Prisma.ProjectMemberCreateManyAndReturnArgs> = z.object({
  data: z.union([ ProjectMemberCreateManyInputSchema, ProjectMemberCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default ProjectMemberCreateManyAndReturnArgsSchema;
