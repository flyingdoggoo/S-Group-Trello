import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/app.ts'],
  format: ['esm'],
  splitting: false,
  sourcemap: true,
  clean: true,
  outDir: './dist',
  bundle: true,
  skipNodeModulesBundle: false,
  external: [
    'bcrypt',
    '@prisma/client',
    'express',
    'cors',
    'helmet',
    'morgan',
    'passport',
    'passport-google-oauth20',
    'cookie-parser',
    'nodemailer',
  ],
  esbuildOptions(options) {
    options.mainFields = ['module', 'main'];
  },
});


