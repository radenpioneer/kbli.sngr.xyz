import { config, fields, collection, singleton } from '@keystatic/core'

export default config({
  storage: {
    kind: 'local'
  },
  collections: {
    entries: collection({
      label: 'Entry',
      slugField: 'code',
      path: 'src/content/entries/*',
      format: { contentField: 'description' },
      schema: {
        code: fields.slug({ name: { label: 'Kode', required: true } }),
        name: fields.text({ label: 'Nama', required: true }),
        type: fields.select({
          label: 'Tipe Kode',
          options: [
            { label: 'Kategori', value: 'kategori' },
            { label: 'Golongan Utama', value: 'golongan-utama' },
            { label: 'Golongan', value: 'golongan' },
            { label: 'Subgolongan', value: 'subgolongan' },
            { label: 'Kelompok', value: 'kelompok' }
          ],
          defaultValue: 'kelompok',
          required: true
        }),
        induk: fields.relationship({
          label: 'Relasi Induk',
          collection: 'entries'
        }),
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
  },

  singletons: {
    site: singleton({
      label: 'Site',
      path: 'src/content/site/site',
      format: { data: 'json' },
      schema: {
        title: fields.text({ label: 'Title', required: true }),
        description: fields.text({
          label: 'Description',
          multiline: true,
          required: true
        })
      }
    })
  }
})
