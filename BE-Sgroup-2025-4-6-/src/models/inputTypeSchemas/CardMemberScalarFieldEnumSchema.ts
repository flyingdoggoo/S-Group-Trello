import { z } from 'zod';

export const CardMemberScalarFieldEnumSchema = z.enum(['id','cardId','userId','joinedAt']);

export default CardMemberScalarFieldEnumSchema;
