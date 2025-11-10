"use client"

import { MessageCircle, X, Send, Phone } from "lucide-react"
import { useState } from "react"

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false)
  const [showChat, setShowChat] = useState(false)
  const [customMessage, setCustomMessage] = useState("")
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
    setCustomMessage("")
  }

  const handleSendMessage = () => {
    if (customMessage.trim()) {
      openWhatsApp(customMessage)
      setCustomMessage("")
    }
  }

  const handleCallWhatsApp = () => {
    window.open(`tel:+${phoneNumber}`, '_self')
  }

  return (
    <>
      {/* WhatsApp Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-50 w-96 max-w-[90vw]">
          <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-to-r from-green-600 to-green-500 text-white p-4">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <MessageCircle className="w-7 h-7 text-green-600" />
                    </div>
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-white rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Transportes Monarca</h3>
                    <p className="text-green-50 text-sm flex items-center gap-1">
                      <span className="w-2 h-2 bg-green-300 rounded-full animate-pulse"></span>
                      En línea ahora
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setIsOpen(false)}
                  className="text-white/80 hover:text-white transition-colors p-1 hover:bg-white/10 rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="bg-gray-50">
              {!showChat ? (
                /* Initial View with Options */
                <div className="p-4 max-h-[500px] overflow-y-auto">
                  <div className="mb-4">
                    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                      <p className="text-gray-700 leading-relaxed">
                        <span className="text-2xl">👋</span><br/>
                        <span className="font-semibold">¡Hola!</span> Somos Transportes Internacionales Monarca.
                      </p>
                      <p className="text-sm text-gray-600 mt-2">
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
                        className="w-full text-left p-3 bg-white border border-gray-200 rounded-xl hover:bg-green-50 hover:border-green-400 transition-all text-sm group shadow-sm"
                      >
                        <span className="group-hover:text-green-700 font-medium">
                          {msg.text}
                        </span>
                      </button>
                    ))}
                    
                    {/* Custom message button */}
                    <button
                      onClick={() => setShowChat(true)}
                      className="w-full bg-green-600 text-white p-3 rounded-xl hover:bg-green-700 transition-colors text-sm font-semibold shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      <MessageCircle className="w-4 h-4" />
                      Escribir mensaje personalizado
                    </button>

                    {/* Call button */}
                    <button
                      onClick={handleCallWhatsApp}
                      className="w-full bg-white border-2 border-green-600 text-green-600 p-3 rounded-xl hover:bg-green-50 transition-colors text-sm font-semibold flex items-center justify-center gap-2"
                    >
                      <Phone className="w-4 h-4" />
                      Llamar ahora
                    </button>
                  </div>
                </div>
              ) : (
                /* Custom Message View */
                <div className="p-4">
                  <button
                    onClick={() => setShowChat(false)}
                    className="text-green-600 text-sm mb-3 hover:underline flex items-center gap-1"
                  >
                    ← Volver a opciones
                  </button>
                  
                  <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-4">
                    <p className="text-sm text-gray-600 mb-3">
                      Escribe tu mensaje y te responderemos en WhatsApp:
                    </p>
                    <textarea
                      value={customMessage}
                      onChange={(e) => setCustomMessage(e.target.value)}
                      placeholder="Escribe tu mensaje aquí..."
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
                      rows={4}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' && !e.shiftKey) {
                          e.preventDefault()
                          handleSendMessage()
                        }
                      }}
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!customMessage.trim()}
                      className="w-full mt-3 bg-green-600 text-white p-3 rounded-lg hover:bg-green-700 transition-colors text-sm font-semibold disabled:bg-gray-300 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      <Send className="w-4 h-4" />
                      Enviar mensaje
                    </button>
                  </div>
                </div>
              )}
              
              <div className="px-4 pb-4">
                <p className="text-xs text-gray-500 text-center bg-white rounded-lg p-2 border border-gray-100">
                  🔒 Conversación segura y privada
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 group"
        style={{
          animation: isOpen ? 'none' : 'bounce 2s infinite'
        }}
        aria-label="Abrir chat de WhatsApp"
      >
        {isOpen ? (
          <X className="w-7 h-7 transition-transform group-hover:rotate-90" />
        ) : (
          <MessageCircle className="w-7 h-7" />
        )}
        
        {/* Notification badge */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-xs rounded-full flex items-center justify-center font-bold border-2 border-white">
            1
          </div>
        )}
      </button>

      {/* Pulse Animation */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-30 w-16 h-16 bg-green-500/30 rounded-full animate-ping pointer-events-none" />
      )}
    </>
  )
}