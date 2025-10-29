import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { projectUpdateOneRequiredWithoutMembersNestedInputSchema } from './projectUpdateOneRequiredWithoutMembersNestedInputSchema';
import { usersUpdateOneRequiredWithoutProjectMembersNestedInputSchema } from './usersUpdateOneRequiredWithoutProjectMembersNestedInputSchema';
import { rolesUpdateOneRequiredWithoutProjectMembersNestedInputSchema } from './rolesUpdateOneRequiredWithoutProjectMembersNestedInputSchema';

export const ProjectMemberUpdateInputSchema: z.ZodType<Prisma.ProjectMemberUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  project: z.lazy(() => projectUpdateOneRequiredWithoutMembersNestedInputSchema).optional(),
  user: z.lazy(() => usersUpdateOneRequiredWithoutProjectMembersNestedInputSchema).optional(),
  role: z.lazy(() => rolesUpdateOneRequiredWithoutProjectMembersNestedInputSchema).optional(),
});

export default ProjectMemberUpdateInputSchema;
