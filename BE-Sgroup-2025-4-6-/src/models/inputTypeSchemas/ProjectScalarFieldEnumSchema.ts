import { z } from 'zod';

export const ProjectScalarFieldEnumSchema = z.enum(['id','title','description','createdAt','updatedAt','deletedAt','status']);

export default ProjectScalarFieldEnumSchema;
