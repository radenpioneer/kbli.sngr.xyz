import { defineConfig } from 'astro/config'
import { loadEnv } from 'vite'
import htmx from 'astro-htmx'
import alpinejs from '@astrojs/alpinejs'
import react from '@astrojs/react'
import markdoc from '@astrojs/markdoc'
import keystatic from '@keystatic/astro'
import cloudflare from '@astrojs/cloudflare'

const { KEYSTATIC } = loadEnv(process.env.NODE_ENV, process.cwd(), '')

// https://astro.build/config
export default defineConfig({
  integrations: [
    htmx(),
    alpinejs(),
    react(),
    markdoc(),
    ...(KEYSTATIC ? [keystatic()] : [])
  ],
  output: 'hybrid',
  adapter: cloudflare()
})
