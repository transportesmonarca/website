"use client"

import { useState } from "react"
import { Menu, X, Phone, Mail, Facebook, Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"
import QuoteModal from "./quote-modal"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false)

  return (
    <>
      <header className="sticky top-0 z-50 bg-white border-b border-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <img 
                src="/logo/logo_monarca.png" 
                alt="Transportes Internacionales Monarca" 
                className="w-12 h-12 object-contain"
              />
              <div className="flex flex-col leading-none">
                <span className="text-sm font-bold text-foreground">Transportes Internacionales</span>
                <span className="text-xl font-bold text-primary">MONARCA</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#" className="text-foreground/70 hover:text-foreground transition text-sm font-medium">
                Inicio
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground transition text-sm font-medium">
                Servicios
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground transition text-sm font-medium">
                Rutas
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground transition text-sm font-medium">
                Nosotros
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground transition text-sm font-medium">
                Contacto
              </a>
            </nav>

            {/* Desktop CTA y Redes Sociales */}
            <div className="hidden md:flex items-center gap-4">
              <div className="flex items-center gap-3">
                {/* Redes Sociales */}
                <a href="#" className="text-foreground/60 hover:text-primary transition">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-foreground/60 hover:text-primary transition">
                  <Instagram size={20} />
                </a>
              </div>
              
              <Button 
                onClick={() => setIsQuoteModalOpen(true)}
                className="bg-primary hover:bg-primary/90 text-white font-semibold rounded-full"
              >
                Cotizar Ahora
              </Button>
            </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Información de contacto debajo del botón */}
        <div className="hidden md:block border-t border-foreground/10 py-2">
          <div className="flex justify-end gap-6 text-sm text-foreground/60">
            <div className="flex items-center gap-1">
              <Phone size={14} />
              <span>+52 867 225 4260</span>
            </div>
            <div className="flex items-center gap-1">
              <Mail size={14} />
              <span>exportaciones@tmonarca.com.mx</span>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-foreground/10">
            <nav className="flex flex-col gap-3 py-4">
              <a href="#" className="text-foreground/70 hover:text-foreground transition px-4 py-2 text-sm font-medium">
                Inicio
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground transition px-4 py-2 text-sm font-medium">
                Servicios
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground transition px-4 py-2 text-sm font-medium">
                Rutas
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground transition px-4 py-2 text-sm font-medium">
                Nosotros
              </a>
              <a href="#" className="text-foreground/70 hover:text-foreground transition px-4 py-2 text-sm font-medium">
                Contacto
              </a>
              
              <div className="px-4 py-2">
                <Button 
                  onClick={() => setIsQuoteModalOpen(true)}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold mt-2"
                >
                  Cotizar Ahora
                </Button>
                
                {/* Info de contacto móvil */}
                <div className="mt-4 space-y-2 text-sm text-foreground/60">
                  <div className="flex items-center gap-2">
                    <Phone size={16} />
                    <span>+52 867 225 4260</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail size={16} />
                    <span>exportaciones@tmonarca.com.mx</span>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <a href="#" className="text-foreground/60 hover:text-primary transition">
                      <Facebook size={20} />
                    </a>
                    <a href="#" className="text-foreground/60 hover:text-primary transition">
                      <Instagram size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        )}
      </div>
      </header>
      
      {/* Modal de cotización */}
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </>
  )
}
