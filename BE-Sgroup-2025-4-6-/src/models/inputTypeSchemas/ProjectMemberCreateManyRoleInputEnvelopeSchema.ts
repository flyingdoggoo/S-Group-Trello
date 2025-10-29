import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectMemberCreateManyRoleInputSchema } from './ProjectMemberCreateManyRoleInputSchema';

export const ProjectMemberCreateManyRoleInputEnvelopeSchema: z.ZodType<Prisma.ProjectMemberCreateManyRoleInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => ProjectMemberCreateManyRoleInputSchema), z.lazy(() => ProjectMemberCreateManyRoleInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default ProjectMemberCreateManyRoleInputEnvelopeSchema;
