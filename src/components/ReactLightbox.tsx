import { RefObject, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export type Props = {
  id: string;
};

function useClickoutside<T extends HTMLElement>(
  ref: RefObject<T>,
  notify: () => void
) {
  useEffect(() => {
    function clickHandler(event: MouseEvent) {
      if (
        ref.current &&
        event.target instanceof Node &&
        !ref.current.contains(event.target)
      ) {
        notify();
      }
    }

    document.addEventListener("mousedown", clickHandler);

    return () => {
      document.removeEventListener("mousedown", clickHandler);
    };
  }, [ref]);

  return ref;
}

function Lightbox({ img, close }: { img: string; close: () => void }) {
  const hide = () => {
    setOpacity(0);
    setTimeout(close, 500);
  };

  const ref = useClickoutside<HTMLDivElement>(useRef(null), hide);

  const [opacity, setOpacity] = useState(0);
  useEffect(() => {
    setOpacity(100);
  }, []);

  return (
    <div
      className="z-50 fixed inset-0 grid place-content-center backdrop-opacity-10 bg-black/50 grid-cols-[fit-content(90%)] transition-opacity"
      style={{ opacity }}
    >
      <div ref={ref} className="p-8 mx-auto bg-gray-100 relative h-full">
        <img className="object-contain max-h-[calc(100vh-8rem)]" src={img} />
        <div
          className="absolute top-6 right-6 cursor-pointer px-2 border-2 border-black rounded-full hover:border-sunset hover:text-sunset transition-colors font-bold"
          onClick={hide}
        >
          X
        </div>
      </div>
    </div>
  );
}

export default function ({ id }: Props) {
  const [img, setImg] = useState<string | undefined>();

  useEffect(() => {
    document
      .querySelector(`#${id} swiper-container`)
      ?.addEventListener("click", (event: Event) => {
        if (event.target instanceof Element && event.target.tagName === "IMG") {
          console.log(event, event.target.getAttribute("src"));
          const imgSrc = event.target.getAttribute("src");
          if (imgSrc) {
            setImg(imgSrc);
          }
        }
      });
  }, []);

  if (!img) {
    return null;
  }

  console.log("portaling");
  return createPortal(
    <Lightbox img={img} close={() => setImg(undefined)} />,
    document.body
  );
}
