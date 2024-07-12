import { sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { relations } from 'drizzle-orm'
import { createInsertSchema, createSelectSchema } from 'drizzle-zod'
import { nanoid } from 'nanoid'

export const entries = sqliteTable('entries', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => nanoid(8)),
  code: text('code').notNull().unique(),
  name: text('name').notNull(),
  type: text('type', {
    enum: ['kategori', 'golongan_pokok', 'golongan', 'subgolongan', 'kelompok']
  }).notNull(),
  description: text('description'),
  parentId: text('parentId')
})

export const entriesRelations = relations(entries, ({ one, many }) => ({
  parent: one(entries, {
    fields: [entries.parentId],
    references: [entries.id]
  }),
  children: many(entries)
}))

export const entriesInsertSchema = createInsertSchema(entries)
export const entriesSelectSchema = createSelectSchema(entries)