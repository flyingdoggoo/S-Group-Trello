import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BoardStatusEnumSchema } from './BoardStatusEnumSchema';
import { EnumBoardStatusEnumFieldUpdateOperationsInputSchema } from './EnumBoardStatusEnumFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { projectUpdateOneRequiredWithoutBoardNestedInputSchema } from './projectUpdateOneRequiredWithoutBoardNestedInputSchema';
import { ListUpdateManyWithoutBoardNestedInputSchema } from './ListUpdateManyWithoutBoardNestedInputSchema';

export const BoardUpdateWithoutBoardMemberInputSchema: z.ZodType<Prisma.BoardUpdateWithoutBoardMemberInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  status: z.union([ z.lazy(() => BoardStatusEnumSchema), z.lazy(() => EnumBoardStatusEnumFieldUpdateOperationsInputSchema) ]).optional(),
  coverUrl: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  project: z.lazy(() => projectUpdateOneRequiredWithoutBoardNestedInputSchema).optional(),
  List: z.lazy(() => ListUpdateManyWithoutBoardNestedInputSchema).optional(),
});

export default BoardUpdateWithoutBoardMemberInputSchema;
