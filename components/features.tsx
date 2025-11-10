import { Card } from "@/components/ui/card"
import { Truck, Shield, Globe } from "lucide-react"

const features = [
  {
    icon: Truck,
    title: "Flotas Modernas",
    description:
      "Vehículos de última generación con tecnología GPS y monitoreo en tiempo real para garantizar la seguridad de tu carga.",
  },
  {
    icon: Shield,
    title: "Máxima Seguridad",
    description: "Sistemas de aseguranza integral, seguimiento 24/7 y protección contra cualquier eventualidad.",
  },
  {
    icon: Globe,
    title: "Cobertura Global",
    description:
      "Conectamos más de 150 países con rutas optimizadas y socios logísticos confiables en cada continente.",
  },
]

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Servicios de Transporte Premium
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Soluciones logísticas diseñadas para empresas que demandan excelencia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card key={index} className="bg-background border-border hover:border-primary/50 transition-colors p-8">
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-6">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </Card>
            )
          })}
        </div>

        {/* Feature benefits grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { label: "99.5%", description: "Puntualidad" },
            { label: "24/7", description: "Soporte" },
            { label: "500+", description: "Destinos" },
            { label: "25+", description: "Años Exp." },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl md:text-3xl font-bold text-primary mb-1">{stat.label}</p>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
