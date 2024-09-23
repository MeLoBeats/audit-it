import type { Faq } from "index"
import { ChevronDown } from "lucide-react"
import { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"

export const FaqCard = ({ faq }: { faq: Faq[] }) => {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  return (
    <div className="mb-8">
      {faq.map((item, index) => (
        <div key={index} className="mb-4">
          <button
            onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
            className="flex justify-between items-center bg-white w-full text-left font-medium p-4 rounded-lg bg-opacity-50 hover:bg-opacity-100 transition-all duration-200"
          >
            {item.question}
            <motion.div
              animate={{ rotate: expandedFaq === index ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <ChevronDown className="h-5 w-5" />
            </motion.div>
          </button>
          <AnimatePresence>
            {expandedFaq === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <div className="p-4 bg-transparent font-normal mt-1 rounded-lg">
                  {item.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  )
}
