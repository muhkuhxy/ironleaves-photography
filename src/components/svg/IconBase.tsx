import type { ReactNode } from "react"
import { cls } from "../../lib/util"

export default function IconBase({
  className,
  iconName = "box",
  iconColor = "currentColor",
  children,
}: {
  className?: string
  iconName?: string
  iconColor?: string
  children: ReactNode
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={cls(className, "inline align-middle")}
      viewBox="0 0 512 512"
      aria-labelledby={iconName}
      role="presentation"
    >
      <g fill={iconColor}>{children}</g>
    </svg>
  )
}
