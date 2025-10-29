import { z } from 'zod';

export const ProjectMemberScalarFieldEnumSchema = z.enum(['id','projectId','userId','roleId','joinedAt']);

export default ProjectMemberScalarFieldEnumSchema;
