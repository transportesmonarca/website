export default function Routes() {
  const routes = [
    { from: "México", to: "Estados Unidos" },
    { from: "México", to: "Canadá" },
    { from: "Nuevo Laredo", to: "Texas" },
    { from: "Nacional", to: "Todo México" },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Rutas Principales</h2>
          <p className="text-foreground/60 text-lg">
            Conectamos los principales corredores comerciales de América del Norte
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {routes.map((route, index) => (
            <div key={index} className="bg-amber-50/50 rounded-lg p-6 border border-amber-100/50 text-center">
              <div className="flex justify-center mb-4">
                <div className="flex items-center gap-3">
                  <span className="w-3 h-3 rounded-full bg-green-500"></span>
                  <div className="h-px w-12 bg-foreground/20"></div>
                  <span className="w-3 h-3 rounded-full bg-primary"></span>
                </div>
              </div>
              <p className="font-bold text-foreground mb-2">{route.from}</p>
              <p className="text-sm text-foreground/60 mb-3">hacia</p>
              <p className="font-bold text-primary text-lg">{route.to}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
