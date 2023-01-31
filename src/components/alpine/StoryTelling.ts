import Alpine from "alpinejs";
import { ScrollTrigger } from "../../lib/gsap";
import { reactiveBreakpoints } from "../../lib/breakpoints";

Alpine.data("StoryTelling", () => ({
  breakpoints: reactiveBreakpoints,
  chaptersActive: [true],
  init() {
    this.$nextTick(() => {
      const chapters = Array.from(this.$el.querySelectorAll("[data-chapter]"));
      this.chaptersActive = chapters.map((chapter) => false);
      chapters.forEach((chapter, index, array) => {
        const activate: ScrollTrigger.Callback = (self) => {
          this.chaptersActive[index] = self.isActive;
        };
        const onLeave = index === array.length - 1 ? undefined : activate;
        const onLeaveBack = index === 0 ? undefined : activate;
        ScrollTrigger.create({
          // markers: true,
          trigger: chapter,
          start: index === 0 ? "top bottom" : "center bottom",
          end: "center top",
          onEnter: activate,
          onLeave,
          onEnterBack: activate,
          onLeaveBack,
        });
      });
    });
  },
}));

export default {};
