import {z, defineCollection} from "astro:content"

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    image: z.object({
      src: z.string(),
      alt: z.string(),
    }),
    description: z.string(),
    date: z.coerce.date(),
    // updatedDate: z.coerce.date().optional(),
    tag: z.array(z.string()),
    author: z.string(),
    authorImage: z.string(),
    draft: z.boolean(),
    iconTag: z.string(),
    url: z.string(),
  }),
});

export const collections = {
  blog: blogCollection,
};