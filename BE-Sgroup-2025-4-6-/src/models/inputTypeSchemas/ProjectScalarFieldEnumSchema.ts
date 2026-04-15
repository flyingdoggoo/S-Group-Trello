import { z } from 'zod';

export const ProjectScalarFieldEnumSchema = z.enum(['id','slug','title','description','createdAt','updatedAt','deletedAt','status']);

export default ProjectScalarFieldEnumSchema;
