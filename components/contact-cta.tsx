"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import QuoteModal from "@/components/quote-modal"

export default function ContactCTA() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-primary text-white overflow-hidden">
        {/* Imagen de fondo con efecto de marca de agua */}
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-center mix-blend-overlay"
          style={{
            backgroundImage: "url('/fondos/17D7E604-FEA7-41F4-9952-134A0485C6EA_1_105_c.jpeg')"
          }}
        />
        
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">¿Listo para Transportar tu Carga?</h2>
          <p className="text-lg text-white/90 mb-12">
            Obtén una cotización personalizada para tus necesidades de transporte. Nuestro equipo está listo para
            ayudarte.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white hover:bg-white/90 text-primary font-semibold"
              onClick={() => setIsModalOpen(true)}
            >
              Solicitar Cotización
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white hover:bg-white/10 text-white font-semibold bg-transparent"
              onClick={() => window.open('tel:+528672254260', '_self')}
            >
              <Phone size={20} />
              Llamar Ahora
            </Button>
          </div>
        </div>
      </section>

      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
