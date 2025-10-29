import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectMemberCreateManyProjectInputSchema } from './ProjectMemberCreateManyProjectInputSchema';

export const ProjectMemberCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.ProjectMemberCreateManyProjectInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => ProjectMemberCreateManyProjectInputSchema), z.lazy(() => ProjectMemberCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default ProjectMemberCreateManyProjectInputEnvelopeSchema;
