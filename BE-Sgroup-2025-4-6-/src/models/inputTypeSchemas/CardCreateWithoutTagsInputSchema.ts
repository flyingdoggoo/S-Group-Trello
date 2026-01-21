import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardStatusEnumSchema } from './CardStatusEnumSchema';
import { ListCreateNestedOneWithoutCardInputSchema } from './ListCreateNestedOneWithoutCardInputSchema';
import { CardTodoCreateNestedManyWithoutCardInputSchema } from './CardTodoCreateNestedManyWithoutCardInputSchema';
import { CardMemberCreateNestedManyWithoutCardInputSchema } from './CardMemberCreateNestedManyWithoutCardInputSchema';
import { CardCommentCreateNestedManyWithoutCardInputSchema } from './CardCommentCreateNestedManyWithoutCardInputSchema';

export const CardCreateWithoutTagsInputSchema: z.ZodType<Prisma.CardCreateWithoutTagsInput> = z.strictObject({
  id: z.uuid().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  position: z.number().int(),
  status: z.lazy(() => CardStatusEnumSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  list: z.lazy(() => ListCreateNestedOneWithoutCardInputSchema),
  todos: z.lazy(() => CardTodoCreateNestedManyWithoutCardInputSchema).optional(),
  members: z.lazy(() => CardMemberCreateNestedManyWithoutCardInputSchema).optional(),
  comments: z.lazy(() => CardCommentCreateNestedManyWithoutCardInputSchema).optional(),
});

export default CardCreateWithoutTagsInputSchema;
