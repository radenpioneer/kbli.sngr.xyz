import { config, fields, collection } from '@keystatic/core'

export default config({
  storage: {
    kind: 'local'
  },
  collections: {
    posts: collection({
      label: 'Entry',
      slugField: 'code',
      path: 'src/content/entries/*',
      format: { contentField: 'description' },
      schema: {
        code: fields.slug({ name: { label: 'Code', required: true } }),
        name: fields.text({ label: 'Name', required: true }),
        description: fields.markdoc({
          label: 'Description',
          options: {
            image: {
              directory: 'src/assets/entries',
              publicPath: '../../assets/entries/'
            }
          }
        })
      }
    })
  }
})
