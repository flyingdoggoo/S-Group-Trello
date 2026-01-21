import { z } from 'zod';

export const CardScalarFieldEnumSchema = z.enum(['id','listId','title','description','position','status','createdAt','updatedAt','deletedAt']);

export default CardScalarFieldEnumSchema;
