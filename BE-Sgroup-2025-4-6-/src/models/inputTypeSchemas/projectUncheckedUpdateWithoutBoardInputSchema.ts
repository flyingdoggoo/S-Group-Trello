import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { ProjectStatusEnumSchema } from './ProjectStatusEnumSchema';
import { EnumProjectStatusEnumFieldUpdateOperationsInputSchema } from './EnumProjectStatusEnumFieldUpdateOperationsInputSchema';
import { ProjectMemberUncheckedUpdateManyWithoutProjectNestedInputSchema } from './ProjectMemberUncheckedUpdateManyWithoutProjectNestedInputSchema';
import { InvitationsUncheckedUpdateManyWithoutProjectNestedInputSchema } from './InvitationsUncheckedUpdateManyWithoutProjectNestedInputSchema';

export const projectUncheckedUpdateWithoutBoardInputSchema: z.ZodType<Prisma.projectUncheckedUpdateWithoutBoardInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.lazy(() => ProjectStatusEnumSchema), z.lazy(() => EnumProjectStatusEnumFieldUpdateOperationsInputSchema) ]).optional(),
  members: z.lazy(() => ProjectMemberUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
  invitation: z.lazy(() => InvitationsUncheckedUpdateManyWithoutProjectNestedInputSchema).optional(),
});

export default projectUncheckedUpdateWithoutBoardInputSchema;
