import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { projectUpdateOneRequiredWithoutMembersNestedInputSchema } from './projectUpdateOneRequiredWithoutMembersNestedInputSchema';
import { rolesUpdateOneRequiredWithoutProjectMembersNestedInputSchema } from './rolesUpdateOneRequiredWithoutProjectMembersNestedInputSchema';

export const ProjectMemberUpdateWithoutUserInputSchema: z.ZodType<Prisma.ProjectMemberUpdateWithoutUserInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  project: z.lazy(() => projectUpdateOneRequiredWithoutMembersNestedInputSchema).optional(),
  role: z.lazy(() => rolesUpdateOneRequiredWithoutProjectMembersNestedInputSchema).optional(),
});

export default ProjectMemberUpdateWithoutUserInputSchema;
