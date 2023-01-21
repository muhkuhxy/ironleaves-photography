import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export function slideUp(options: { delay?: string, y?: string }, el: HTMLElement) {
  el.style.opacity = '0'
  el.style.transform = `translateY(${options.y ?? 60}px)`

  ScrollTrigger.create({
      // markers: true,
      trigger: el,
      start: () => 'top+=200px bottom',
      onToggle: self => {
        // console.log('toggle, active: ', self.isActive, el)
        if (!self.isActive) {
          self.kill(false, true)
          // console.log('killed')
        } else {
          // console.log('playing')
          gsap.to(el, { opacity: 1, y: 0, ease: 'expo', duration: 1.5 })
        }
      },
    })
}

export function parallax(caller: string, img?: HTMLElement) {
  if (img) {
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
  } else {
    console.warn(`no img ref for ${caller}`)
  }
}

export { gsap, ScrollTrigger }
