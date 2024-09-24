import React, { useState, useEffect } from "react"
import { Button } from "../ui/button"
import useContent from "../../utils/useContent"
import { cn } from "@/lib/utils"

const title = useContent("global.title")
const navbar = useContent("navbar")

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      if (currentScrollY > 100) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }

      if (currentScrollY > lastScrollY) {
        // Scrolling down
        setIsVisible(false)
      } else {
        // Scrolling up
        setIsVisible(true)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [lastScrollY])

  return (
    <header
      className={cn(
        "w-full py-5 h-20 px-24 z-20 sticky top-0 transition-all duration-300",
        isScrolled ? "bg-white shadow-md" : "bg-transparent",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="flex items-center justify-between">
        <div className="flex-1 flex justify-start">
          <a href="/">
            <h1 className="text-2xl font-bold text-black tracking-tighter">
              {title}
            </h1>
          </a>
        </div>
        <nav className="flex-1 flex justify-center">
          <div className="flex items-center gap-10">
            {navbar.items.map((item: { title: string; link: string }) => (
              <a key={item.title} href={"/" + item.link}>
                <Button variant={"link"}>{item.title}</Button>
              </a>
            ))}
          </div>
        </nav>
        <div className="flex-1 flex justify-end">
          <a href="/#contact">
            <Button variant="default" size="lg">
              Nous contacter
            </Button>
          </a>
        </div>
      </div>
    </header>
  )
}
