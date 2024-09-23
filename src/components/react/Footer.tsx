import useContent from "@/utils/useContent"
// @ts-ignore
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

const navItems = useContent("navbar.items") as any[]

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-14">
          <div className="mb-8 md:mb-0">
            <a href="/" className="text-2xl font-bold text-white">
              StockData
            </a>
            <p className="mt-4 text-sm">
              StockData est un service de stockage de données de valeur
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              {navItems.map((i) => (
                <li key={i.title}>
                  <a
                    href={i.link}
                    className="hover:text-gray-400 transition-colors"
                  >
                    {i.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Facebook className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Instagram className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
              >
                <Linkedin className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} StockData. Tout droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
