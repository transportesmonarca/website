import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          Conectamos México con Norteamérica
        </h2>

        <p className="text-lg text-muted-foreground mb-8 text-balance max-w-2xl mx-auto leading-relaxed">
          Únete a cientos de empresas que confían en Monarca para sus necesidades logísticas internacionales. Solicita
          una cotización hoy y descubre cómo podemos mejorar tu cadena de suministro.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground group">
            Solicitar Cotización Ahora
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
          </Button>
          <Button size="lg" variant="outline" className="border-border hover:bg-card bg-transparent">
            Hablar con Especialista
          </Button>
        </div>

        <div className="mt-12 pt-12 border-t border-border">
          <p className="text-muted-foreground text-sm mb-6">Por qué confían en Monarca</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <p className="text-3xl font-bold text-primary mb-2">10K+</p>
              <p className="text-muted-foreground">Envíos Mensuales</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-2">99.5%</p>
              <p className="text-muted-foreground">Puntualidad</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary mb-2">150+</p>
              <p className="text-muted-foreground">Países Conectados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
