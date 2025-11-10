import { Truck, Package, FileText, Award, Shield } from "lucide-react"

export default function Services() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestros Servicios</h2>
          <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
            Ofrecemos soluciones integrales de transporte y logística para satisfacer todas tus necesidades comerciales
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Services List */}
          <div className="space-y-6">
            {[
              {
                icon: Truck,
                title: "Transporte Terrestre",
                description:
                  "Servicios especializados de transporte de carga por carretera hacia Estados Unidos.",
              },
              {
                icon: Package,
                title: "Logística Integral",
                description: "Soluciones completas de manera segura para el transporte de sus mercancías",
              },
              {
                icon: Shield,
                title: "Confianza y Transparencia",
                description: "Compromiso total con la seguridad, puntualidad y comunicación constante en cada envío",
              },
              {
                icon: FileText,
                title: "Gestión Aduanal",
                description: "Trámites y documentación especializada para el cruce fronterizo",
              },
            ].map((service, index) => {
              const Icon = service.icon
              return (
                <div key={index} className={`p-6 rounded-xl ${index === 0 ? "bg-primary text-white" : "bg-white"}`}>
                  <div className="flex gap-4">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                        index === 0 ? "bg-white/20" : "bg-primary/10"
                      }`}
                    >
                      <Icon size={24} className={index === 0 ? "text-white" : "text-primary"} />
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg mb-1 ${index === 0 ? "text-white" : "text-foreground"}`}>
                        {service.title}
                      </h3>
                      <p className={index === 0 ? "text-white/90" : "text-foreground/70"}>{service.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Truck Image */}
          <div className="flex justify-center">
            <img
              src="/fondos/unnamed (2).jpg"
              alt="Camión de transporte Monarca"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
