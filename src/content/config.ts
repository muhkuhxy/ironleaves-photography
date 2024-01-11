import { defineCollection, z } from "astro:content"

const aboutSchema = z.object({
  title: z.string(),
  roofline: z.string(),
})

export type AboutFrontmatter = z.infer<typeof aboutSchema>

const about = defineCollection({ schema: aboutSchema })

const infoSchema = z.object({
  title: z.string(),
  roofline: z.optional(z.string()),
  imgs: z.optional(z.array(z.string())),
})

export type InfoFrontmatter = z.infer<typeof infoSchema>

const infos = defineCollection({ schema: infoSchema })

export const collections = {
  about,
  looks: infos,
  services: infos,
}
