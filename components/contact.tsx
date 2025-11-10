import { MapPin, Phone, Mail } from "lucide-react"

export default function Contact() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contáctanos</h2>
          <p className="text-foreground/60 text-lg">
            Estamos ubicados estratégicamente en Nuevo Laredo para servir mejor a nuestros clientes
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: MapPin,
              title: "Ubicación",
              details: ["Nuevo Laredo, Tamaulipas", "México"],
            },
            {
              icon: Phone,
              title: "Teléfono",
              details: ["+52 867 225 4260", "Servicio 24/7"],
            },
            {
              icon: Mail,
              title: "Email",
              details: ["exportaciones@tmonarca.com.mx", "ventas@monarcatransportes.com"],
            },
          ].map((contact, index) => {
            const Icon = contact.icon
            return (
              <div key={index} className="bg-amber-50/50 rounded-lg p-8 text-center border border-amber-100/50">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon size={32} className="text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-3">{contact.title}</h3>
                <div className="space-y-1">
                  {contact.details.map((detail, i) => (
                    <p key={i} className="text-foreground/70 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
