"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sun, Moon, Dumbbell, Home, Briefcase, Trophy, Mail, Target } from "lucide-react"
import { useTheme } from "next-themes"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
  useSidebar,
} from "@/components/ui/sidebar"

export default function Header({ children }: { children: React.ReactNode }) {
  const [activeSection, setActiveSection] = useState("inicio")
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()
  const { isMobile, openMobile } = useSidebar()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["inicio", "servicios", "mision-vision", "contacto"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetBottom = offsetTop + element.offsetHeight

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Inicio", href: "#inicio", id: "inicio", icon: Home },
    { name: "Servicios", href: "#servicios", id: "servicios", icon: Briefcase },
    { name: "Misión y Visión", href: "#mision-vision", id: "mision-vision", icon: Target },
    { name: "Contacto", href: "#contacto", id: "contacto", icon: Mail },
  ]

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
        <div className="animate-pulse w-10 h-10 bg-gray-200 dark:bg-gray-700 rounded-full" />
      </div>
    );
  }

  return (
    <>
      <Sidebar collapsible="icon" className="border-r border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
        <SidebarHeader className="border-b border-gray-200 dark:border-gray-700 p-6 group-data-[collapsible=icon]:p-3">
          <div className="flex items-center justify-center space-x-3 cursor-pointer group" onClick={() => handleNavClick("#inicio")}>
            <div className="w-10 h-10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shrink-0 bg-white dark:bg-gray-800 shadow-sm">
              <img src="/logo.jpg" alt="" className="rounded-lg w-full h-full object-cover object-center" />
            </div>
            <div className="text-xl font-black text-gray-900 dark:text-white group-data-[collapsible=icon]:hidden">
              RR.FITNESS
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent className="p-4 group-data-[collapsible=icon]:p-2">
          <SidebarMenu>
            {navItems.map((item) => (
              <SidebarMenuItem key={item.name}>
                <SidebarMenuButton
                  onClick={() => handleNavClick(item.href)}
                  isActive={activeSection === item.id}
                  tooltip={item.name}
                  className="w-full justify-start text-left py-3 px-4 rounded-xl font-medium transition-all duration-300 
                    hover:bg-red-50 dark:hover:bg-red-900/30 
                    data-[active=true]:bg-red-600 data-[active=true]:text-white 
                    text-gray-700 dark:text-gray-200
                    group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-3 group-data-[collapsible=icon]:py-3"
                >
                  <item.icon className="h-5 w-5 shrink-0 group-data-[collapsible=icon]:h-6 group-data-[collapsible=icon]:w-6" />
                  <span className="ml-3 group-data-[collapsible=icon]:hidden">{item.name}</span>
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarContent>

        <SidebarFooter className="border-t border-gray-200 dark:border-gray-700 p-4 group-data-[collapsible=icon]:p-2">
          <Button
            variant="ghost"
            onClick={toggleTheme}
            className="w-full justify-start hover:bg-gray-100 dark:hover:bg-gray-800 rounded-xl py-3 px-4 
              text-gray-700 dark:text-gray-200
              group-data-[collapsible=icon]:justify-center group-data-[collapsible=icon]:px-3 group-data-[collapsible=icon]:py-3"
          >
            <Sun className="h-5 w-5 mr-3 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 group-data-[collapsible=icon]:mr-0 group-data-[collapsible=icon]:h-6 group-data-[collapsible=icon]:w-6" />
            <Moon className="absolute h-5 w-5 ml-3 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 group-data-[collapsible=icon]:ml-0 group-data-[collapsible=icon]:h-6 group-data-[collapsible=icon]:w-6" />
            <span className="ml-6 group-data-[collapsible=icon]:hidden">
              {theme === "dark" ? "Modo Claro" : "Modo Oscuro"}
            </span>
          </Button>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <header
          className={`flex h-16 shrink-0 items-center gap-2 border-b border-gray-200 dark:border-gray-700 px-4
      ${isMobile && openMobile
              ? 'bg-white/50 dark:bg-gray-900/50'
              : 'bg-white dark:bg-gray-900'
            }
      backdrop-blur-sm sticky top-0 z-40`}
        >
          <SidebarTrigger
            className={`hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg text-gray-700 dark:text-gray-200 border border-gray-200 dark:border-gray-700
        ${isMobile && openMobile
                ? 'fixed top-4 left-4 z-[1000]'
                : 'relative z-[1000]'
              }`}
          />
          <div className="text-1xl text-gray-700 dark:text-gray-200">
            <strong>Entrenador Personal Certificado</strong>
          </div>
        </header>
        <main className="flex-1 bg-gray-50 dark:bg-gray-900">{children}</main>
      </SidebarInset>
    </>
  )
}
