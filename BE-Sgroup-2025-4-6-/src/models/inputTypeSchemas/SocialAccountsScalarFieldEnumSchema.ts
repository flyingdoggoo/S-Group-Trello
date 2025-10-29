import { z } from 'zod';

export const SocialAccountsScalarFieldEnumSchema = z.enum(['id','userId','googleId','googleAccessToken','googleRefreshToken']);

export default SocialAccountsScalarFieldEnumSchema;
