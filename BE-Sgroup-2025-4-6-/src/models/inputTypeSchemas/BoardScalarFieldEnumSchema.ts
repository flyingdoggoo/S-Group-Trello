import { z } from 'zod';

export const BoardScalarFieldEnumSchema = z.enum(['id','slug','projectId','title','description','status','coverUrl','createdAt','updatedAt','deletedAt']);

export default BoardScalarFieldEnumSchema;
