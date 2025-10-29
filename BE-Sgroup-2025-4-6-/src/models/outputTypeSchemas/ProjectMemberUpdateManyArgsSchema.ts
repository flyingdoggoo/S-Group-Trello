import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectMemberUpdateManyMutationInputSchema } from '../inputTypeSchemas/ProjectMemberUpdateManyMutationInputSchema'
import { ProjectMemberUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ProjectMemberUncheckedUpdateManyInputSchema'
import { ProjectMemberWhereInputSchema } from '../inputTypeSchemas/ProjectMemberWhereInputSchema'

export const ProjectMemberUpdateManyArgsSchema: z.ZodType<Prisma.ProjectMemberUpdateManyArgs> = z.object({
  data: z.union([ ProjectMemberUpdateManyMutationInputSchema, ProjectMemberUncheckedUpdateManyInputSchema ]),
  where: ProjectMemberWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default ProjectMemberUpdateManyArgsSchema;
