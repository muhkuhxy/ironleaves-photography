export function nonNull<T>(s: T | null | undefined): s is T {
  return s != null;
}
