import { defineConfig } from 'astro/config'
import { loadEnv } from 'vite'
import react from '@astrojs/react'
import markdoc from '@astrojs/markdoc'
import keystatic from '@keystatic/astro'
import cloudflare from '@astrojs/cloudflare'

const { KEYSTATIC } = loadEnv(process.env.NODE_ENV, process.cwd(), '')

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), ...(KEYSTATIC ? [keystatic()] : [])],
  output: 'hybrid',
  adapter: cloudflare()
})
