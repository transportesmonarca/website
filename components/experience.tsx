import { Check } from "lucide-react"

export default function Experience() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Desde <span className="text-primary">2018</span>, Conectando Norteamérica
            </h2>
            <p className="text-foreground/60 text-lg mb-8">
              Transportes Internacionales Monarca nació con la misión de conectar los principales corredores comerciales
              de Norteamérica. Desde Nuevo Laredo, México, operamos rutas que abarcan todo Estados Unidos, Canadá y la
              totalidad del territorio mexicano, con especialización en cruces fronterizos y logística integral.
            </p>

            <div className="space-y-4">
              {[
                "Experiencia probada en 150+ cruces fronterizos USA-México",
                "Cobertura completa: todos los estados de USA, México y Canadá",
                "Flota moderna y operadores certificados desde 2018",
                "Seguimiento en tiempo real y documentación aduanal especializada",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Image */}
          <div>
            <img
              src="/fondos/unnamed (3).jpg"
              alt="Equipo de transportes Monarca"
              className="rounded-lg shadow-lg w-full h-auto"
            />
            <div className="mt-6 bg-primary text-white p-6 rounded-lg text-center">
              <div className="text-5xl font-bold mb-2">Desde 2018</div>
              <p className="text-white/90">Líderes en transporte internacional</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
