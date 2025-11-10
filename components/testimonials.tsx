import { Card } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Carlos Mendoza",
    title: "Director Logístico en ExportCorp",
    content:
      "Monarca transformó completamente nuestra cadena de suministro. Sus envíos siempre llegan a tiempo y en perfecto estado. Confiamos completamente en ellos.",
    avatar: "👨‍💼",
  },
  {
    name: "Isabel García",
    title: "Gerente de Operaciones en TechShip",
    content:
      "La mejor decisión que tomamos para nuestras exportaciones. El servicio es profesional, puntual y los precios son muy competitivos.",
    avatar: "👩‍💼",
  },
  {
    name: "Roberto Ruiz",
    title: "CEO en GlobalTrade",
    content:
      "Monarca ofrece una cobertura excepcional a nivel mundial. Su equipo es responsable y siempre está atento a nuestras necesidades.",
    avatar: "👨‍🔬",
  },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Lo que Dicen Nuestros Clientes
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Miles de empresas confían en Monarca para sus transportes internacionales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border p-8 hover:border-primary/50 transition-colors">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} className="fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed text-balance">"{testimonial.content}"</p>

              <div className="flex items-center gap-4">
                <span className="text-2xl">{testimonial.avatar}</span>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
