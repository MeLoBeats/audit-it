import React from "react"
import useContent from "@/utils/useContent"
// @ts-ignore
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"

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
            <div className="mt-4">
              <h4 className="text-lg font-semibold mb-2">Contactez-nous</h4>
              <div className="flex items-center space-x-2 text-sm">
                <Mail size={16} />
                <span>contact@stockdata.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm mt-1">
                <Phone size={16} />
                <span>+33 1 23 45 67 89</span>
              </div>
              <div className="flex items-center space-x-2 text-sm mt-1">
                <MapPin size={16} />
                <span>123 Rue de la Data, 75000 Paris</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
            <ul className="space-y-2">
              {navItems.map((i) => (
                <li key={i.title}>
                  <a
                    href={"/" + i.link}
                    className="hover:text-gray-400 transition-colors"
                  >
                    {i.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Informations légales</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/mentions-legales"
                  className="hover:text-gray-400 transition-colors"
                >
                  Mentions légales
                </a>
              </li>
              <li>
                <a
                  href="/politique-confidentialite"
                  className="hover:text-gray-400 transition-colors"
                >
                  Politique de confidentialité
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Suivez-nous</h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-gray-600 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} StockData. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  )
}
