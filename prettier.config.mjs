/**
 * @see https://prettier.io/docs/en/configuration.html
 * @type {import('prettier').Config}
 */
const config = {
  plugins: ['prettier-plugin-astro'],

  trailingComma: 'es5',
  singleQuote: true,
  bracketSpacing: true,
  arrowParens: 'always',
  jsxSingleQuote: true,
  bracketSameLine: false,
  printWidth: 140,
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
};

export default config;
