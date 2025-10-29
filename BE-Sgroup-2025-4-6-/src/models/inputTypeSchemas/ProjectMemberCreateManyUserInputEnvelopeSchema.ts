import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectMemberCreateManyUserInputSchema } from './ProjectMemberCreateManyUserInputSchema';

export const ProjectMemberCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.ProjectMemberCreateManyUserInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => ProjectMemberCreateManyUserInputSchema), z.lazy(() => ProjectMemberCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default ProjectMemberCreateManyUserInputEnvelopeSchema;
