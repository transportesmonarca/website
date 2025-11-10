"use client"

import { MessageCircle, X } from "lucide-react"
import { useState } from "react"

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)
  const phoneNumber = "528672254260" // +52 867 225 4260

  const predefinedMessages = [
    {
      text: "Solicitar cotización de servicio",
      message: "Hola, me gustaría solicitar una cotización para servicio de transporte."
    },
    {
      text: "Información sobre rutas",
      message: "Hola, necesito información sobre las rutas disponibles."
    },
    {
      text: "Consulta general",
      message: "Hola, tengo una consulta sobre sus servicios de transporte."
    },
    {
      text: "Rastreo de envío",
      message: "Hola, necesito rastrear mi envío."
    }
  ]

  const openWhatsApp = (message: string) => {
    const encodedMessage = encodeURIComponent(message)
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
    window.open(whatsappUrl, '_blank')
    setIsOpen(false)
  }

  return (
    <>
      {/* WhatsApp Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 w-80 max-w-[90vw]">
          <div className="bg-white rounded-lg shadow-2xl border overflow-hidden">
            {/* Header */}
            <div className="bg-green-600 text-white p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Transportes Monarca</h3>
                  <p className="text-green-100 text-sm">En línea</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Content */}
            <div className="p-4">
              <div className="mb-4">
                <div className="bg-gray-100 rounded-lg p-3 mb-3">
                  <p className="text-sm text-gray-700">
                    ¡Hola! 👋 Somos Transportes Internacionales Monarca. 
                    ¿En qué podemos ayudarte hoy?
                  </p>
                </div>
              </div>

              {/* Quick Messages */}
              <div className="space-y-2">
                {predefinedMessages.map((msg, index) => (
                  <button
                    key={index}
                    onClick={() => openWhatsApp(msg.message)}
                    className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-gray-50 hover:border-green-300 transition-colors text-sm"
                  >
                    {msg.text}
                  </button>
                ))}
                
                {/* Custom message button */}
                <button
                  onClick={() => openWhatsApp("Hola, tengo una consulta.")}
                  className="w-full bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium"
                >
                  Escribir mensaje personalizado
                </button>
              </div>
              
              <p className="text-xs text-gray-500 mt-3 text-center">
                Al hacer clic, se abrirá WhatsApp en una nueva ventana
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 z-40 w-14 h-14 bg-green-600 hover:bg-green-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110"
        aria-label="Abrir chat de WhatsApp"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <MessageCircle className="w-6 h-6" />
        )}
      </button>

      {/* Pulse Animation */}
      {!isOpen && (
        <div className="fixed bottom-4 right-4 z-30 w-14 h-14 bg-green-600/20 rounded-full animate-ping" />
      )}
    </>
  )
}