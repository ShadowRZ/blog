export default defineAppConfig({
  bitfield: {
    baseURL: 'https://shadowrz.github.io/blog/',
    title: "@ShadowRZ's Blog",
    description: 'Where something happens.',
    copyright: (date: Date) => `© 2021-${date.getFullYear()} Yorusaka Miyabi`,
    generator: true,
  },
});
