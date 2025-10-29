import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectMemberCreateWithoutRoleInputSchema } from './ProjectMemberCreateWithoutRoleInputSchema';
import { ProjectMemberUncheckedCreateWithoutRoleInputSchema } from './ProjectMemberUncheckedCreateWithoutRoleInputSchema';
import { ProjectMemberCreateOrConnectWithoutRoleInputSchema } from './ProjectMemberCreateOrConnectWithoutRoleInputSchema';
import { ProjectMemberCreateManyRoleInputEnvelopeSchema } from './ProjectMemberCreateManyRoleInputEnvelopeSchema';
import { ProjectMemberWhereUniqueInputSchema } from './ProjectMemberWhereUniqueInputSchema';

export const ProjectMemberUncheckedCreateNestedManyWithoutRoleInputSchema: z.ZodType<Prisma.ProjectMemberUncheckedCreateNestedManyWithoutRoleInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProjectMemberCreateWithoutRoleInputSchema), z.lazy(() => ProjectMemberCreateWithoutRoleInputSchema).array(), z.lazy(() => ProjectMemberUncheckedCreateWithoutRoleInputSchema), z.lazy(() => ProjectMemberUncheckedCreateWithoutRoleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectMemberCreateOrConnectWithoutRoleInputSchema), z.lazy(() => ProjectMemberCreateOrConnectWithoutRoleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectMemberCreateManyRoleInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProjectMemberWhereUniqueInputSchema), z.lazy(() => ProjectMemberWhereUniqueInputSchema).array() ]).optional(),
});

export default ProjectMemberUncheckedCreateNestedManyWithoutRoleInputSchema;
