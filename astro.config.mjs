// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

import UnoCSS from 'unocss/astro';
import mdx from '@astrojs/mdx';
import Icons from 'unplugin-icons/vite';
import expressiveCode from 'satteri-expressive-code';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';

// https://astro.build/config
export default defineConfig({
  site: 'https://shadowrz.github.io/blog/',
  base: '/blog/',
  build: {
    format: 'file',
  },
  trailingSlash: 'never',

  markdown: {
    processor: satteri({
      mdastPlugins: [
        expressiveCode({
          themeCssSelector: (theme) => `.${theme.type}`,
          themes: ['catppuccin-mocha', 'catppuccin-latte'],
        }),
      ],
      features: { directive: true },
    }),
  },

  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    mdx(),
    sitemap(),
  ],

  vite: {
    plugins: [
      Icons({
        compiler: 'astro',
        iconCustomizer(collection, icon, props) {
          props.width = '1em';
          props.height = '1em';
        },
      }),
    ],
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: 'Fredoka',
      cssVariable: '--astro-font-sans',
      weights: ['300 400 700'],
    },
    {
      provider: fontProviders.fontsource(),
      name: 'Maple Mono',
      cssVariable: '--astro-font-mono',
      weights: ['400 700'],
    },
  ],
});
