// @ts-ignore
import { defineCollection, z } from 'astro:content'

export const collections = {
  entries: defineCollection({
    type: 'content',
    schema: z.object({
      code: z.string(),
      name: z.string(),
      type: z.nativeEnum({
        kategori: 'kategori',
        'golongan-utama': 'golongan-utama',
        golongan: 'golongan',
        subgolongan: 'subgolongan',
        kelompok: 'kelompok'
      }),
      induk: z.string().optional()
    })
  }),

  site: defineCollection({
    type: 'data',
    schema: z.object({
      title: z.string(),
      description: z.string()
    })
  })
}
