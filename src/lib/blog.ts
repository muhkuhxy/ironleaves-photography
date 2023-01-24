import type { MarkdownInstance } from "astro";
import { HTMLElement, NodeType, parse } from "node-html-parser";
import { dropWhile, splitAt } from "./collections";

export type StoryFrontmatter = {
  title: string;
  tag: Tag;
  createdAt: string;
  imgSrc: string;
  imgAlt: string;
  storyTellingImgs: string[];
  slides: string[];
  testimonial?: { name: string; imgSrc: string; imgAlt: string; text: string };
}

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

export async function fetchStories(glob: () => Promise<MarkdownInstance<StoryFrontmatter>[]>, tag?: Tag): Promise<Story[]> {
  const files = Array.from(await glob())
    .sort(
      (a, b) =>
        new Date(b.frontmatter.createdAt).getTime() -
        new Date(a.frontmatter.createdAt).getTime()
    );
  const filtered = (tag != null) ? files.filter(x => x.frontmatter.tag == tag) : files
  return filtered.map(file => {
    const contentHtml = parse(file.compiledContent());
    const chapters = parseContent(contentHtml, file.frontmatter.storyTellingImgs);
    return {
      ...file.frontmatter,
      slug: slugify(file.file),
      ...chapters

    }
  })

}
