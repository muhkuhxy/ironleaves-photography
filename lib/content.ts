import { dropWhile, splitAt } from '@/lib/collections'

export interface Node {
  tag?: string
  type?: string
  props?: Record<string, string>
  children: Node[]
}

/**
 * splits content at h2s, dropping everything before the first h2
 * @param node content body
 * @returns array of chapters, each starting with an h2
 */
export function splitChapters(node: Node): Node[][] {
  if (!node) {
    return []
  }
  return dropWhile(
    splitAt(node.children, el => el.tag === 'h2'),
      el => el[0].tag !== 'h2')
}