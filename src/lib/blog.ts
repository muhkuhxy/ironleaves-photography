import { getCollection } from "astro:content"
import type { StoryFrontmatter } from "../content/config"
import type { HTMLElement, Node } from "node-html-parser"
import { compileMarkdown, splitChapters } from "./content"
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
  image: SBImage
}

export type SBStory = {
  slug: string
  id: string
  content: Pick<StoryFrontmatter, "tag" | "title" | "createdAt"> & {
    tag: string
    image: {
      filename: string
      alt: string
    }
    title: string
    teaser: ISbRichtext
    chapters: SBChapter[]
    testimonial: [SBTestimonial]
    slides: SBImage[]
  }
}

export type SBTestimonial = {
  name: string
  image: { filename: string; alt: string }
  text: ISbRichtext
}

export type Chapter = { children: Node[]; img: string }

export type Story = StoryFrontmatter & {
  slug: string
  excerpt: Node[]
  chapters: Chapter[]
}

export type Tag = "stories" | "infos" | "tipps"

export const tags: { label: string; tag: Tag }[] = [
  { label: "Stories", tag: "stories" },
  { label: "Informationen", tag: "infos" },
  { label: "Tipps & Tricks", tag: "tipps" },
]

export const labels = tags.reduce((result, { tag, label }) => {
  result[tag] = label
  return result
}, {} as Record<string, string>)

export const tagIds = tags.map((_) => _.tag)

export function slugify(file: string) {
  return file.replace(/\.mdx?$/, "").replace(/.*\//, "")
}

export function parseContent(
  doc: HTMLElement,
  storyTellingImgs: string[],
): { excerpt: Node[]; chapters: Chapter[] } {
  const preChapters = splitChapters(doc)
  return {
    excerpt: preChapters[0],
    chapters: preChapters.slice(1).map((children, index) => ({
      children,
      img: storyTellingImgs[index],
    })),
  }
}

export async function fetchStories(tag?: Tag): Promise<Story[]> {
  const files = (
    await getCollection("stories", tag && ((story) => story.data.tag === tag))
  ).sort(
    (a, b) =>
      new Date(b.data.createdAt).getTime() -
      new Date(a.data.createdAt).getTime(),
  )
  const filtered = tag != null ? files.filter((x) => x.data.tag == tag) : files
  return await Promise.all(
    filtered.map(async (file) => {
      const contentHtml = await compileMarkdown(file.body)
      const chapters = parseContent(contentHtml, file.data.storyTellingImgs)
      return {
        slug: file.slug,
        ...file.data,
        ...chapters,
      }
    }),
  )
}
