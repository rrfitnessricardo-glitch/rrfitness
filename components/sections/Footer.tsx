"use client"

import { Instagram, Facebook, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { assetPath } from "@/lib/utils"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/ricardo_rp205?utm_source=qr&igsh=MWIyZjUzODZ4YmhlMg==", name: "Instagram", color: "hover:text-pink-500" },
    { icon: Facebook, href: "https://www.facebook.com/ricardo.rincon.119001?mibextid=ZbWKwL", name: "Facebook", color: "hover:text-blue-500" },
  ]

  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Servicios", href: "#servicios" },
    { name: "Resultados", href: "#portafolio" },
    { name: "Contacto", href: "#contacto" },
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="py-12 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-24 h-24 sm:w-32 sm:h-32 bg-red-500/10 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-10 right-10 w-16 h-16 sm:w-24 sm:h-24 bg-red-600/10 rounded-full animate-float"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-8 sm:gap-12 mb-8 sm:mb-12 justify-items-center">
            {/* Brand Section */}
            <div className="space-y-6 animate-fade-in-up">
              <div className="flex items-center justify-center space-x-3">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center">
                  <img src={assetPath("/logo.jpg")} alt="RR.Fitness Logo" className="object-contain" />
                </div>
                <div className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">RR.FITNESS</div>
              </div>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm sm:text-base">
                Transforma tu mente y cuerpo por medio de entrenamientos adaptados a ti. Logra tus objetivos.
              </p>
              <div className="flex justify-center space-x-4">
                {socialLinks.map((social) => (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    key={social.name}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-xl flex items-center justify-center text-gray-600 dark:text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:-translate-y-1`}
                    aria-label={`Follow on ${social.name}`}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "200ms" }}>
              <h3 className="text-lg font-bold text-gray-900 dark:text-white">Navegación</h3>
              <div className="space-y-3">
                {quickLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-gray-600 dark:text-gray-400 hover:text-red-600 transition-colors duration-300 hover:translate-x-2 transform"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Empty column for layout balance on larger screens */}
            <div className="hidden md:block"></div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-200 dark:border-gray-800 pt-6 sm:pt-8">
            <div className="flex flex-col justify-center items-center space-y-4 sm:space-y-2">
              <div className="text-gray-500 dark:text-gray-400 text-sm sm:text-base animate-fade-in-up">
                © 2025 AIA Synergy. Todos los derechos reservados.
              </div>

              {/* Back to Top */}
              <Button
                onClick={scrollToTop}
                variant="ghost"
                size="sm"
                className="text-gray-500 dark:text-gray-400 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-xl group animate-fade-in-up"
              >
                Volver arriba
                <ArrowUp className="ml-2 h-4 w-4 group-hover:-translate-y-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}