export const tags = [
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

// export function fetchStories(
//   { $content }: { $content: contentFunc },
//   { tag, limit, only, where }: { tag?: string, limit?: number, only?: string[], where?: Object } = {}): Promise<FetchReturn[]> {
//   let content = $content('stories').sortBy('createdAt', 'desc')
//   if (tag) {
//     content = content.where({tag})
//   }
//   if (where) {
//     content = content.where(where)
//   }
//   if (limit != null) {
//     content = content.limit(limit)
//   }
//   if (only?.length) {
//     content = content.only(only)
//   }
//   return content.fetch() as Promise<FetchReturn[]>
// }
