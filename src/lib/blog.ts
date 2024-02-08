import type { Node } from "node-html-parser"
import {
  useStoryblokApi,
  type ISbStoriesParams,
  type ISbRichtext,
} from "@storyblok/astro"

export async function useStory(slug: string) {
  return (
    await useStoryblokApi().getStory(`stories/${slug}`, {
      version:
        import.meta.env.DEV || import.meta.env.SB_PREVIEW
          ? "draft"
          : "published",
    })
  ).data.story as unknown as SBStory
}

export async function useStories(params: ISbStoriesParams = {}) {
  const effectiveParams = Object.assign(
    {},
    {
      version:
        import.meta.env.DEV || import.meta.env.SB_PREVIEW
          ? "draft"
          : "published",
      sort_by: "content.createdAt:desc",
    },
    params,
  )
  const data = (await useStoryblokApi().getStories(effectiveParams)).data
  return data.stories as unknown as SBStory[]
}

export function useLatestStories(excludingId: string) {
  return useStories({
    per_page: 2,
    excluding_ids: excludingId,
  })
}

export type SBImage = {
  filename: string
  alt?: string
}

export type SBChapter = {
  title: string
  content: ISbRichtext
  image?: SBImage
}

export type SBStory = {
  slug: string
  id: string
  content: {
    createdAt: Date
    tag: Tag
    image?: SBImage
    title: string
    teaser: ISbRichtext
    chapters: SBChapter[]
    testimonial?: [SBTestimonial]
    slides?: SBImage[]
  }
}

export type SBTestimonial = {
  name: string
  image?: { filename: string; alt: string }
  text: ISbRichtext
}

export type Tag = "story" | "infos" | "tipps"

export const tags: { label: string; tag: Tag }[] = [
  { label: "Stories", tag: "story" },
  { label: "Informationen", tag: "infos" },
  { label: "Tipps & Tricks", tag: "tipps" },
]

export const labels = tags.reduce(
  (result, { tag, label }) => {
    result[tag] = label
    return result
  },
  {} as Record<string, string>,
)
