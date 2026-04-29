import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

// Tests, their toolchain (devDeps below), and the peer-package stubs
// all live under tests/ so the branding package's root package.json
// has no devDependencies — consumers linking via `file:` never pull
// in vitest, testing-library, jsdom, etc., and `npm ci` on the
// consumer side stays synced across stub/real swaps.
const here = path.dirname(fileURLToPath(import.meta.url));
const stub = (file: string) => path.resolve(here, file);

// The source imports from opub-ui, next/image, next/link, and static
// asset files. None of those are installed here — they're peer deps of
// the consumer. Alias each to a local stub so Vite can resolve them
// without installing the real peer packages just to run unit tests.
export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: [stub('setup.ts')],
  },
  resolve: {
    alias: [
      { find: 'opub-ui', replacement: stub('opub-ui-stub.tsx') },
      { find: 'next/image', replacement: stub('next-image-stub.tsx') },
      { find: 'next/link', replacement: stub('next-link-stub.tsx') },
      {
        find: /^.*\.(png|jpg|jpeg|svg|webp)$/,
        replacement: stub('asset-stub.ts'),
      },
    ],
  },
  // Tests import from ../src/, which is outside vitest's default
  // root (this tests/ dir). Allow Vite to serve files from the
  // branding package root.
  server: {
    fs: {
      allow: [path.resolve(here, '..')],
    },
  },
});
