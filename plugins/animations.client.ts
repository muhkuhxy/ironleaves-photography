import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Draggable } from 'gsap/Draggable'
// import { calculateDistances, horizontalPartitions } from '~/lib/animation'

gsap.registerPlugin(ScrollTrigger, Draggable)

function slideUp(options: { delay?: string, y?: string }, el: HTMLElement) {
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

function parallax(caller: string, img?: HTMLElement) {
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

/*
This helper function makes a group of elements animate along the x-axis in a seamless, responsive loop.
Taken from https://greensock.com/docs/v3/HelperFunctions#loop

Features:
 - Uses xPercent so that even if the widths change (like if the window gets resized), it should still work in most cases.
 - When each item animates to the left or right enough, it will loop back to the other side
 - Optionally pass in a config object with values like "speed" (default: 1, which travels at roughly 100 pixels per second), paused (boolean),  repeat, reversed, and paddingRight.
 - The returned timeline will have the following methods added to it:
   - next() - animates to the next element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
   - previous() - animates to the previous element using a timeline.tweenTo() which it returns. You can pass in a vars object to control duration, easing, etc.
   - toIndex() - pass in a zero-based index value of the element that it should animate to, and optionally pass in a vars object to control duration, easing, etc. Always goes in the shortest direction
   - current() - returns the current index (if an animation is in-progress, it reflects the final index)
   - times - an Array of the times on the timeline where each element hits the "starting" spot. There's also a label added accordingly, so "label1" is when the 2nd element reaches the start.
 */
// function horizontalLoop(container: HTMLElement, items: HTMLElement[] | NodeListOf<HTMLElement>, config: { repeat?: number, paused?: boolean, speed?: number, snap?: number | boolean, paddingRight?: string, reversed?: boolean, minScale?: number } = {} ) {
// 	items = gsap.utils.toArray(items);
// 	const tl = gsap.timeline({
//     repeat: config.repeat,
//     paused: config.paused,
//     defaults: {ease: "none"},
//     onReverseComplete: () => {
//       tl.totalTime(tl.rawTime() + tl.duration() * 100)
//     }
//   });
//   const length = items.length;
//   const startX = items[0].offsetLeft;
//   const centerX =  container.offsetWidth / 2
//   const times: number[] = [];
//   const widths: number[] = [];
//   const xPercents: number[] = [];
//   const pixelsPerSecond = (config.speed || 1) * 100;
//   const minScale = config.minScale || 0.75;
//   // some browsers shift by a pixel to accommodate flex layouts, so for example if width is 20% the first element's width might be 242px, and the next 243px, alternating back and forth. So we snap to 5 percentage points to make things look more natural
//   const snap = config.snap === false ? (v: number) => v : gsap.utils.snap(typeof config.snap === 'number' ? config.snap : 1);
// 	gsap.set(items, { // convert "x" to "xPercent" to make things responsive, and populate the widths/xPercents Arrays to make lookups faster.
// 		xPercent: (i, el) => {
// 			const w = widths[i] = parseFloat(gsap.getProperty(el, "width", "px") as string);
// 			xPercents[i] = snap(parseFloat(gsap.getProperty(el, "x", "px") as string) / w * 100 + parseFloat(gsap.getProperty(el, "xPercent") as string));
// 			return xPercents[i];
// 		}
// 	});
// 	const totalWidth = items[length-1].offsetLeft + xPercents[length-1] / 100 * widths[length-1] - startX + items[length-1].offsetWidth * parseFloat(gsap.getProperty(items[length-1], "scaleX") as string) + (config.paddingRight != null ? parseFloat(config.paddingRight) : 0);
// 	for (let i = 0; i < length; i++) {
// 		const item = items[i];
//     const width = widths[i]
//     const xPercent = xPercents[i]
//     const curX = xPercent / 100 * width;
//     const { distanceToCenter, distanceToLoop, distanceToStart } = calculateDistances(centerX, {
//       curX,
//       startX,
//       width,
//       offsetLeft: item.offsetLeft,
//       xPercent
//     })

//     horizontalPartitions(totalWidth, pixelsPerSecond, snap, minScale, {
//       offsetLeft: item.offsetLeft,
//       curX,
//       startX,
//       width,
//       xPercent,
//       distanceToCenter,
//       distanceToLoop
//     }).forEach(partition => {
//       if ('from' in partition) {
//         tl.fromTo(item, partition.from, partition.to, partition.when)
//       } else {
//         tl.to(item, partition.to, partition.when)
//       }
//     })

// 		times[i] = distanceToStart / pixelsPerSecond;
// 	}
//   let curIndex = 0;
// 	function toIndex(index: number, vars: gsap.TweenVars = {}) {
// 		(Math.abs(index - curIndex) > length / 2) && (index += index > curIndex ? -length : length); // always go in the shortest direction
// 		const newIndex = gsap.utils.wrap(0, length, index);
//     let time = times[newIndex];
// 		if (time > tl.time() !== index > curIndex) { // if we're wrapping the timeline's playhead, make the proper adjustments
// 			vars.modifiers = {time: gsap.utils.wrap(0, tl.duration())};
// 			time += tl.duration() * (index > curIndex ? 1 : -1);
// 		}
// 		curIndex = newIndex;
// 		vars.overwrite = true;
// 		return tl.tweenTo(time, vars);
// 	}
// 	tl.next = (vars: gsap.TweenVars) => toIndex(curIndex+1, vars);
// 	tl.previous = (vars: gsap.TweenVars) => toIndex(curIndex-1, vars);
// 	tl.current = () => curIndex;
// 	tl.toIndex = (index: number, vars: gsap.TweenVars) => toIndex(index, vars);
// 	tl.times = times;
// 	tl.progress(1, true).progress(0, true); // pre-render for performance
// 	if (config.reversed) {
// 	  tl.vars.onReverseComplete!();
// 	  tl.reverse();
// 	}
// 	return tl;
// }

function carousel3d(draggable: string | HTMLElement, boxes: string | NodeListOf<HTMLElement>, userConfig: {
  repeat?: number,
  duration?: number,
  paused?: boolean
}) {
  const config = {
    repeat: -1,
    duration: 10,
    paused: false,
    ...userConfig
  }

  const inners: Element[] = []

  gsap.utils.toArray(boxes).forEach((value, index) => {
    const box = value as HTMLElement
    gsap.set(box, {
      rotateY: index * 360 / boxes.length,
    })
    const inner = box.children[0]
    gsap.set(inner, {
      rotateY: index * 360 / (-boxes.length / 2),
    })
    inners.push(inner)
  })

  const tl = gsap.timeline({repeat: config.repeat, paused: config.paused})

  tl.to(boxes, {
    ease: 'none',
    rotateY: '+=360',
    duration: config.duration,
  })
  tl.to(inners, {
    rotateY: '-=720',
    ease: 'none',
    duration: config.duration,
  }, 0)

	tl.progress(1, true).progress(0, true); // pre-render for performance

  Draggable.create(draggable, {
    type: 'rotation'
  })

  return tl
}

interface AnimationPlugin {
  slideUp: typeof slideUp
  parallax: typeof parallax
  carousel3d: typeof carousel3d
}

declare module 'vue/types/vue' {
  interface Vue {
    $anim: AnimationPlugin
  }
}

declare module '@nuxt/types' {
  interface Context {
    $anim: AnimationPlugin
  }
}

export default (_context: unknown, inject: (name: string, value: any) => void) => {
  const injection: AnimationPlugin = {
    slideUp,
    parallax,
    carousel3d
  }
  inject('anim', injection)
}
