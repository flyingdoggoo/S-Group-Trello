import { z } from 'zod';

export const InvitationsScalarFieldEnumSchema = z.enum(['id','projectId','boardId','email','roleId','token','status','createdBy','createdAt','expiresAt','acceptedAt']);

export default InvitationsScalarFieldEnumSchema;
