import { FetchReturn } from '@nuxt/content/types/query-builder'
import { contentFunc } from '@nuxt/content/types/content'

export const tags = [
  { label: 'Stories', tag: 'stories', },
  { label: 'Informationen', tag: 'infos', },
  { label: 'Tipps & Tricks', tag: 'tipps', },
  { label: 'Lorem', tag: 'lorem', },
  { label: 'Ipsum', tag: 'ipsum', },
]

export const labels = tags.reduce((result, { tag, label }) => {
  result[tag] = label
  return result
}, {} as Record<string, string>)

export const tagIds = tags.map(_ => _.tag)

export function fetchStories(
  { $content }: { $content: contentFunc },
  { tag, limit, only }: { tag?: string, limit?: number, only?: string[] } = {}): Promise<FetchReturn[]> {
  let content = $content('stories').sortBy('createdAt', 'desc')
  if (tag) {
    content = content.where({tag})
  }
  if (limit != null) {
    content = content.limit(limit)
  }
  if (only?.length) {
    content = content.only(only)
  }
  return content.fetch() as Promise<FetchReturn[]>
}
