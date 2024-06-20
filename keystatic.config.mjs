import { config, fields, collection } from '@keystatic/core'

export default config({
  storage: import.meta.env.DEV
    ? {
        kind: 'local'
      }
    : {
        kind: 'github',
        repo: 'radenpioneer/kbli.sngr.xyz'
      },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({
          label: 'Content',
          options: {
            image: {
              directory: 'src/assets/images/posts',
              publicPath: '../../assets/images/posts/'
            }
          }
        })
      }
    })
  }
})
