
export interface Gsap {
  gsap: any
  ScrollTrigger: any
}

let gsapResolve: (g: Gsap) => void = () => {}

export const gsapPromise: Promise<Gsap> = new Promise(resolve => {
  gsapResolve = resolve
})

export function resolve(gsap: Gsap) {
  gsapResolve(gsap)
}

export function slideUp({gsap}: Gsap, options: { delay: string | undefined, y: string | undefined }, el: HTMLElement) {
  gsap.from(el, {
    duration: 1.5,
    opacity: 0,
    y: options.y ?? 60,
    delay: options.delay,
    ease: 'expo',
    scrollTrigger: {
      start: () => 'top+=200px bottom',
      // markers: true,
      trigger: el,
      once: true,
    }
  })
}
