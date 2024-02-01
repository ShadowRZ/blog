// https://nuxt.com/docs/guide/directory-structure/nuxt.config#nuxt-config-file
export default defineNuxtConfig({
  extends: ['github:ShadowRZ/bitfield-scaffold'],
  app: {
    baseURL: '/blog/',
    head: {
      meta: [
        {
          name: "theme-color",
          content: "#9D174D"
        }
      ],
      link: [
        {
          rel: 'icon',
          href: '/favicon-16-16.png',
          sizes: '16x16',
          type: 'image/png'
        },
        {
          rel: 'icon',
          href: '/favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png'
        },
        {
          rel: 'apple-touch-icon',
          href: '/apple-touch-icon.png'
        },
        {
          rel: 'manifest',
          href: '/blog/site.webmanifest'
        }
      ]
    },
  },
  typescript: {
    strict: true,
  },
  devtools: { enabled: true },
  modules: ['@nuxt/image', "nuxt-feedme"],
  colorMode: {
    classSuffix: ''
  },
  nitro: {
    prerender: {
      autoSubfolderIndex: false // XXX
    }
  },
  feedme: {
    feeds: {
      '/feed.xml': { revisit: '6h', type: 'atom1' },
      '/feed.json': { revisit: '6h', type: 'json1', content: true },
    },
    content: {
      feed: {
        defaults: {
          id: 'https://shadowrz.github.io/blog/',
          title: '@ShadowRZ\'s Blog',
          description: 'Where something happens.',
          link: 'https://shadowrz.github.io/blog/'
        },
      },
      item: {
        query: {
          path: '/posts',
          sort: [ { date: -1 }],
          where: [ { _partial: false }, { layout: { $ne: 'listing' }} ]
        },
        mapping: [
          ['link', '_path']
        ],
      },
      tags: [
        [/^(?=\/)/, 'https://shadowrz.github.io/blog'],
      ],
    }
  }
})
