import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function slideUp(options: { delay?: string, y?: string, killDelay?: number }, el: HTMLElement) {
  const scrollTrigger: ScrollTrigger.Vars = {
    start: () => 'top+=200px bottom',
    // markers: true,
    trigger: el,
  }

  if (options.killDelay) {
    let entered = 0
    scrollTrigger.onToggle = self => {
      if (self.isActive) {
        entered = Date.now()
      } else if ((Date.now() - entered) > options.killDelay!) {
        self.kill()
      }
    }
  } else {
    scrollTrigger.once = true
  }

  gsap.from(el, {
    duration: 1.5,
    opacity: 0,
    y: options.y ?? 60,
    delay: options.delay,
    ease: 'expo',
    scrollTrigger
  })
}

export function parallax(img: HTMLElement) {
  gsap.to(img, {
    ease: "none",
    scrollTrigger: {
      trigger: img,
      scrub: true,
      // markers: true,
      start: () => img.dataset.start || 'top bottom'
    },
    yPercent: 20
  })
}

export { gsap, ScrollTrigger }
