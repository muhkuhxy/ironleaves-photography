import type { TemplatePreviewProps }  from "@staticcms/core";
import { queries as mediaQueries } from "../../lib/breakpoints";
import { FC, useEffect, useMemo, useState } from "react";
import { Chapter, labels, parseContent, Tag } from "../../lib/blog";
import { compileMarkdown } from "../../lib/content";
import { HTMLElement, Node, NodeType } from "node-html-parser";
import { Swiper, SwiperSlide } from 'swiper/react'

function nonNull<T>(s: T | null | undefined): s is T {
  return s != null
}

type StoryPreviewProps = {
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

const ChapterPreview: FC<{ storyImgs: string[], chapters: Chapter[], gtLg: boolean}> = ({
  storyImgs,
  chapters,
  gtLg
}) => {
  // console.log({storyImgs})
  return <div className="bg-white flex gap-x-8 relative py-32 xl:mx-auto xl:px-16 px-8 md:px-16">
    {gtLg &&
      <div className="w-[60%] mr-8">
        {chapters.map((chapter, chapterIndex) =>
          <div className="w-fit mx-auto grid items-center h-[100vh]"
            key={`sticky-img-${chapterIndex}`}
          >
            {storyImgs[chapterIndex] ? <img
              src={storyImgs[chapterIndex]}
              className="max-w-full max-h-[75vh] object-contain"
            /> : 'KEIN BILD'}
          </div>
        )}
      </div>
    }
    <div className="grow flex flex-col gap-y-32 lg:gap-y-0">
      {
        chapters.map((chapter, chapterIndex) => (
          <div
            key={`chapter-${chapterIndex}`}
            className="flex flex-col lg:flex-row gap-y-4 gap-x-16 items-center lg:min-h-[100vh]"
            data-chapter=""
          >
            {!gtLg &&
              <div
                className="lg:w-[60%] lg:min-h-[100vh] lg:flex lg:items-center lg:justify-center"
              >
                {storyImgs[chapterIndex] ? <img
                  src={storyImgs[chapterIndex]}
                  className="max-h-[50vh] lg:max-h-[75vh] max-w-[100%] object-contain"
                /> : 'KEIN BILD'}
              </div>
            }
            <div
              dangerouslySetInnerHTML={{__html: '<div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left max-w-prose">' + chapter.children.map((child) => {
                if (child.nodeType === NodeType.ELEMENT_NODE) {
                  const el = child as HTMLElement;
                  if (el.tagName === "H2") {
                    el.classList.add("leading-none");
                    el.classList.add("mt-4");
                  }
                }
                return child.toString();
              }).join('') + '</div>'}}>
            </div>
          </div>
        ))
      }
    </div>
  </div>
}

function SliderPreview({slides}: {slides: string[]}) {
  return <div className="h-[50vh]">
    <Swiper
      className="!pb-8 h-full swiper relative overflow-x-hidden w-full"
      spaceBetween={2}
      slidesPerView="auto"
      loopedSlides={slides.length}
      centeredSlides={true}
      slideToClickedSlide={true}
    >
      {(slides ?? []).map(slide =>
        <SwiperSlide className="swiper-slide !w-auto flex items-center max-w-[90%]"
          key={`slide-${slide}`}>
          <img className="object-cover h-full" src={slide}></img>
        </SwiperSlide>
      )}
    </Swiper>
  </div>
}

function TestimonialPreview({testimonial: {
  imgSrc,
  text,
  name
}}: { testimonial: { imgSrc?: string, text?: string, name?: string }}) {
  return <div
    className="grid grid-rows-[auto,auto] lg:grid-rows-1 grid-cols-1 lg:grid-cols-2"
  >
    {imgSrc ? <img
      className="object-cover w-full h-full lg:order-2"
      src={imgSrc}
    /> : 'KEIN BILD'}
    {/* <SectionContent */}
    <div
      className="bg-emerald text-white lg:order-1 flex flex-col justify-center py-12 lg:py-16 xl:py-20 xl:mx-auto xl:px-16 px-8 md:px-16"
      // fluid={true}
    >
      <h3 className="caption font-normal">Kundenstimme</h3>
      <div className="w-full h-8" />
      <div className="relative flex flex-nowrap justify-self-center">
        <div className="relative self-end -ml-4 sm:ml-0 pr-4 sm:pr-6">
          <div
            className="relative caption text-[7rem] sm:text-[15rem] leading-[0] top-[-4.5rem] sm:-top-24 opacity-50"
          >
            &bdquo;
          </div>
        </div>
        <div className="flex flex-col">
          <div>{text}</div>
          <div className="text-right mt-4">&ndash; {name}</div>
        </div>
        <div
          className="relative caption text-[7rem] sm:text-[15rem] sm:-ml-2 leading-[0] top-8 sm:top-14 opacity-50"
        >
          &ldquo;
        </div>
      </div>
    </div>
  </div>
}

let timer: NodeJS.Timeout | undefined

export default function({
  entry,
  getAsset,
}: TemplatePreviewProps<StoryPreviewProps>) {
  const title = entry.data?.title
  const tag = entry.data?.tag
  const imgSrc = entry.data?.imgSrc
  // console.log({data: entry.data})
  const storyImgs = useMemo(() => entry.data?.storyTellingImgs ?? [], [entry.data?.storyTellingImgs])
  // console.log({storyImgs})
  const slides = useMemo(() => entry.data?.slides?.filter(nonNull) ?? [], [entry.data?.slides])
  // slides = slides == null ? [] : Array.from(slides)
  const md = entry.data?.body
  const testimonial = entry.data?.testimonial
  // console.log({testimonial, name: testimonial.getIn(['name'])})

  const [chapters, setChapters] = useState([] as Chapter[])
  const [excerpt, setExcerpt] = useState([] as Node[] | undefined)
  const [slideImages, setSlideImages] = useState([] as string[])
  const [storyImages, setStoryImages] = useState([] as string[])

  useEffect(() => {
    let alive = true
    const loadImages = async() => {
      const images = await Promise.all(storyImgs.map(async img => {
        return (await getAsset(img ?? '')).toString()
      }))
      if (alive) {
        setStoryImages(images)
      }
    }
    loadImages()
    return () => { alive = false }
  }, [storyImgs])

  useEffect(() => {
    let alive = true
    const loadImages = async() => {
      const images = await Promise.all(slides.map(async slide => {
        return (await getAsset(slide ?? '')).toString()
      }))
      if (alive) {
        setSlideImages(images)
      }
    }
    loadImages()
    return () => { alive = false }
  }, [slides])

  useEffect(() => {
    let alive = true
    timer != null && clearTimeout(timer)
    timer = setTimeout(() => {
      if (!alive) {
        return
      }
      // const started = new Date()
      md && compileMarkdown(md).then(contentHtml =>
        parseContent(contentHtml, [])
      ).then(({ excerpt, chapters }) => {
        if (!alive) {
          return
        }
        setChapters(chapters ?? [])
        setExcerpt(excerpt)
      })
    }, 750)
    return () => { alive = false }
  }, [md])

  const [gtLg, setGtLg] = useState(false)
  useEffect(() => {
    mediaQueries['lg'].addEventListener('change', ev => setGtLg(ev.matches))
  }, [])

  return (
    <div className="text-bluegray pb-6">
      <div className="bg-dust">
        {/* SectionContent */}
        <div className="flex flex-col lg:flex-row items-center gap-8 xl:mx-auto xl:px-16 px-8 md:px-16 py-12 lg:py-16 xl:py-20">
          <div
            className="relative w-[95%] lg:w-1/2 self-start lg:self-center flex-initial"
          >
            {imgSrc ? <img
              className="w-7/8 border-8 border-solid border-white drop-shadow"
              src={imgSrc}
            /> : 'KEIN BILD'}
          </div>
          <div
            className="lg:w-1/2 flex-initial text-center lg:text-left flex flex-col gap-4 max-w-prose mx-auto lg:mx-0"
          >
          <div>
            <div className="roofline block text-sunset uppercase">
            <span>{tag ? labels[tag] : "KEIN TAG"}</span>
            </div>
            <h1> {title || "KEIN TITEL"} </h1>
          </div>
          <div
            className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left max-w-prose"
            dangerouslySetInnerHTML={{__html: excerpt?.join('') ?? "KEIN INTRO"}}
          >
          </div>
            {/* LayoutSpacer */}
            <div className="w-full h-4" />
          </div>
        </div>
      </div>
      <ChapterPreview
        {...{chapters, gtLg, storyImgs: storyImages}}
      ></ChapterPreview>
      <SliderPreview slides={slideImages}></SliderPreview>
      {testimonial && <TestimonialPreview testimonial={testimonial}></TestimonialPreview> }
    </div>
  )
}