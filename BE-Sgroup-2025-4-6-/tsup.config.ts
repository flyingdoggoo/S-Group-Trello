import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/app.ts'],
  format: ['esm'],
  splitting: false,
  sourcemap: true,
  clean: true,
  outDir: './dist',
  skipNodeModulesBundle: true,
  external: [
    'bcrypt',
    '@prisma/client',
  ],
});


