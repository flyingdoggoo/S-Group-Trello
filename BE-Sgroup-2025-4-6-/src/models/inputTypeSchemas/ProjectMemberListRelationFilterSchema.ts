import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectMemberWhereInputSchema } from './ProjectMemberWhereInputSchema';

export const ProjectMemberListRelationFilterSchema: z.ZodType<Prisma.ProjectMemberListRelationFilter> = z.strictObject({
  every: z.lazy(() => ProjectMemberWhereInputSchema).optional(),
  some: z.lazy(() => ProjectMemberWhereInputSchema).optional(),
  none: z.lazy(() => ProjectMemberWhereInputSchema).optional(),
});

export default ProjectMemberListRelationFilterSchema;
