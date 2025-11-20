import Header from "@/components/sections/Header"
import Hero from "@/components/sections/Hero"
import Services from "@/components/sections/Services"
import MissionVision from "@/components/sections/MissionVision"
import Contact from "@/components/sections/Contact"
import Footer from "@/components/sections/Footer"
import FloatingSocial from "@/components/sections/floating-social"
import { SidebarProvider } from "@/components/ui/sidebar"

export default function Home() {
  return (
    <SidebarProvider defaultOpen={true}>
      <Header>
        <Hero />
        <Services />
        <MissionVision />
        <Contact />
        <Footer />
        <FloatingSocial />
      </Header>
    </SidebarProvider>
  )
}
