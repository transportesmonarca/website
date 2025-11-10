"use client"

import { useState } from "react"
import { X, CheckCircle } from "lucide-react"

interface QuoteModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function QuoteModal({ isOpen, onClose }: QuoteModalProps) {
  const [formData, setFormData] = useState({
    nombre_cliente: "",
    empresa: "",
    email: "",
    telefono: "",
    origen: "",
    destino: "",
    tipo_mercancia: "",
    peso_kg: "",
    fecha_estimada: "",
    tipo_carga: "General",
    observaciones: "",
    acepta_privacidad: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const [showPrivacyModal, setShowPrivacyModal] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!formData.email || !formData.telefono) {
      alert("Por favor completa los campos obligatorios: Email y Teléfono")
      return
    }

    if (!formData.acepta_privacidad) {
      alert("Debes aceptar el aviso de privacidad para continuar")
      return
    }

    setIsSubmitting(true)

    try {
      const response = await fetch("/api/cotizacion", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setShowSuccess(true)
        setTimeout(() => {
          setShowSuccess(false)
          onClose()
          setFormData({
            nombre_cliente: "",
            empresa: "",
            email: "",
            telefono: "",
            origen: "",
            destino: "",
            tipo_mercancia: "",
            peso_kg: "",
            fecha_estimada: "",
            tipo_carga: "General",
            observaciones: "",
            acepta_privacidad: false
          })
        }, 3000)
      } else {
        alert("Error al enviar la cotización. Por favor intenta de nuevo.")
      }
    } catch (error) {
      console.error("Error:", error)
      alert("Error al enviar la cotización. Por favor intenta de nuevo.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  if (showSuccess) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-lg p-8 max-w-md w-full text-center">
          <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-foreground mb-2">¡Cotización Enviada!</h3>
          <p className="text-foreground/70">
            Hemos recibido tu solicitud. Te enviaremos un correo de confirmación y nos pondremos en contacto contigo pronto.
          </p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
        <div className="bg-white rounded-lg max-w-2xl w-full my-8">
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b">
            <h2 className="text-xl font-bold text-foreground">Solicitar Cotización</h2>
            <button
              onClick={onClose}
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Información del Cliente */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold text-foreground mb-3">Información de Contacto</h3>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  value={formData.nombre_cliente}
                  onChange={(e) => setFormData({ ...formData, nombre_cliente: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="correo@ejemplo.com"
                />
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Teléfono <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  required
                  value={formData.telefono}
                  onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="+52 867 000 0000"
                />
              </div>

              {/* Detalles del Envío */}
              <div className="md:col-span-2 mt-2">
                <h3 className="text-lg font-semibold text-foreground mb-3">Detalles del Envío</h3>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Origen
                </label>
                <input
                  type="text"
                  value={formData.origen}
                  onChange={(e) => setFormData({ ...formData, origen: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Ciudad, Estado"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Destino
                </label>
                <input
                  type="text"
                  value={formData.destino}
                  onChange={(e) => setFormData({ ...formData, destino: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Ciudad, Estado"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tipo de Mercancía
                </label>
                <input
                  type="text"
                  value={formData.tipo_mercancia}
                  onChange={(e) => setFormData({ ...formData, tipo_mercancia: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Ej: Electrónicos, Alimentos"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Peso Estimado (kg)
                </label>
                <input
                  type="number"
                  value={formData.peso_kg}
                  onChange={(e) => setFormData({ ...formData, peso_kg: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="1000"
                />
              </div>

              {/* Aviso de Privacidad */}
              <div className="md:col-span-2 mt-2">
                <label className="flex items-start gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.acepta_privacidad}
                    onChange={(e) => setFormData({ ...formData, acepta_privacidad: e.target.checked })}
                    className="mt-1 w-4 h-4 text-primary focus:ring-primary border-gray-300 rounded"
                    required
                  />
                  <span className="text-sm text-foreground/70">
                    Acepto el{" "}
                    <button
                      type="button"
                      onClick={() => setShowPrivacyModal(true)}
                      className="text-primary hover:underline font-medium"
                    >
                      Aviso de Privacidad
                    </button>{" "}
                    y autorizo el tratamiento de mis datos <span className="text-red-500">*</span>
                  </span>
                </label>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mt-4">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 border border-gray-300 rounded-lg text-foreground hover:bg-gray-50 transition-colors text-sm"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed text-sm"
              >
                {isSubmitting ? "Enviando..." : "Enviar Cotización"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Privacy Modal */}
      {showPrivacyModal && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-[60] p-4"
          onClick={() => setShowPrivacyModal(false)}
        >
          <div 
            className="bg-white rounded-lg max-w-4xl max-h-[80vh] overflow-y-auto p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-foreground">Aviso de Privacidad</h2>
              <button 
                className="text-foreground/60 hover:text-foreground text-2xl"
                onClick={() => setShowPrivacyModal(false)}
              >
                ×
              </button>
            </div>
            
            <div className="space-y-4 text-foreground/80 text-sm leading-relaxed">
              <p>Su privacidad y confianza son muy importantes para nosotros. Por ello, queremos asegurarnos de que conozca cómo salvaguardamos la integridad, privacidad y protección de sus Datos Personales.</p>
              
              <p>Consideramos que, por ser una empresa socialmente responsable, tenemos la obligación legal y social de cumplir con las medidas legales y de seguridad suficientes para proteger aquellos Datos Personales que se hayan recabado para las finalidades que se describen en el presente aviso de privacidad.</p>
              
              <p>En cumplimiento de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, su Reglamento y demás normativas aplicables en la materia, se emite el presente Aviso de Privacidad Integral bajo los siguientes términos:</p>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">I. Identidad y domicilio del responsable</h3>
                <p>Transportes Internacionales Monarca, S.A. de C.V. (en adelante, "el Responsable"), con domicilio en Nuevo Laredo, Tamaulipas, México, es el responsable del tratamiento, uso y protección de sus datos personales.</p>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-foreground mb-3">II. Finalidades del tratamiento</h3>
                <h4 className="font-semibold text-foreground mb-2">Finalidades primarias</h4>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Identificación y validación de identidad.</li>
                  <li>Gestión de cotizaciones, altas, bajas y modificaciones en el padrón de clientes.</li>
                  <li>Emisión de facturación y control administrativo.</li>
                  <li>Celebración de convenios o contratos de servicios, nacionales e internacionales.</li>
                  <li>Gestión de cuentas por cobrar.</li>
                  <li>Elaboración de estadísticas internas.</li>
                  <li>Cumplimiento de obligaciones legales, fiscales y contractuales.</li>
                  <li>Atención de requerimientos de autoridades administrativas o judiciales.</li>
                </ul>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => setShowPrivacyModal(false)}
                  className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
