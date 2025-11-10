import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Paquetería",
    price: "$250",
    period: "/envío",
    description: "Para paquetes pequeños y medianos",
    cta: "Cotizar",
    highlighted: false,
    features: ["Hasta 30kg", "Entrega en 5-7 días", "Rastreo básico", "Seguro estándar", "América Latina"],
  },
  {
    name: "Carga Estándar",
    price: "$1,200",
    period: "/contenedor",
    description: "Para empresas en crecimiento",
    cta: "Cotizar",
    highlighted: true,
    features: [
      "Hasta 20 toneladas",
      "Entrega en 10-14 días",
      "Rastreo avanzado en tiempo real",
      "Seguro Premium",
      "Cobertura Global",
      "Puerta a puerta",
      "Documentación incluida",
    ],
  },
  {
    name: "Soluciones Empresariales",
    price: "Personalizado",
    period: "",
    description: "Para grandes volúmenes y necesidades especiales",
    cta: "Contactar Ventas",
    highlighted: false,
    features: [
      "Carga personalizada",
      "Rutas optimizadas",
      "Rastreo dedicado 24/7",
      "Seguro a medida",
      "Cobertura mundial",
      "Cuenta ejecutiva",
      "Tarifas corporativas",
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Planes de Transporte Flexibles
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Elige el plan que se adapte mejor a tus necesidades logísticas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`border transition-all ${
                plan.highlighted
                  ? "bg-primary/10 border-primary md:scale-105 md:shadow-2xl"
                  : "bg-background border-border hover:border-primary/50"
              } p-8`}
            >
              <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
              <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

              <div className="mb-6">
                <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                <span className="text-muted-foreground ml-2">{plan.period}</span>
              </div>

              <Button
                className={`w-full mb-8 ${
                  plan.highlighted
                    ? "bg-primary hover:bg-primary/90 text-primary-foreground"
                    : "bg-card hover:bg-card/80 text-foreground border border-border"
                }`}
              >
                {plan.cta}
              </Button>

              <div className="space-y-4">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-foreground text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Consulta con nuestro equipo para obtener descuentos por volumen y contratos anuales.
          </p>
        </div>
      </div>
    </section>
  )
}
