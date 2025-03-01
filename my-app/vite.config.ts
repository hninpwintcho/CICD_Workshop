/// <reference types='vite/client' />
/// <reference types='vitest' />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/my-app',
  server: {
    host: true,
    port: 8081,
    allowedHosts: [
      'test-a-testf-4ktox7iaydce-2128511845.us-east-2.elb.amazonaws.com', // ALB hostname
      'd24srs7fuujdui.cloudfront.net'  // CloudFront (if needed)
    ]
  },
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
