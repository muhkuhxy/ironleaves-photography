import type { ComponentPropsWithRef } from "react"
import LayoutContainer from "../components/ReactLayoutContainer"
import { cls } from "../lib/util"

type Props = {
  ref?: string
  fluffy?: boolean
}

export default function ({
  children,
  className,
  fluffy,
  fluid,
  animation,
  ref,
}: ComponentPropsWithRef<typeof LayoutContainer> & Props) {
  return (
    <LayoutContainer
      className={cls(
        className,
        fluffy ? "2xl:py-[min(15vh,10rem)]" : "",
        "py-12 lg:py-16 xl:py-20",
      )}
      {...{ animation, fluid, ref }}
    >
      {children}
    </LayoutContainer>
  )
}
