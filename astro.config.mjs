// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import UnoCSS from 'unocss/astro';
import mdx from '@astrojs/mdx';
import icon from 'astro-icon';
import expressiveCode from 'astro-expressive-code';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://shadowrz.github.io/blog/',
  base: '/blog/',
  build: {
    format: 'file',
  },
  trailingSlash: 'never',

  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    expressiveCode({
      themeCssSelector: (theme) => `.${theme.type}`,
      themes: ['catppuccin-mocha', 'catppuccin-latte'],
    }),
    mdx(),
    icon(),
    sitemap(),
  ],

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Outfit',
      cssVariable: '--astro-font-sans',
      weights: ['300 700'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Maple Mono',
      cssVariable: '--astro-font-mono',
      weights: ['300 700'],
    },
  ],
});
