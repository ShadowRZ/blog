import { z } from 'astro/zod';

export const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date(),
  categories: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
  lastmod: z.coerce.date().optional(),
});
