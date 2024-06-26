// @ts-ignore
import { defineCollection, z } from 'astro:content'

export const collections = {
  entries: defineCollection({
    type: 'content',
    schema: z.object({
      code: z.string(),
      name: z.string(),
      type: z.string(),
      induk: z.string().optional()
    })
  })
}
