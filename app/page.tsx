import Header from "@/components/header"
import Hero from "@/components/hero"
import Stats from "@/components/stats"
import Services from "@/components/services"
import Routes from "@/components/routes"
import Recruitment from "@/components/recruitment"
import Experience from "@/components/experience"
import ContactCTA from "@/components/contact-cta"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import WhatsAppFloat from "@/components/whatsapp-float"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Routes />
      <Recruitment />
      <Experience />
      <ContactCTA />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  )
}
