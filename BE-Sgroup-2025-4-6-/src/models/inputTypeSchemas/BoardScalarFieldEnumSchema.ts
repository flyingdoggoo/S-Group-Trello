import { z } from 'zod';

export const BoardScalarFieldEnumSchema = z.enum(['id','projectId','title','description','status','coverUrl','createdAt','updatedAt','deletedAt']);

export default BoardScalarFieldEnumSchema;
