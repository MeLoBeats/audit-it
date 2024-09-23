import * as LucideIcons from "lucide-react"

export const Icon = ({
  name,
  color,
  size,
}: {
  name: keyof typeof LucideIcons
  color?: string
  size?: string | number
}) => {
  const LucideIcon = LucideIcons[name]

  if (!LucideIcon) {
    console.warn(`Icon "${name}" not found`)
    return null
  }

  // @ts-ignore
  return <LucideIcon color={color} size={size} />
}
