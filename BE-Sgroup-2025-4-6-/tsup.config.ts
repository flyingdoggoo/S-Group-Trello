import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/app.ts'],
  format: ['cjs'],
  splitting: false,
  sourcemap: true,
  clean: true,
  outDir: './dist',
  skipNodeModulesBundle: false,
  noExternal: [/(.*)/],
  external: [
    'bcrypt',
    '@prisma/client',
  ],
});


// import { defineConfig } from 'tsup';

// export default defineConfig({
//   entry: ['./src/app.ts'],
//   format: ['cjs'],
//   splitting: false,
//   sourcemap: true,
//   clean: true,
//   outDir: './dist',
//   bundle: true,
//   platform: 'node',
//   target: 'node18',
//   external: [
//     'bcrypt',
//     '@prisma/client',
//   ],
// });
