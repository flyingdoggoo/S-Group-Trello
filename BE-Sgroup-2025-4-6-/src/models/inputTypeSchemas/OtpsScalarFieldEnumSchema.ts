import { z } from 'zod';

export const OtpsScalarFieldEnumSchema = z.enum(['id','userId','otp','expiresAt']);

export default OtpsScalarFieldEnumSchema;
