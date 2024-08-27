import { LucideMenu } from "lucide-preact"
import { useState } from "preact/hooks"
import { Icon } from "./Icon"

const Burger = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <div
        class={"w-full h-full cursor-pointer"}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen}
        <Icon name={!isOpen ? "Menu" : "X"} size={32} />
      </div>
      {isOpen && false && (
        <div class="absolute inset-0 z-50 flex items-center justify-center bg-black/80">
          <div class="absolute top-0 left-0 z-50 bg-white/90 backdrop-blur-sm"></div>
          <div class="absolute top-0 left-0 z-50 flex items-center justify-center gap-5 p-5 bg-white/90 backdrop-blur-sm">
            <a href="#" class="text-black font-bold">
              Home
            </a>
            <a href="#" class="text-black font-bold">
              About
            </a>
            <a href="#" class="text-black font-bold">
              Contact
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default Burger
