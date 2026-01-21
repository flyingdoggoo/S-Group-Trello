import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { CardUpdateOneRequiredWithoutCommentsNestedInputSchema } from './CardUpdateOneRequiredWithoutCommentsNestedInputSchema';
import { usersUpdateOneRequiredWithoutCardCommentNestedInputSchema } from './usersUpdateOneRequiredWithoutCardCommentNestedInputSchema';

export const CardCommentUpdateInputSchema: z.ZodType<Prisma.CardCommentUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  content: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  card: z.lazy(() => CardUpdateOneRequiredWithoutCommentsNestedInputSchema).optional(),
  user: z.lazy(() => usersUpdateOneRequiredWithoutCardCommentNestedInputSchema).optional(),
});

export default CardCommentUpdateInputSchema;
