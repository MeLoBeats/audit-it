import { icons, type LucideProps } from "lucide-preact"
import type { ComponentProps } from "preact"

type IconName = keyof typeof icons

type SVGAttributes = ComponentProps<"svg">

interface IconProps extends Omit<LucideProps, "ref"> {
  name: IconName
}

export function Icon({ name, ...props }: IconProps) {
  const LucideIcon = icons[name]

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found`)
    return null
  }

  return <LucideIcon {...props} />
}

export type { IconName }
