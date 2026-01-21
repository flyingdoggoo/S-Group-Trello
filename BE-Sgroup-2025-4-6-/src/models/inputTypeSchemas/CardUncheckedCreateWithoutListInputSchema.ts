import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardStatusEnumSchema } from './CardStatusEnumSchema';
import { CardTagUncheckedCreateNestedManyWithoutCardInputSchema } from './CardTagUncheckedCreateNestedManyWithoutCardInputSchema';
import { CardTodoUncheckedCreateNestedManyWithoutCardInputSchema } from './CardTodoUncheckedCreateNestedManyWithoutCardInputSchema';
import { CardMemberUncheckedCreateNestedManyWithoutCardInputSchema } from './CardMemberUncheckedCreateNestedManyWithoutCardInputSchema';
import { CardCommentUncheckedCreateNestedManyWithoutCardInputSchema } from './CardCommentUncheckedCreateNestedManyWithoutCardInputSchema';

export const CardUncheckedCreateWithoutListInputSchema: z.ZodType<Prisma.CardUncheckedCreateWithoutListInput> = z.strictObject({
  id: z.uuid().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  position: z.number().int(),
  status: z.lazy(() => CardStatusEnumSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  tags: z.lazy(() => CardTagUncheckedCreateNestedManyWithoutCardInputSchema).optional(),
  todos: z.lazy(() => CardTodoUncheckedCreateNestedManyWithoutCardInputSchema).optional(),
  members: z.lazy(() => CardMemberUncheckedCreateNestedManyWithoutCardInputSchema).optional(),
  comments: z.lazy(() => CardCommentUncheckedCreateNestedManyWithoutCardInputSchema).optional(),
});

export default CardUncheckedCreateWithoutListInputSchema;
