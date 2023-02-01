import { ScrollTrigger } from "../lib/gsap";
import {
  ComponentPropsWithoutRef,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { compileMarkdownSync } from "../lib/content";
import { cls } from "../lib/util";
import SectionContent from "./ReactSectionContent";

type Props = {
  className?: string;
  chapters: string[];
  imgs: string[];
  scroller?: string;
};

export default function ({ className, chapters, imgs, scroller }: Props) {
  // console.log("render");

  const imgParent = useRef(null as HTMLDivElement | null);
  const contentParent = useRef(null as HTMLDivElement | null);
  const [chaptersActive, setChaptersActive] = useState(
    Array(chapters.length).fill(false)
  );

  useEffect(() => {
    // console.log("mounted");
    const sts: ScrollTrigger[] = [];
    setTimeout(() => {
      // console.log("mounted");
      contentParent.current
        ?.querySelectorAll("[data-chapter-trigger]")
        .forEach((chapterTrigger, index) => {
          // console.log({ chapterImgEls, chapterTriggers });
          const activate: ScrollTrigger.Callback = (self) => {
            setChaptersActive(chaptersActive.map((_, i) => i === index));
            // console.log( `activating chapter ${index}`);
          };
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
            })
          );
        });
    });
    return () => {
      // console.log("unmounted");
      sts.forEach((st) => st.kill());
    };
  }, []);

  return (
    <SectionContent className={cls(className, "flex gap-x-8 relative py-32")}>
      <div className="sticky nojs:!hidden hidden lg:flex flex-col gap-1 h-[100vh] top-0 left-0 justify-center items-center">
        {chapters.map((chapter, index) => (
          <div
            key={`chapter-dot-${index}`}
            className={cls(
              chaptersActive[index] ? "scale-[1.2] my-1" : "scale-[0.65]",
              "rounded-[50%] border-4 border-bluegray transition-all duration-[.75s] cursor-pointer opacity-75"
            )}
          />
        ))}
      </div>
      <div
        className="sticky nojs:!hidden max-lg:hidden w-[60%] mr-8 h-[100vh] top-0"
        ref={imgParent}
      >
        {chapters.map((chapter, index) => (
          <img
            src={imgs[index]}
            data-chapter-img
            className={cls(
              chaptersActive[index] ? "" : "opacity-0",
              "absolute max-w-full max-h-[75vh] object-contain left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] duration-700 ease-in-out"
            )}
            key={`chapter-img-${index}`}
          />
        ))}
      </div>
      <div
        className="flex flex-col gap-y-32 lg:gap-y-0 mx-auto"
        ref={contentParent}
      >
        {chapters.map((chapter, index) => (
          <div
            data-chapter-trigger
            className="flex flex-col lg:flex-row gap-y-4 gap-x-16 items-center lg:min-h-[100vh]"
            key={`chapter-content-${index}`}
          >
            <div className="lg:hidden nojs:lg:flex lg:w-[60%] lg:min-h-[100vh] lg:items-center lg:justify-center">
              <img
                src={imgs[index]}
                className="max-h-[50vh] lg:max-h-[75vh] max-w-[100%] object-contain"
              />
            </div>
            <MarkdownRenderer
              className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left max-w-prose nojs:lg:max-w-[39%] [&>h2]:leading-none [&>h2]:mt-4"
              content={chapter}
            />
          </div>
        ))}
      </div>
    </SectionContent>
  );
}

export function MarkdownRenderer({
  content,
  className,
}: ComponentPropsWithoutRef<"div"> & { content: string }) {
  const html = useMemo(() => {
    // console.log("md render");
    const html = compileMarkdownSync(content).toString();
    // console.log("md render done");
    return html;
  }, [content]);
  return (
    <div
      className={className}
      data-chapter-content
      dangerouslySetInnerHTML={{
        __html: html,
      }}
    ></div>
  );
}
