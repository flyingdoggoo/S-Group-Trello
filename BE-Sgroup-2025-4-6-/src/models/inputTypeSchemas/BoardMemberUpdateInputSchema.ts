import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BoardUpdateOneRequiredWithoutBoardMemberNestedInputSchema } from './BoardUpdateOneRequiredWithoutBoardMemberNestedInputSchema';
import { usersUpdateOneRequiredWithoutBoardMemberNestedInputSchema } from './usersUpdateOneRequiredWithoutBoardMemberNestedInputSchema';
import { rolesUpdateOneRequiredWithoutBoardMemberNestedInputSchema } from './rolesUpdateOneRequiredWithoutBoardMemberNestedInputSchema';

export const BoardMemberUpdateInputSchema: z.ZodType<Prisma.BoardMemberUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  board: z.lazy(() => BoardUpdateOneRequiredWithoutBoardMemberNestedInputSchema).optional(),
  user: z.lazy(() => usersUpdateOneRequiredWithoutBoardMemberNestedInputSchema).optional(),
  role: z.lazy(() => rolesUpdateOneRequiredWithoutBoardMemberNestedInputSchema).optional(),
});

export default BoardMemberUpdateInputSchema;
