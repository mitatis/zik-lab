import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { SITE } from "@/config";

export const BLOG_PATH = "src/data/blog";
export const NEWS_PATH = "src/data/blog/news";
export const INSIGHTS_PATH = "src/data/blog/insights";
export const WEEKLY_PATH = "src/data/blog/weekly";
// export const DAILY_PATH = "src/data/blog/daily";

const blog = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["其它"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
    }),
});
const news = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${NEWS_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["其它"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
    }),
});
const insights = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${INSIGHTS_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["其它"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
    }),
});
const weekly = defineCollection({
  loader: glob({ pattern: "**/[^_]*.md", base: `./${WEEKLY_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(SITE.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      featured: z.boolean().optional(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()).default(["其它"]),
      ogImage: image().or(z.string()).optional(),
      description: z.string(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      timezone: z.string().optional(),
    }),
});
// const daily = defineCollection({
//   loader: glob({ pattern: "**/[^_]*.md", base: `./${DAILY_PATH}` }),
//   schema: ({ image }) =>
//     z.object({
//       author: z.string().default(SITE.author),
//       pubDatetime: z.date(),
//       modDatetime: z.date().optional().nullable(),
//       title: z.string(),
//       featured: z.boolean().optional(),
//       draft: z.boolean().optional(),
//       tags: z.array(z.string()).default(["其它"]),
//       ogImage: image().or(z.string()).optional(),
//       description: z.string(),
//       canonicalURL: z.string().optional(),
//       hideEditPost: z.boolean().optional(),
//       timezone: z.string().optional(),
//     }),
// });


export const collections = {
  blog,
  news,
  insights,
  weekly,
  // daily,
}
