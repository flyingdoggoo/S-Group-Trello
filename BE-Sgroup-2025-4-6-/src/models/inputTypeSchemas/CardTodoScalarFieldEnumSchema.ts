import { z } from 'zod';

export const CardTodoScalarFieldEnumSchema = z.enum(['id','cardId','title','completed','position','createdAt','updatedAt']);

export default CardTodoScalarFieldEnumSchema;
