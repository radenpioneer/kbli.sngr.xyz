import { relations } from 'drizzle-orm'
import { sqliteTable, text } from 'drizzle-orm/sqlite-core'
import { nanoid } from 'nanoid'

export const entry = sqliteTable('entry', {
  id: text('id')
    .primaryKey()
    .$defaultFn(() => nanoid()),
  code: text('code').notNull(),
  name: text('name').notNull(),
  type: text('type').notNull(),
  description: text('description')
})

export const entriesParentToChildrenRelation = relations(entry, ({ many }) => ({
  children: many(entry)
}))

export const entriesChildrenToParentRelation = relations(entry, ({ one }) => ({
  parent: one(entry, {
    fields: [entry.id],
    references: [entry.id]
  })
}))
