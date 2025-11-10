import { Check } from "lucide-react"

export default function Experience() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-50/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="flex flex-col items-center">
            <div className="w-4/5 h-[400px] rounded-lg shadow-lg overflow-hidden">
              <img
                src="/fondos/1A02174E-26BC-4430-B752-4E8F9329013B_1_105_c.jpeg"
                alt="Equipo de transportes Monarca"
                className="w-full h-full object-cover object-center scale-110"
                style={{ objectPosition: 'center 30%' }}
              />
            </div>
            <div className="mt-6 bg-primary text-white p-5 rounded-lg text-center w-4/5">
              <div className="text-4xl font-bold mb-2">Desde 2018</div>
              <p className="text-white/90 text-sm">Líderes en transporte internacional</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Desde <span className="text-primary">2018</span>, Conectando Norteamérica
            </h2>
            <p className="text-foreground/60 text-lg mb-8">
              Transportes Internacionales Monarca nació con la misión de conectar los principales corredores comerciales
              de Norteamérica. Desde Nuevo Laredo, México, operamos rutas que abarcan todo Estados Unidos y la
              totalidad del territorio mexicano, con especialización en cruces fronterizos y logística integral.
            </p>

            <div className="space-y-4">
              {[
                "Experiencia probada en cruces fronterizos",
                "Cobertura completa: todos los estados de USA y México",
                "Flota lista y preparada para cumplir con la demanda al momento",
                "Seguimiento en tiempo real y documentación aduanal especializada",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
