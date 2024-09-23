export default function GradientText({ children }: { children: string }) {
  return (
    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-pink-700">
      {children}
    </span>
  )
}
