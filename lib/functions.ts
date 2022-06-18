export async function retry(what: string, times: number, wait: number, block: () => boolean | Promise<boolean>): Promise<boolean> {
  const done = await block()
  if (!done) {
    if (times > 0) {
      return new Promise(resolve => {
        setTimeout(() => resolve(retry(what, times - 1, wait, block)), wait)
      })
    } else {
      // eslint-disable-next-line no-console
      console.warn(`out of retries for ${what}`)
      return false
    }
  } else {
    // console.log(`${what} done with ${times} tries left`)
    return true
  }
}

export async function scrollToTop(smooth: boolean) {
  if (document.location.hash) {
    document.location.hash = ''
  }
  const smoothClass = 'scroll-smooth'
  const htmlClassList = document.documentElement.classList
  const removeSmooth = !smooth && htmlClassList.contains(smoothClass)
  if (removeSmooth) {
    // console.log('removing ' + smoothClass)
    htmlClassList.remove(smoothClass)
  }
  await retry('scrollToTop', 5, 0, () => {
    return new Promise(resolve => {
      // console.log('current pos ' + window.scrollY)
      // console.log('scrolling')
      window.scrollTo(0, 0)
      setTimeout(() => {
        // console.log('new pos ' + window.scrollY)
        resolve(window.scrollY === 0)
      }, 500)
    })
  })
  // console.log('retry done')
  if (removeSmooth) {
    htmlClassList.add(smoothClass)
  }
}
