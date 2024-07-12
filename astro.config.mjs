import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

// https://astro.build/config
export default defineConfig({
  output: 'hybrid',
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  vite: {
    plugins: [nodePolyfills()]
  }
})
