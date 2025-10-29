import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { usersUpdateOneRequiredWithoutProjectMembersNestedInputSchema } from './usersUpdateOneRequiredWithoutProjectMembersNestedInputSchema';
import { rolesUpdateOneRequiredWithoutProjectMembersNestedInputSchema } from './rolesUpdateOneRequiredWithoutProjectMembersNestedInputSchema';

export const ProjectMemberUpdateWithoutProjectInputSchema: z.ZodType<Prisma.ProjectMemberUpdateWithoutProjectInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => usersUpdateOneRequiredWithoutProjectMembersNestedInputSchema).optional(),
  role: z.lazy(() => rolesUpdateOneRequiredWithoutProjectMembersNestedInputSchema).optional(),
});

export default ProjectMemberUpdateWithoutProjectInputSchema;
