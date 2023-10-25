import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkHtml from "remark-html"
import { HTMLElement, Node, parse } from "node-html-parser"
import { splitAt } from "./collections"

export function compileMarkdownSync(md: string): HTMLElement {
  return parse(
    String(unified().use(remarkParse).use(remarkHtml).processSync(md)),
  )
}

export async function compileMarkdown(md: string): Promise<HTMLElement> {
  return parse(
    String(await unified().use(remarkParse).use(remarkHtml).process(md)),
  )
}

/**
 * splits content at h2s
 * @param node content body
 * @returns array of chapters, each starting with an h2
 */
export function splitChapters(doc: Node, splitAtTag = "H2"): Node[][] {
  if (!doc) {
    return []
  }
  return splitAt(
    Array.from(doc.childNodes),
    (el) => "tagName" in el && el.tagName === splitAtTag,
  )
}

export async function compileAndSplitChapters(
  markdown: string,
  splitAtTag = "H2",
): Promise<Node[][]> {
  return splitChapters(await compileMarkdown(markdown), splitAtTag)
}
