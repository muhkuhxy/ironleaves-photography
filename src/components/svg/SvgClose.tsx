import { cls } from "../../lib/util"

export default function ({
  className,
  color = "currentColor",
}: {
  className?: string
  color?: string
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={cls(className)}
      stroke={color}
      strokeWidth={8}
    >
      <path d="M 10 10 L 90 90" />
      <path d="M 90 10 L 10 90" />
    </svg>
  )
}
