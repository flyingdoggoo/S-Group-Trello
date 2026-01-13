import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { projectWhereInputSchema } from './projectWhereInputSchema';

export const ProjectNullableScalarRelationFilterSchema: z.ZodType<Prisma.ProjectNullableScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => projectWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => projectWhereInputSchema).optional().nullable(),
});

export default ProjectNullableScalarRelationFilterSchema;
