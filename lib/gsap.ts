import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function slideUp(options: { delay?: string, y?: string }, el: HTMLElement) {
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

export { gsap, ScrollTrigger }
