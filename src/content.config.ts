import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { postSchema } from './schemas';

const posts = defineCollection({
  loader: glob({ base: './content/posts', pattern: '**/*.{md,mdx}' }),
  schema: postSchema,
});

export const collections = { posts };
