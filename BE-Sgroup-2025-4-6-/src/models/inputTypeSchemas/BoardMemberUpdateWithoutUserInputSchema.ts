import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { BoardUpdateOneRequiredWithoutBoardMemberNestedInputSchema } from './BoardUpdateOneRequiredWithoutBoardMemberNestedInputSchema';
import { rolesUpdateOneRequiredWithoutBoardMemberNestedInputSchema } from './rolesUpdateOneRequiredWithoutBoardMemberNestedInputSchema';

export const BoardMemberUpdateWithoutUserInputSchema: z.ZodType<Prisma.BoardMemberUpdateWithoutUserInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  joinedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  board: z.lazy(() => BoardUpdateOneRequiredWithoutBoardMemberNestedInputSchema).optional(),
  role: z.lazy(() => rolesUpdateOneRequiredWithoutBoardMemberNestedInputSchema).optional(),
});

export default BoardMemberUpdateWithoutUserInputSchema;
