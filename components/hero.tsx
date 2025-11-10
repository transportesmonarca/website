"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useEffect } from "react"

export default function Hero() {
  const backgroundImages = [
    "/fondos/unnamed (4).jpg",
    "/fondos/41631D0F-23FF-486D-84A9-982C3169E92C_1_105_c.jpeg",
    "/fondos/unnamed (5).png",
    "/fondos/unnamed (2).jpg", // Reemplazando C8DE3DA6-8306-4923-AFB5-03BBCC88CFAC_1_105_c
    "/fondos/unnamed (3).jpg"  // Reemplazando 73053B78-C788-4444-A4DE-CFC26CA7734E_1_105_c
  ]

  const heroMessages = [
    {
      title: "Servicios de Cruce Fronterizo",
      subtitle: "Conectando México y Estados Unidos",
      description: "Especialistas en el cruce fronterizo con documentación completa y tiempos optimizados para tu carga."
    },
    {
      title: "Servicio Puerta a Puerta",
      subtitle: "De tu almacén al destino final",
      description: "Recolección y entrega directa sin intermediarios. Tu carga segura desde el origen hasta el destino."
    },
    {
      title: "Servicios de Fletes",
      subtitle: "Transporte de carga especializado",
      description: "Fletes completos y parciales con la seguridad y puntualidad que tu negocio necesita."
    },
    {
      title: "Cargas Consolidadas",
      subtitle: "Optimización de costos y espacios",
      description: "Aprovecha al máximo tu inversión en transporte con nuestro servicio de consolidación de carga."
    },
    {
      title: "Programa IMMEX",
      subtitle: "Facilitamos tu operación maquiladora",
      description: "Expertise en el manejo de mercancías bajo el programa IMMEX con total cumplimiento normativo."
    }
  ]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        (prevIndex + 1) % backgroundImages.length
      )
    }, 30000) // Cambia cada 30 segundos (muy pausado y elegante)

    return () => clearInterval(interval)
  }, [backgroundImages.length])

  // Obtener el mensaje actual basado en el índice de la imagen
  const currentMessage = heroMessages[currentImageIndex]

  // Funciones para navegación manual
  const goToPrevious = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? backgroundImages.length - 1 : prevIndex - 1
    )
  }

  const goToNext = () => {
    setCurrentImageIndex((prevIndex) => 
      (prevIndex + 1) % backgroundImages.length
    )
  }

  return (
    <section className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden min-h-[600px]">
      {/* Background image carousel mejorado */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div 
            key={index}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
              index === currentImageIndex ? 'opacity-70' : 'opacity-0'
            }`}
          >
            <div
              className="w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${image}')`
              }}
            />
          </div>
        ))}
      </div>
      
      {/* Overlay para legibilidad */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-white/50 via-white/30 to-white/50"></div>

      {/* Botones de navegación */}
      <button 
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/80 hover:bg-white/90 text-primary p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
        aria-label="Imagen anterior"
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 bg-white/80 hover:bg-white/90 text-primary p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 backdrop-blur-sm"
        aria-label="Siguiente imagen"
      >
        <ChevronRight size={24} />
      </button>

      {/* Indicadores de posición */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
        {backgroundImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex 
                ? 'bg-primary scale-125' 
                : 'bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Ir a imagen ${index + 1}`}
          />
        ))}
      </div>

      <div className="relative z-20 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          {/* Título principal con transición */}
          <div className="mb-6">
            <h1 
              key={currentImageIndex}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance drop-shadow-sm transition-all duration-1000 ease-out transform"
              style={{
                animation: 'fadeInUp 1s ease-out forwards'
              }}
            >
              {currentMessage.title}
            </h1>
          </div>

          {/* Subtítulo con transición */}
          <div className="mb-4">
            <h2 
              key={`subtitle-${currentImageIndex}`}
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-primary leading-tight text-balance drop-shadow-sm transition-all duration-1000 ease-out"
              style={{
                animation: 'fadeInUp 1s ease-out 0.2s forwards',
                opacity: 0
              }}
            >
              {currentMessage.subtitle}
            </h2>
          </div>

          {/* Descripción con transición */}
          <div className="mb-8">
            <p 
              key={`description-${currentImageIndex}`}
              className="text-lg md:text-xl text-foreground/80 leading-relaxed text-balance drop-shadow-sm transition-all duration-1000 ease-out"
              style={{
                animation: 'fadeInUp 1s ease-out 0.4s forwards',
                opacity: 0
              }}
            >
              {currentMessage.description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white font-semibold shadow-lg">
              Solicitar Cotización
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/5 bg-white/90 backdrop-blur-sm shadow-lg"
            >
              Llamar Ahora
            </Button>
          </div>
        </div>
      </div>

      {/* Estilos CSS para las animaciones */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}
