import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardStatusEnumSchema } from './CardStatusEnumSchema';
import { CardTagCreateNestedManyWithoutCardInputSchema } from './CardTagCreateNestedManyWithoutCardInputSchema';
import { CardTodoCreateNestedManyWithoutCardInputSchema } from './CardTodoCreateNestedManyWithoutCardInputSchema';
import { CardMemberCreateNestedManyWithoutCardInputSchema } from './CardMemberCreateNestedManyWithoutCardInputSchema';
import { CardCommentCreateNestedManyWithoutCardInputSchema } from './CardCommentCreateNestedManyWithoutCardInputSchema';

export const CardCreateWithoutListInputSchema: z.ZodType<Prisma.CardCreateWithoutListInput> = z.strictObject({
  id: z.uuid().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  position: z.number().int(),
  status: z.lazy(() => CardStatusEnumSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  tags: z.lazy(() => CardTagCreateNestedManyWithoutCardInputSchema).optional(),
  todos: z.lazy(() => CardTodoCreateNestedManyWithoutCardInputSchema).optional(),
  members: z.lazy(() => CardMemberCreateNestedManyWithoutCardInputSchema).optional(),
  comments: z.lazy(() => CardCommentCreateNestedManyWithoutCardInputSchema).optional(),
});

export default CardCreateWithoutListInputSchema;
