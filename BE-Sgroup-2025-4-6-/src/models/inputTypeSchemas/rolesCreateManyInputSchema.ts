import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const rolesCreateManyInputSchema: z.ZodType<Prisma.rolesCreateManyInput> = z.strictObject({
  id: z.uuid().optional(),
  roleName: z.string(),
  desciption: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
});

export default rolesCreateManyInputSchema;
