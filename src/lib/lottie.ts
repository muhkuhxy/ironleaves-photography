import lottie from "lottie-web"
import heroFlowerData from "./hero_flower.json"

export function animateHeroFlower(container: Element) {
  return lottie.loadAnimation({
    container,
    renderer: "svg",
    loop: true,
    autoplay: true,
    animationData: heroFlowerData,
  })
}
