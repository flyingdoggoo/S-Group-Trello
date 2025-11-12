import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { IntFieldUpdateOperationsInputSchema } from './IntFieldUpdateOperationsInputSchema';
import { ListStatusEnumSchema } from './ListStatusEnumSchema';
import { EnumListStatusEnumFieldUpdateOperationsInputSchema } from './EnumListStatusEnumFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { CardUncheckedUpdateManyWithoutListNestedInputSchema } from './CardUncheckedUpdateManyWithoutListNestedInputSchema';

export const ListUncheckedUpdateWithoutBoardInputSchema: z.ZodType<Prisma.ListUncheckedUpdateWithoutBoardInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  position: z.union([ z.number().int(),z.lazy(() => IntFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => ListStatusEnumSchema), z.lazy(() => EnumListStatusEnumFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  Card: z.lazy(() => CardUncheckedUpdateManyWithoutListNestedInputSchema).optional(),
});

export default ListUncheckedUpdateWithoutBoardInputSchema;
