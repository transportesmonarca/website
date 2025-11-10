export default function Stats() {
  const stats = [
    { number: "Desde 2018", label: "Conectando Norteamérica" },
    { number: "5000+", label: "Embarques Anuales" },
    { number: "USA, MX, CA", label: "Cobertura Completa" },
    { number: "24/7", label: "Servicio al Cliente" },
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <p className="text-foreground/70 text-sm md:text-base font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
