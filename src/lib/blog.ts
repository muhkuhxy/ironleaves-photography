import { getCollection, CollectionEntry } from "astro:content";
import type { StoryFrontmatter } from "../content/config";
import { HTMLElement, NodeType, parse } from "node-html-parser";
import { dropWhile, splitAt } from "./collections";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";

export type Chapter = { children: HTMLElement[], img: string }

export type Story = StoryFrontmatter & {
  slug: string
  excerpt: HTMLElement[]
  chapters: Chapter[]
}

export type Tag = "stories" | "infos" | "tipps"

export const tags: { label: string, tag: Tag }[] = [
  { label: 'Stories', tag: 'stories', },
  { label: 'Informationen', tag: 'infos', },
  { label: 'Tipps & Tricks', tag: 'tipps', },
]

export const labels = tags.reduce((result, { tag, label }) => {
  result[tag] = label
  return result
}, {} as Record<string, string>)

export const tagIds = tags.map(_ => _.tag)

export function slugify(file: string) {
  return file.replace(/\.mdx?$/, "").replace(/.*\//, "")
}

function parseContent(doc: HTMLElement, storyTellingImgs: string[]): { excerpt: HTMLElement[], chapters: Chapter[] } {
  const preChapters = splitAt(
    Array.from(doc.childNodes).filter(
      (n) => n.nodeType === NodeType.ELEMENT_NODE
    ) as HTMLElement[],
    (el) => el.tagName === "H2"
  );
  return {
    excerpt: preChapters[0],
    chapters: dropWhile(preChapters, (el) => el[0].tagName !== "H2").map(
      (children, index) => ({
        children,
        img: storyTellingImgs[index],
      })
    )
  };
}

export async function fetchStories(tag?: Tag): Promise<Story[]> {
  const files = (await getCollection("stories", tag && (story => story.data.tag === tag)))
    .sort(
      (a, b) =>
        new Date(b.data.createdAt).getTime() -
        new Date(a.data.createdAt).getTime()
    );
  const filtered = (tag != null) ? files.filter(x => x.data.tag == tag) : files
  return await Promise.all(filtered.map(async (file) => {
    const contentHtml = parse(String(await unified().use(remarkParse).use(remarkHtml).process(file.body)));
    const chapters = parseContent(contentHtml, file.data.storyTellingImgs);
    return {
      slug: file.slug,
      ...file.data,
      ...chapters
    };
  }))

}
