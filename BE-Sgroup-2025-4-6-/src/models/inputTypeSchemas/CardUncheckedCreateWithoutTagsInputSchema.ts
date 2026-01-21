import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardStatusEnumSchema } from './CardStatusEnumSchema';
import { CardTodoUncheckedCreateNestedManyWithoutCardInputSchema } from './CardTodoUncheckedCreateNestedManyWithoutCardInputSchema';
import { CardMemberUncheckedCreateNestedManyWithoutCardInputSchema } from './CardMemberUncheckedCreateNestedManyWithoutCardInputSchema';
import { CardCommentUncheckedCreateNestedManyWithoutCardInputSchema } from './CardCommentUncheckedCreateNestedManyWithoutCardInputSchema';

export const CardUncheckedCreateWithoutTagsInputSchema: z.ZodType<Prisma.CardUncheckedCreateWithoutTagsInput> = z.strictObject({
  id: z.uuid().optional(),
  listId: z.string(),
  title: z.string(),
  description: z.string().optional().nullable(),
  position: z.number().int(),
  status: z.lazy(() => CardStatusEnumSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  todos: z.lazy(() => CardTodoUncheckedCreateNestedManyWithoutCardInputSchema).optional(),
  members: z.lazy(() => CardMemberUncheckedCreateNestedManyWithoutCardInputSchema).optional(),
  comments: z.lazy(() => CardCommentUncheckedCreateNestedManyWithoutCardInputSchema).optional(),
});

export default CardUncheckedCreateWithoutTagsInputSchema;
