// import AppLogo from "./AppLogo.astro"
import { Button } from "../ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import useContent from "../../utils/useContent"
import { useCallback, useEffect, useState } from "react"
import { cn } from "@/lib/utils"

const title = useContent("global.title")
const navbar = useContent("navbar")

export const Header = () => {
  return (
    <header
      className={cn(
        "w-full py-5 h-20 px-24 bg-transparent transition-colors duration-300"
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
              <a key={item.title} href={item.link}>
                <Button variant={"link"}>{item.title}</Button>
              </a>
            ))}
          </div>
        </nav>
        <div className="flex-1 flex justify-end">
          <Button variant="default" size="lg">
            Nous contacter
          </Button>
        </div>
      </div>
    </header>
  )
}
