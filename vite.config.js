import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'url';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig(async () => {
  const plugins = [react()];

  // Istanbul instrumentation for Cypress E2E coverage
  // Only active when VITE_COVERAGE=true (instrumented dev server)
  if (process.env.VITE_COVERAGE === 'true') {
    const { default: istanbul } = await import('vite-plugin-istanbul');
    plugins.push(
      istanbul({
        include: 'src/**',
        exclude: ['node_modules', 'src/__test__/**'],
        extension: ['.js', '.ts', '.jsx', '.tsx'],
        requireEnv: false,
        cypress: true,
      })
    );
  }

  return {
    plugins,
    base: './',
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
    build: {
      outDir: 'build',
      sourcemap: true,
    },
    server: {
      host: '0.0.0.0',
      port: 3000,
    },
  };
});