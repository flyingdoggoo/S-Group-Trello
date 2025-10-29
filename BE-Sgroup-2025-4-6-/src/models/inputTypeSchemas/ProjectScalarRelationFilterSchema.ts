import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { projectWhereInputSchema } from './projectWhereInputSchema';

export const ProjectScalarRelationFilterSchema: z.ZodType<Prisma.ProjectScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => projectWhereInputSchema).optional(),
  isNot: z.lazy(() => projectWhereInputSchema).optional(),
});

export default ProjectScalarRelationFilterSchema;
