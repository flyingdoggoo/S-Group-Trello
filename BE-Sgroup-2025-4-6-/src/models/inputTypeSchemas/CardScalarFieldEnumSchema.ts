import { z } from 'zod';

export const CardScalarFieldEnumSchema = z.enum(['id','listId','title','description','position','createdAt','updatedAt','deletedAt']);

export default CardScalarFieldEnumSchema;
