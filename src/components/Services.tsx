import React from 'react'
import { CloudHail, Car, ShieldCheck, Building2, ArrowRight } from 'lucide-react'

const SERVICES = [
  {
    icon: CloudHail,
    title: 'Daño por Granizo',
    badge: 'Especialistas',
    desc: 'Restauración completa de capot, techo, portón y laterales afectados por tormentas de granizo. Devolvemos la geometría al metal sin tocar la pintura.',
    tag: 'Entrega en 24 a 48 hs',
    badgeColor: 'bg-[#c0272d] text-white',
  },
  {
    icon: Car,
    title: 'Portazos y Estacionamiento',
    badge: 'En el día',
    desc: 'Reparamos esos molestos golpes en estacionamientos, cocheras o toques de tránsito. Lo traés a la mañana y te lo llevás listo por la tarde.',
    tag: 'Servicio Express',
    badgeColor: 'bg-[#123a6b] text-white',
  },
  {
    icon: ShieldCheck,
    title: 'Gestión con Seguros',
    badge: 'Presupuesto Oficial',
    desc: 'Presupuestos oficiales para todas las compañías aseguradoras (La Segunda, San Cristóbal, Federación Patronal, Zurich, Rivadavia, Allianz, etc.).',
    tag: 'Sin cargo de gestión',
    badgeColor: 'bg-[#3f7d4f] text-white',
  },
  {
    icon: Building2,
    title: 'Flotas y Concesionarias',
    badge: 'B2B & Lotes',
    desc: 'Atención corporativa para parques automotores y concesionarias oficiales ante eventos climáticos masivos con capacidad de respuesta inmediata.',
    tag: 'Auditoría de fábrica',
    badgeColor: 'bg-[#b3792f] text-white',
  },
]

export const Services: React.FC = () => {
  return (
    <section id="servicios" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#123a6b]/10 border border-[#123a6b]/20 text-xs font-mono font-bold uppercase tracking-wider text-[#123a6b] mb-3">
          <span>Nuestras Especialidades</span>
        </div>
        <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-[#123a6b]">
          ¿Qué Hacemos en <span className="text-[#c0272d]">Águila Blanca?</span>
        </h2>
        <p className="mt-3 text-[#475569] text-base sm:text-lg font-sans">
          Soluciones directas y profesionales para recuperar la estética impecable de tu vehículo.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SERVICES.map((s, idx) => {
          const Icon = s.icon
          return (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-white border-2 border-[#d3d9de] shadow-ficha shadow-ficha-hover flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-[#eef1f3] border border-[#d3d9de] text-[#123a6b] flex items-center justify-center">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`px-2.5 py-0.5 rounded font-mono text-[10px] font-bold uppercase tracking-wider ${s.badgeColor}`}>
                    {s.badge}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-[#1b1d21] uppercase leading-snug">
                  {s.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-[#64748b] leading-relaxed font-sans">
                  {s.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#e2e8f0] flex items-center justify-between text-xs font-mono font-semibold text-[#123a6b]">
                <span>{s.tag}</span>
                <ArrowRight className="w-4 h-4 text-[#c0272d]" />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
