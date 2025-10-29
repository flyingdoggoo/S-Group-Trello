import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { projectUpdateOneRequiredWithoutMembersNestedInputSchema } from './projectUpdateOneRequiredWithoutMembersNestedInputSchema';
import { usersUpdateOneRequiredWithoutProjectMembersNestedInputSchema } from './usersUpdateOneRequiredWithoutProjectMembersNestedInputSchema';

export const ProjectMemberUpdateWithoutRoleInputSchema: z.ZodType<Prisma.ProjectMemberUpdateWithoutRoleInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  project: z.lazy(() => projectUpdateOneRequiredWithoutMembersNestedInputSchema).optional(),
  user: z.lazy(() => usersUpdateOneRequiredWithoutProjectMembersNestedInputSchema).optional(),
});

export default ProjectMemberUpdateWithoutRoleInputSchema;
