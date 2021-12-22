export function retry(what: string, times: number, wait: number, block: () => boolean) {
  if (!block()) {
    if (times > 0) {
      setTimeout(() => retry(what, times-1, wait, block), wait)
    } else {
      console.warn(`out of retries for ${what}`)
    }
  // } else {
  //   console.log(`${what} done with ${times} tries left`)
  }
}
