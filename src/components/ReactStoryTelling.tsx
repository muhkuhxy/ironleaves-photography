import { storyblokEditable } from "@storyblok/astro"
import { ScrollTrigger } from "../lib/gsap"
import { useEffect, useRef, useState } from "react"
import { cls } from "../lib/util"
import SectionContent from "./ReactSectionContent"
import type { SBChapter } from "../lib/blog"

type Props = {
  className?: string
  chapters?: (Omit<SBChapter, "content"> & {
    content: string
  })[]
  scroller?: string
}

// TODO: support progressive enhancement
export default function ({ className, chapters, scroller }: Props) {
  // console.log("render");

  const imgParent = useRef(null as HTMLDivElement | null)
  const contentParent = useRef(null as HTMLDivElement | null)
  const [chaptersActive, setChaptersActive] = useState(
    Array(chapters?.length ?? 0).fill(false),
  )

  useEffect(() => {
    // console.log("mounted");
    const sts: ScrollTrigger[] = []
    setTimeout(() => {
      // console.log("mounted");
      contentParent.current
        ?.querySelectorAll("[data-chapter-trigger]")
        .forEach((chapterTrigger, index) => {
          // console.log({ chapterImgEls, chapterTriggers });
          const activate: ScrollTrigger.Callback = (/*self*/) => {
            setChaptersActive(chaptersActive.map((_, i) => i === index))
            // console.log( `activating chapter ${index}`);
          }
          sts.push(
            ScrollTrigger.create({
              scroller,
              // markers: true,
              trigger: chapterTrigger,
              start: index === 0 ? "top bottom" : "center bottom",
              end: "center top",
              onEnter: activate,
              // onLeave,
              onEnterBack: activate,
              // onLeaveBack,
            }),
          )
        })
    })
    return () => {
      // console.log("unmounted");
      sts.forEach((st) => st.kill())
    }
  }, [])

  return (
    <SectionContent className={cls(className, "relative flex gap-x-8 py-32")}>
      <div className="sticky left-0 top-0 hidden h-[100vh] flex-col items-center justify-center gap-1 nojs:!hidden lg:flex">
        {chapters?.map((chapter, index) => (
          <div
            key={`chapter-dot-${index}`}
            className={cls(
              chaptersActive[index] ? "my-1 scale-[1.2]" : "scale-[0.65]",
              "cursor-pointer rounded-[50%] border-4 border-bluegray opacity-75 transition-all duration-[.75s]",
            )}
            onClick={() => {
              document
                .querySelectorAll("[data-chapter-trigger]")
                [index].scrollIntoView()
            }}
          />
        ))}
      </div>
      <div
        className="sticky top-0 mr-8 h-[100vh] w-[60%] nojs:!hidden max-lg:hidden"
        ref={imgParent}
      >
        {chapters?.map((chapter, index) => {
          return (
            <img
              src={chapter.image?.filename}
              data-chapter-img
              className={cls(
                chaptersActive[index] ? "" : "opacity-0",
                "absolute left-[50%] top-[50%] max-h-[75vh] max-w-full translate-x-[-50%] translate-y-[-50%] object-contain duration-700 ease-in-out",
              )}
              key={`chapter-img-${index}`}
            />
          )
        })}
      </div>
      <div
        className="mx-auto flex flex-col gap-y-32 lg:gap-y-0"
        ref={contentParent}
      >
        {chapters?.map((chapter, index) => (
          <div
            data-chapter-trigger
            className="flex flex-col items-center gap-x-16 gap-y-4 lg:min-h-[100vh] lg:flex-row"
            key={`chapter-content-${index}`}
            {...storyblokEditable(chapter)}
          >
            <div className="lg:hidden lg:min-h-[100vh] lg:w-[60%] lg:items-center lg:justify-center nojs:lg:flex">
              <img
                src={chapter.image?.filename}
                className="max-h-[50vh] max-w-[100%] object-contain lg:max-h-[75vh]"
              />
            </div>
            <div
              className="flex max-w-prose flex-col items-center gap-4 text-center lg:items-start lg:text-left nojs:lg:max-w-[39%] [&>h2]:mt-4 [&>h2]:leading-none"
              data-chapter-content
              dangerouslySetInnerHTML={{
                __html: `<h2>${chapter.title}</h2>${chapter.content}`,
              }}
            />
          </div>
        ))}
      </div>
    </SectionContent>
  )
}
