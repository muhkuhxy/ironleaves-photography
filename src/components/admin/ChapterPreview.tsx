import { HTMLElement, NodeType } from "node-html-parser"
import type { Chapter } from "../../lib/blog"

export function ChapterPreview({
  storyImgs,
  chapters,
  gtLg,
}: {
  storyImgs: string[]
  chapters: Chapter[]
  gtLg: boolean
}) {
  // console.log({storyImgs})
  return (
    <div className="bg-white flex gap-x-8 relative py-32 xl:mx-auto xl:px-16 px-8 md:px-16">
      {gtLg && (
        <div className="w-[60%] mr-8">
          {chapters.map((chapter, chapterIndex) => (
            <div
              className="w-fit mx-auto grid items-center h-[100vh]"
              key={`sticky-img-${chapterIndex}`}
            >
              {storyImgs[chapterIndex] ? (
                <img
                  src={storyImgs[chapterIndex]}
                  className="max-w-full max-h-[75vh] object-contain"
                />
              ) : (
                "KEIN BILD"
              )}
            </div>
          ))}
        </div>
      )}
      <div className="grow flex flex-col gap-y-32 lg:gap-y-0">
        {chapters.map((chapter, chapterIndex) => (
          <div
            key={`chapter-${chapterIndex}`}
            className="flex flex-col lg:flex-row gap-y-4 gap-x-16 items-center lg:min-h-[100vh]"
            data-chapter=""
          >
            {!gtLg && (
              <div className="lg:w-[60%] lg:min-h-[100vh] lg:flex lg:items-center lg:justify-center">
                {storyImgs[chapterIndex] ? (
                  <img
                    src={storyImgs[chapterIndex]}
                    className="max-h-[50vh] lg:max-h-[75vh] max-w-[100%] object-contain"
                  />
                ) : (
                  "KEIN BILD"
                )}
              </div>
            )}
            <div
              className="lg:max-w-[min(65ch,40%)]"
              dangerouslySetInnerHTML={{
                __html:
                  '<div class="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left">' +
                  chapter.children
                    .map((child) => {
                      if (child.nodeType === NodeType.ELEMENT_NODE) {
                        const el = child as HTMLElement
                        if (el.tagName === "H2") {
                          el.classList.add("leading-none")
                          el.classList.add("mt-4")
                        }
                      }
                      return child.toString()
                    })
                    .join("") +
                  "</div>",
              }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  )
}
