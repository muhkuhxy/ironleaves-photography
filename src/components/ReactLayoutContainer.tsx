import type { ComponentPropsWithoutRef, ComponentPropsWithRef } from "react";
import { cls } from "../lib/util";

export function getContainerClasses(fluid: boolean, retractable: boolean) {
  const classes = ["xl:mx-auto xl:px-16 px-8 md:px-16"];
  // fluid has no max-width
  if (!fluid) {
    if (retractable) {
      classes.push("w-full md:w-auto md:max-w-screen-2xl");
    } else {
      classes.push("max-w-screen-2xl");
    }
  }
  return classes;
}

type Props = {
  retractable?: boolean;
  fluid?: boolean;
  animation?: string;
};

export default function ({
  retractable = false,
  fluid = false,
  animation,
  ref,
  children,
  className,
}: ComponentPropsWithRef<"div"> & Props) {
  const extraClasses = getContainerClasses(fluid, retractable);

  return (
    <div
      className={cls(className, extraClasses)}
      data-animation={animation}
      x-ref={ref}
    >
      {children}
    </div>
  );
}
