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
  noExternal: [/.*/],
  external: [
    'bcrypt',
    '@prisma/client',
  ],
  esbuildOptions(options) {
    options.mainFields = ['module', 'main'];
  },
});


