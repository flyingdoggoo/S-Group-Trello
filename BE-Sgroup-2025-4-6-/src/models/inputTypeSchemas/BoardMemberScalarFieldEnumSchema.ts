import { z } from 'zod';

export const BoardMemberScalarFieldEnumSchema = z.enum(['id','boardId','userId','roleId','joinedAt']);

export default BoardMemberScalarFieldEnumSchema;
