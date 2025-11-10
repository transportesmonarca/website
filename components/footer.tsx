"use client"

import { Mail, Phone, Facebook, Instagram, Linkedin, MapPin } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-foreground/10 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image 
                src="/logo/logo_monarca.png" 
                alt="Logo Monarca" 
                width={50} 
                height={50}
                className="object-contain"
              />
              <div className="flex flex-col leading-none">
                <span className="text-sm font-bold text-foreground">Transportes</span>
                <span className="text-sm font-bold text-foreground">Internacionales</span>
                <span className="text-xl font-bold text-primary">MONARCA</span>
              </div>
            </div>
            <p className="text-foreground/60 text-sm">Conectando México con Norteamérica desde 2018.</p>
            <div className="mt-4">
              <a 
                href="https://monarcatransportes.netlify.app/login" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-primary transition text-sm"
              >
                CRM
              </a>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Servicios</h4>
            <ul className="space-y-2">
              {["Transporte Terrestre", "Logística Integral", "Gestión Aduanal", "Carga Especializada"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-foreground/60 hover:text-primary transition text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinos */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Destinos</h4>
            <ul className="space-y-2">
              {["Estados Unidos", "Todo México", "Nuevo Laredo"].map((item) => (
                <li key={item}>
                  <a href="#" className="text-foreground/60 hover:text-primary transition text-sm">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="font-bold text-foreground mb-4">Contacto</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin size={16} className="text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground/60 text-sm">Nuevo Laredo, Tamaulipas</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone size={16} className="text-primary flex-shrink-0" />
                <span className="text-foreground/60 text-sm">+52 867 225 4260</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} className="text-primary flex-shrink-0" />
                <span className="text-foreground/60 text-sm">exportaciones@tmonarca.com.mx</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-foreground/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-6">
            <div className="flex flex-col md:flex-row gap-4 items-center text-foreground/60 text-sm text-center md:text-left">
              <p>© 2025 Transportes Internacionales Monarca. Todos los derechos reservados.</p>
              <button 
                className="text-primary hover:text-primary/80 transition underline"
                onClick={() => {
                  const modal = document.getElementById('privacy-modal');
                  if (modal) modal.style.display = 'block';
                }}
              >
                Aviso de Privacidad
              </button>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href="#"
                    aria-label={social.label}
                    className="text-foreground/60 hover:text-primary transition"
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Privacy Modal */}
          <div 
            id="privacy-modal" 
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            style={{display: 'none'}}
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                const modal = document.getElementById('privacy-modal');
                if (modal) modal.style.display = 'none';
              }
            }}
          >
            <div className="bg-white rounded-lg max-w-4xl max-h-[80vh] overflow-y-auto p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-foreground">Aviso de Privacidad</h2>
                <button 
                  className="text-foreground/60 hover:text-foreground text-2xl"
                  onClick={() => {
                    const modal = document.getElementById('privacy-modal');
                    if (modal) modal.style.display = 'none';
                  }}
                >
                  ×
                </button>
              </div>
              
              <div className="space-y-4 text-foreground/80 text-sm leading-relaxed">
                <p>Su privacidad y confianza son muy importantes para nosotros. Por ello, queremos asegurarnos de que conozca cómo salvaguardamos la integridad, privacidad y protección de sus Datos Personales.</p>
                
                <p>Consideramos que, por ser una empresa socialmente responsable, tenemos la obligación legal y social de cumplir con las medidas legales y de seguridad suficientes para proteger aquellos Datos Personales que se hayan recabado para las finalidades que se describen en el presente aviso de privacidad.</p>
                
                <p>En cumplimiento de la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, su Reglamento y demás normativas aplicables en la materia, se emite el presente Aviso de Privacidad Integral bajo los siguientes términos:</p>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">I. Identidad y domicilio del responsable</h3>
                  <p>Transportes Internacionales Monarca, S.A. de C.V. (en adelante, "el Responsable"), con domicilio en Nuevo Laredo, Tamaulipas, México, es el responsable del tratamiento, uso y protección de sus datos personales.</p>
                </div>
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">II. Finalidades del tratamiento</h3>
                  <h4 className="font-semibold text-foreground mb-2">Finalidades primarias</h4>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Identificación y validación de identidad.</li>
                    <li>Gestión de cotizaciones, altas, bajas y modificaciones en el padrón de clientes.</li>
                    <li>Emisión de facturación y control administrativo.</li>
                    <li>Celebración de convenios o contratos de servicios, nacionales e internacionales.</li>
                    <li>Gestión de cuentas por cobrar.</li>
                    <li>Elaboración de estadísticas internas.</li>
                    <li>Cumplimiento de obligaciones legales, fiscales y contractuales.</li>
                    <li>Atención de requerimientos de autoridades administrativas o judiciales.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
