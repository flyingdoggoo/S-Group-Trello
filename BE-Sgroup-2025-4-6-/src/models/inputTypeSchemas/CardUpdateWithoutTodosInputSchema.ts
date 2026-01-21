import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { CardStatusEnumSchema } from './CardStatusEnumSchema';
import { EnumCardStatusEnumFieldUpdateOperationsInputSchema } from './EnumCardStatusEnumFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { ListUpdateOneRequiredWithoutCardNestedInputSchema } from './ListUpdateOneRequiredWithoutCardNestedInputSchema';
import { CardTagUpdateManyWithoutCardNestedInputSchema } from './CardTagUpdateManyWithoutCardNestedInputSchema';
import { CardMemberUpdateManyWithoutCardNestedInputSchema } from './CardMemberUpdateManyWithoutCardNestedInputSchema';
import { CardCommentUpdateManyWithoutCardNestedInputSchema } from './CardCommentUpdateManyWithoutCardNestedInputSchema';

export const CardUpdateWithoutTodosInputSchema: z.ZodType<Prisma.CardUpdateWithoutTodosInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  position: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => CardStatusEnumSchema), z.lazy(() => EnumCardStatusEnumFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  list: z.lazy(() => ListUpdateOneRequiredWithoutCardNestedInputSchema).optional(),
  tags: z.lazy(() => CardTagUpdateManyWithoutCardNestedInputSchema).optional(),
  members: z.lazy(() => CardMemberUpdateManyWithoutCardNestedInputSchema).optional(),
  comments: z.lazy(() => CardCommentUpdateManyWithoutCardNestedInputSchema).optional(),
});

export default CardUpdateWithoutTodosInputSchema;
