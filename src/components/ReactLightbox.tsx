import { type RefObject, useCallback, useEffect, useRef, useState } from "react"
import { createPortal } from "react-dom"
import SvgClose from "./svg/SvgClose"
import IconArrow from "./svg/IconArrow"
import IconBase from "./svg/IconBase"

export type Props = {
  id: string
  slides: string[]
}

function useClickoutside<T extends HTMLElement>(notify: () => void) {
  const ref = useRef<T | null>(null)

  useEffect(() => {
    function clickHandler(event: MouseEvent) {
      if (
        event.target instanceof Node &&
        ref.current &&
        !ref.current.contains(event.target)
      ) {
        notify()
      }
    }

    document.addEventListener("mousedown", clickHandler)

    return () => {
      document.removeEventListener("mousedown", clickHandler)
    }
  }, [ref])

  return ref
}

function Lightbox({
  img,
  close,
  navigate,
}: {
  img: string
  close: () => void
  navigate: (idx: 1 | -1) => void
}) {
  const hide = () => {
    setOpacity(0)
    setTimeout(close, 500)
  }

  const ref = useClickoutside<HTMLDivElement>(hide)

  const [opacity, setOpacity] = useState(0)
  useEffect(() => setOpacity(100), [])

  return (
    <div
      className="fixed inset-0 z-50 grid grid-cols-[fit-content(90%)] place-content-center bg-black/50 backdrop-opacity-10 transition-all"
      style={{ opacity }}
    >
      <div
        ref={ref}
        className="relative mx-auto flex h-full flex-col gap-2 bg-gray-100 p-4 md:p-8"
      >
        <div
          className="cursor-pointer self-end border-2 border-sunset p-0.5 text-sunset transition-all hover:bg-sunset hover:text-white"
          onClick={hide}
        >
          <SvgClose className="w-4" />
        </div>
        <img className="max-h-[calc(100vh-12rem)] object-contain" src={img} />
        <div className="flex gap-12 self-center">
          <div onClick={() => navigate(-1)}>
            <IconBase className="w-8 rotate-90 cursor-pointer text-sunset">
              <IconArrow></IconArrow>
            </IconBase>
          </div>
          <div onClick={() => navigate(1)}>
            <IconBase className="w-8 -rotate-90 cursor-pointer text-sunset">
              <IconArrow></IconArrow>
            </IconBase>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ({ id, slides }: Props) {
  const [index, setIndex] = useState<number | undefined>()
  const img = index != null ? slides[index] : null

  const navigate = useCallback(
    (idx: 1 | -1) => {
      if (index != null) {
        setIndex(
          index === 0 && idx === -1
            ? slides.length - 1
            : (index + idx) % slides.length,
        )
      }
    },
    [index, setIndex, slides],
  )

  useEffect(() => {
    const clickHandler = (event: Event) => {
      if (event.target instanceof Element && event.target.tagName === "IMG") {
        const imgSrc = event.target.getAttribute("src")
        if (imgSrc) {
          const idx = slides.indexOf(imgSrc)
          if (idx !== -1) {
            setIndex(idx)
          }
        }
      }
    }

    const map: Record<string, () => void> = {
      ArrowLeft: () => {
        navigate(-1)
      },
      ArrowRight: () => {
        navigate(1)
      },
      Escape: () => {
        setIndex(undefined)
      },
    }

    const keyHandler = (event: KeyboardEvent) => {
      map[event.key]?.()
    }

    const swiper = document.querySelector(`#${id} swiper-container`)
    swiper?.addEventListener("click", clickHandler)
    document.addEventListener("keydown", keyHandler)

    return () => {
      swiper?.removeEventListener("click", clickHandler)
      document.removeEventListener("keydown", keyHandler)
    }
  }, [setIndex, navigate, slides])

  if (!img) {
    return null
  }

  return createPortal(
    <Lightbox
      img={img}
      close={() => setIndex(undefined)}
      navigate={navigate}
    />,
    document.body,
  )
}
