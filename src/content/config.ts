import { defineCollection, z } from "astro:content";

const storySchema = z.object({
  title: z.string(),
  tag: z.enum(["stories", "infos", "tipps"]),
  createdAt: z.date(),
  imgSrc: z.string(),
  imgAlt: z.string(),
  storyTellingImgs: z.array(z.string()),
  slides: z.array(z.string()),
  testimonial: z.optional(
    z.object({
      name: z.string(),
      imgSrc: z.string(),
      imgAlt: z.string(),
      text: z.string(),
    })
  ),
});

export type StoryFrontmatter = z.infer<typeof storySchema>;

const stories = defineCollection({
  schema: storySchema,
});

const aboutSchema = z.object({
  title: z.string(),
  roofline: z.string(),
});

export type AboutFrontmatter = z.infer<typeof aboutSchema>;

const about = defineCollection({ schema: aboutSchema });

const infoSchema = z.object({
  title: z.string(),
  roofline: z.optional(z.string()),
  imgs: z.optional(z.array(z.string())),
});

export type InfoFrontmatter = z.infer<typeof infoSchema>;

const infos = defineCollection({ schema: infoSchema });

export const collections = {
  stories,
  about,
  looks: infos,
  services: infos,
};
