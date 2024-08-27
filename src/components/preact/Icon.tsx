import { icons, type LucideIcon as LucideIconType } from "lucide-preact"

interface IconProps {
  name: keyof typeof icons
  color?: string
  size?: number | string
  class?: string
}

const Icon = ({ name, color, size, class: className }: IconProps) => {
  const LucideIcon: LucideIconType = icons[name]

  return <LucideIcon color={color} size={size} class={className} />
}

export default Icon
