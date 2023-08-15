/** @type {import('vite').UserConfig} */
import tsconfigPaths from 'vite-tsconfig-paths';

export default {
  server: {
    port: 8080
  },
  plugins: [tsconfigPaths()]
};