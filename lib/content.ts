import { dropWhile, splitAt } from '@/lib/collections'

export interface TextNode {
  type: 'text'
  value: string
}

export interface ElementNode {
  tag: string
  type: 'element'
  props: Record<string, string>
  children: (TextNode | ElementNode)[]
}

export type Node = TextNode | ElementNode

/**
 * splits content at h2s, dropping everything before the first h2
 * @param node content body
 * @returns array of chapters, each starting with an h2
 */
export function splitChapters(body: ElementNode): Node[][] {
  if (!body) {
    return []
  }
  return dropWhile(
    splitAt(body.children, el => el.type === 'element' && el.tag === 'h2'),
      el =>  el[0].type !== 'element' || el[0].tag !== 'h2')
}