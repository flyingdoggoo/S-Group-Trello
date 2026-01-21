import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { CardStatusEnumSchema } from './CardStatusEnumSchema';
import { EnumCardStatusEnumFieldUpdateOperationsInputSchema } from './EnumCardStatusEnumFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { CardTagUncheckedUpdateManyWithoutCardNestedInputSchema } from './CardTagUncheckedUpdateManyWithoutCardNestedInputSchema';
import { CardTodoUncheckedUpdateManyWithoutCardNestedInputSchema } from './CardTodoUncheckedUpdateManyWithoutCardNestedInputSchema';
import { CardMemberUncheckedUpdateManyWithoutCardNestedInputSchema } from './CardMemberUncheckedUpdateManyWithoutCardNestedInputSchema';
import { CardCommentUncheckedUpdateManyWithoutCardNestedInputSchema } from './CardCommentUncheckedUpdateManyWithoutCardNestedInputSchema';

export const CardUncheckedUpdateWithoutListInputSchema: z.ZodType<Prisma.CardUncheckedUpdateWithoutListInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  description: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  position: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => CardStatusEnumSchema), z.lazy(() => EnumCardStatusEnumFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  tags: z.lazy(() => CardTagUncheckedUpdateManyWithoutCardNestedInputSchema).optional(),
  todos: z.lazy(() => CardTodoUncheckedUpdateManyWithoutCardNestedInputSchema).optional(),
  members: z.lazy(() => CardMemberUncheckedUpdateManyWithoutCardNestedInputSchema).optional(),
  comments: z.lazy(() => CardCommentUncheckedUpdateManyWithoutCardNestedInputSchema).optional(),
});

export default CardUncheckedUpdateWithoutListInputSchema;
