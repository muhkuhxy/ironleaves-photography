export function nonNull<T>(s: T | null | undefined): s is T {
  return s != null;
}

export function cls(
  ...classes: (string | undefined | (undefined | string)[])[]
): string {
  return classes.flat().filter(nonNull).join(" ");
}
