import type { TemplatePreviewProps } from "@staticcms/core"
import { useEffect, useMemo, useState } from "react"
import { labels, Tag } from "../../lib/blog"
import { compileMarkdownSync } from "../../lib/content"
import { SliderPreview } from "./SliderPreview"
import { TestimonialPreview } from "./TestimonialPreview"
import { nonNull } from "../../lib/util"
import ReactStoryTelling from "../ReactStoryTelling"
import { splitAt } from "../../lib/collections"
import ReactSectionContent from "../ReactSectionContent"

export type StoryPreviewProps = {
  title?: string
  tag?: Tag
  imgSrc?: string
  storyTellingImgs: string[]
  slides: string[]
  testimonial?: {
    name?: string
    imgSrc?: string
    text?: string
  }
  body: string
}

let timer: NodeJS.Timeout | undefined

export default function ({
  entry,
  getAsset,
}: TemplatePreviewProps<StoryPreviewProps>) {
  const title = entry.data?.title
  const tag = entry.data?.tag
  const imgSrc = entry.data?.imgSrc
  // console.log({data: entry.data})
  const storyImgs = useMemo(
    () => entry.data?.storyTellingImgs ?? [],
    [entry.data?.storyTellingImgs],
  )
  // console.log({storyImgs})
  const slides = useMemo(
    () => entry.data?.slides?.filter(nonNull) ?? [],
    [entry.data?.slides],
  )
  const [excerpt, ...chapters] = useMemo(() => {
    return splitAt(entry.data?.body.split("\n") ?? [], (s) =>
      s.startsWith("##"),
    ).map((lines) => lines.join("\n"))
  }, [entry.data?.body])
  const testimonial = entry.data?.testimonial

  const [slideImages, setSlideImages] = useState([] as string[])
  const [storyImages, setStoryImages] = useState([] as string[])

  useEffect(() => {
    let alive = true
    const loadImages = async () => {
      const images = await Promise.all(
        storyImgs.map(async (img) => {
          return (await getAsset(img ?? "")).toString()
        }),
      )
      if (alive) {
        setStoryImages(images)
      }
    }
    loadImages()
    return () => {
      alive = false
    }
  }, [storyImgs])

  useEffect(() => {
    let alive = true
    const loadImages = async () => {
      const images = await Promise.all(
        slides.map(async (slide) => {
          return (await getAsset(slide ?? "")).toString()
        }),
      )
      if (alive) {
        setSlideImages(images)
      }
    }
    loadImages()
    return () => {
      alive = false
    }
  }, [slides])

  return (
    <div className="text-bluegray pb-6">
      <div className="bg-dust">
        <ReactSectionContent className="flex flex-col lg:flex-row items-center gap-8">
          <div className="relative w-[95%] lg:w-1/2 self-start lg:self-center flex-initial">
            {imgSrc ? (
              <img
                className="w-7/8 border-8 border-solid border-white drop-shadow"
                src={imgSrc}
              />
            ) : (
              "KEIN BILD"
            )}
          </div>

          <div className="lg:w-1/2 flex-initial text-center lg:text-left flex flex-col gap-4 max-w-prose mx-auto lg:mx-0">
            {/* <slot name="title" /> */}
            <div>
              <div className="roofline block text-sunset uppercase">
                <span>{tag ? labels[tag] : "KEIN TAG"}</span>
              </div>
              <h1> {title || "KEIN TITEL"} </h1>
            </div>

            {/* <slot name="content" /> */}
            <div
              className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left max-w-prose"
              dangerouslySetInnerHTML={{
                __html: excerpt
                  ? compileMarkdownSync(excerpt).toString()
                  : "KEIN INTRO",
              }}
            ></div>

            {/* LayoutSpacer */}
            <div className="w-full h-4" />
          </div>
        </ReactSectionContent>
      </div>
      <ReactStoryTelling
        chapters={chapters}
        imgs={storyImages}
        scroller="#preview-pane"
      />
      <SliderPreview slides={slideImages}></SliderPreview>
      {testimonial && (
        <TestimonialPreview testimonial={testimonial}></TestimonialPreview>
      )}
    </div>
  )
}
