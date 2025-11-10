"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">M</span>
            </div>
            <span className="text-xl font-bold text-foreground">Monarca</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#servicios" className="text-muted-foreground hover:text-foreground transition">
              Servicios
            </a>
            <a href="#rutas" className="text-muted-foreground hover:text-foreground transition">
              Rutas
            </a>
            <a href="#unete" className="text-muted-foreground hover:text-foreground transition">
              Únete al Equipo
            </a>
            <a href="#contacto" className="text-muted-foreground hover:text-foreground transition">
              Contacto
            </a>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a href="https://monarcatransportes.netlify.app" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" className="text-foreground">
                CRM
              </Button>
            </a>
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">Solicitar Cotización</Button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <nav className="flex flex-col gap-3 py-4">
              <a href="#servicios" className="text-muted-foreground hover:text-foreground transition px-4 py-2">
                Servicios
              </a>
              <a href="#rutas" className="text-muted-foreground hover:text-foreground transition px-4 py-2">
                Rutas
              </a>
              <a href="#unete" className="text-muted-foreground hover:text-foreground transition px-4 py-2">
                Únete al Equipo
              </a>
              <a href="#contacto" className="text-muted-foreground hover:text-foreground transition px-4 py-2">
                Contacto
              </a>
              <a href="https://monarcatransportes.netlify.app" target="_blank" rel="noopener noreferrer" className="px-4 py-2">
                <Button variant="ghost" className="w-full justify-start text-foreground">
                  CRM
                </Button>
              </a>
              <div className="px-4">
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Solicitar Cotización
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
