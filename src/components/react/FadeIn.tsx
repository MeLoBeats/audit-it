import { motion } from "framer-motion"

export default function FadeIn({
  children,
  duration = 0.5,
}: {
  children: any
  duration?: number
}) {
  return (
    <motion.span
      initial={{ opacity: 0, x: 10 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration }}
    >
      {children}
    </motion.span>
  )
}
