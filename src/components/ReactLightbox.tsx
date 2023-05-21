import { RefObject, useCallback, useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { cls } from "../lib/util";
import SvgClose from "./svg/SvgClose";
import IconArrow from "./svg/IconArrow";
import IconBase from "./svg/IconBase";

export type Props = {
  id: string;
  slides: string[];
};

function useClickoutside<T extends HTMLElement>(
  ref: RefObject<T>,
  notify: () => void
) {
  useEffect(() => {
    function clickHandler(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        ref.current &&
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

function Lightbox({
  img,
  close,
  navigate,
}: {
  img: string;
  close: () => void;
  navigate: (idx: 1 | -1) => void;
}) {
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
      className="z-50 fixed inset-0 grid place-content-center backdrop-opacity-10 bg-black/50 grid-cols-[fit-content(90%)] transition-all"
      style={{ opacity }}
    >
      <div ref={ref} className="p-4 lg:p-8 mx-auto bg-gray-100 relative h-full">
        <img className="object-contain max-h-[calc(100vh-8rem)]" src={img} />
        <div
          className="absolute top-2 right-2 cursor-pointer p-0.5 border-2 border-sunset text-sunset transition-colors"
          onClick={hide}
        >
          <SvgClose className="w-6" />
        </div>
        <div className="flex justify-between gap-2">
          <div onClick={() => navigate(-1)}>
            <IconBase className="text-sunset w-8 rotate-90 cursor-pointer">
              <IconArrow></IconArrow>
            </IconBase>
          </div>
          <div onClick={() => navigate(1)}>
            <IconBase className="text-sunset w-8 -rotate-90 cursor-pointer">
              <IconArrow></IconArrow>
            </IconBase>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ({ id, slides }: Props) {
  const [index, setIndex] = useState<number | undefined>();
  const img = index != null ? slides[index] : null;

  const navigate = useCallback(
    (idx: 1 | -1) => {
      if (index != null) {
        setIndex(
          index === 0 && idx === -1
            ? slides.length - 1
            : (index + idx) % slides.length
        );
      }
    },
    [index, setIndex, slides]
  );

  useEffect(() => {
    const clickHandler = (event: Event) => {
      if (event.target instanceof Element && event.target.tagName === "IMG") {
        const imgSrc = event.target.getAttribute("src");
        if (imgSrc) {
          const idx = slides.indexOf(imgSrc);
          if (idx !== -1) {
            setIndex(idx);
          }
        }
      }
    };

    const map: Record<string, () => void> = {
      ArrowLeft: () => {
        navigate(-1);
      },
      ArrowRight: () => {
        navigate(1);
      },
      Escape: () => {
        setIndex(undefined);
      },
    };

    const keyHandler = (event: KeyboardEvent) => {
      map[event.key]?.();
    };

    const swiper = document.querySelector(`#${id} swiper-container`);
    swiper?.addEventListener("click", clickHandler);
    document.addEventListener("keydown", keyHandler);

    return () => {
      swiper?.removeEventListener("click", clickHandler);
      document.removeEventListener("keydown", keyHandler);
    };
  }, [setIndex, navigate, slides]);

  if (!img) {
    return null;
  }

  return createPortal(
    <Lightbox
      img={img}
      close={() => setIndex(undefined)}
      navigate={navigate}
    />,
    document.body
  );
}
