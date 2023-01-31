import type { TemplatePreviewProps } from "@staticcms/core";
import { queries as mediaQueries } from "../../lib/breakpoints";
import { useEffect, useMemo, useState } from "react";
import { Chapter, labels, parseContent, Tag } from "../../lib/blog";
import { compileMarkdown } from "../../lib/content";
import type { Node } from "node-html-parser";
import "swiper/css";
import { ChapterPreview } from "./ChapterPreview";
import { SliderPreview } from "./SliderPreview";
import { TestimonialPreview } from "./TestimonialPreview";

function nonNull<T>(s: T | null | undefined): s is T {
  return s != null;
}

export type StoryPreviewProps = {
  title?: string;
  tag?: Tag;
  imgSrc?: string;
  storyTellingImgs: string[];
  slides: string[];
  testimonial?: {
    name?: string;
    imgSrc?: string;
    text?: string;
  };
  body: string;
};

let timer: NodeJS.Timeout | undefined;

export default function ({
  entry,
  getAsset,
}: TemplatePreviewProps<StoryPreviewProps>) {
  const title = entry.data?.title;
  const tag = entry.data?.tag;
  const imgSrc = entry.data?.imgSrc;
  // console.log({data: entry.data})
  const storyImgs = useMemo(
    () => entry.data?.storyTellingImgs ?? [],
    [entry.data?.storyTellingImgs]
  );
  // console.log({storyImgs})
  const slides = useMemo(
    () => entry.data?.slides?.filter(nonNull) ?? [],
    [entry.data?.slides]
  );
  // slides = slides == null ? [] : Array.from(slides)
  const md = entry.data?.body;
  const testimonial = entry.data?.testimonial;
  // console.log({testimonial, name: testimonial.getIn(['name'])})

  const [chapters, setChapters] = useState([] as Chapter[]);
  const [excerpt, setExcerpt] = useState([] as Node[] | undefined);
  const [slideImages, setSlideImages] = useState([] as string[]);
  const [storyImages, setStoryImages] = useState([] as string[]);

  useEffect(() => {
    let alive = true;
    const loadImages = async () => {
      const images = await Promise.all(
        storyImgs.map(async (img) => {
          return (await getAsset(img ?? "")).toString();
        })
      );
      if (alive) {
        setStoryImages(images);
      }
    };
    loadImages();
    return () => {
      alive = false;
    };
  }, [storyImgs]);

  useEffect(() => {
    let alive = true;
    const loadImages = async () => {
      const images = await Promise.all(
        slides.map(async (slide) => {
          return (await getAsset(slide ?? "")).toString();
        })
      );
      if (alive) {
        setSlideImages(images);
      }
    };
    loadImages();
    return () => {
      alive = false;
    };
  }, [slides]);

  useEffect(() => {
    let alive = true;
    timer != null && clearTimeout(timer);
    timer = setTimeout(() => {
      if (!alive) {
        return;
      }
      // const started = new Date()
      md &&
        compileMarkdown(md)
          .then((contentHtml) => parseContent(contentHtml, []))
          .then(({ excerpt, chapters }) => {
            if (!alive) {
              return;
            }
            setChapters(chapters ?? []);
            setExcerpt(excerpt);
          });
    }, 750);
    return () => {
      alive = false;
    };
  }, [md]);

  const [gtLg, setGtLg] = useState(false);
  useEffect(() => {
    mediaQueries["lg"].addEventListener("change", (ev) => setGtLg(ev.matches));
  }, []);

  return (
    <div className="text-bluegray pb-6">
      <div className="bg-dust">
        {/* SectionContent */}
        <div className="flex flex-col lg:flex-row items-center gap-8 xl:mx-auto xl:px-16 px-8 md:px-16 py-12 lg:py-16 xl:py-20">
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
            <div>
              <div className="roofline block text-sunset uppercase">
                <span>{tag ? labels[tag] : "KEIN TAG"}</span>
              </div>
              <h1> {title || "KEIN TITEL"} </h1>
            </div>
            <div
              className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left max-w-prose"
              dangerouslySetInnerHTML={{
                __html: excerpt?.join("") ?? "KEIN INTRO",
              }}
            ></div>
            {/* LayoutSpacer */}
            <div className="w-full h-4" />
          </div>
        </div>
      </div>
      <ChapterPreview
        {...{ chapters, gtLg, storyImgs: storyImages }}
      ></ChapterPreview>
      <SliderPreview slides={slideImages}></SliderPreview>
      {testimonial && (
        <TestimonialPreview testimonial={testimonial}></TestimonialPreview>
      )}
    </div>
  );
}
