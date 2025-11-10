"use client"

import { Users, Shield } from "lucide-react"

export default function Recruitment() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Únete a Nuestro Equipo
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
            Buscamos operadores profesionales comprometidos con la excelencia. 
            Forma parte de la familia Monarca y construye una carrera sólida en el transporte internacional.
          </p>
        </div>

        {/* Benefits Grid with CTA */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Benefit Cards */}
          <div className="space-y-8">
            {[
              {
                icon: Shield,
                title: "Seguridad Total",
                description: "Programas completos de seguridad y protección para nuestros operadores"
              },
                          {
                icon: Users,
                title: "Ambiente Familiar",
                description: "Desde 2018 formando una gran familia de transportistas"
            }
            ].map((benefit, index) => {
              const Icon = benefit.icon
              return (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-foreground/60 text-sm">{benefit.description}</p>
                </div>
              )
            })}
          </div>

          {/* Right Column - CTA Card */}
          <div className="bg-gradient-to-br from-primary to-primary/80 rounded-xl shadow-xl p-8 text-white flex flex-col justify-center">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">¿Listo para unirte?</h3>
              <p className="text-white/90 mb-8 text-lg">
                Envía tu CV y documentos al correo de recursos humanos o contáctanos directamente por WhatsApp.
              </p>
              <div className="flex flex-col gap-4">
                <a 
                  href="mailto:rh@tmonarca.com.mx?subject=Solicitud%20de%20Empleo%20-%20Operador"
                  className="bg-white text-primary px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-center font-semibold"
                >
                  Enviar CV por Email
                </a>
                <a 
                  href="https://wa.me/528672254260?text=Hola,%20estoy%20interesado%20en%20trabajar%20como%20operador%20en%20Transportes%20Monarca"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors text-center font-semibold"
                >
                  WhatsApp RH
                </a>
              </div>
              <p className="text-white/70 mt-6 text-sm">
                También puedes acudir a nuestras oficinas en Nuevo Laredo, Tamaulipas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}