import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectMemberWhereInputSchema } from '../inputTypeSchemas/ProjectMemberWhereInputSchema'

export const ProjectMemberDeleteManyArgsSchema: z.ZodType<Prisma.ProjectMemberDeleteManyArgs> = z.object({
  where: ProjectMemberWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default ProjectMemberDeleteManyArgsSchema;
