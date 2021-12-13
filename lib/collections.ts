export function splitAt<T>([...elements]: T[], predicate: (_: T) => boolean): T[][] {
  const result: T[][] = []
  while(elements.length > 0) {
    const index = elements.slice(1).findIndex(predicate) + 1
    result.push(elements.slice(0, index < 1 ? undefined : index))
    elements = index < 1 ? [] : elements.slice(index)
  }
  return result
}

export function dropWhile<T>(elements: T[], predicate: (_: T) => boolean): T[] {
  const index = elements.findIndex(predicate)
  return elements.slice(index+1)
}
