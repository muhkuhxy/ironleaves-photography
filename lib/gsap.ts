
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
