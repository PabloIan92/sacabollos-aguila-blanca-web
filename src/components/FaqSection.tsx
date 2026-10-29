import React, { useState } from 'react'
import { ChevronDown, HelpCircle } from 'lucide-react'

const FAQS = [
  {
    q: '¿Hay algún riesgo de que la pintura original se salte o debilite durante el proceso?',
    a: 'Ninguno. La pintura original de fábrica (OEM) posee una elasticidad molecular muy superior a cualquier repintado posterior. La técnica PDR aplica micropresión y masaje térmico controlado que acompaña la memoria elástica del metal sin fisurar el barniz. Si la pintura no se raspó en el golpe inicial, queda exactamente intacta y como nueva.',
  },
  {
    q: 'Mi auto está en garantía oficial de 0km. ¿El PDR anula la garantía de fábrica?',
    a: 'Todo lo contrario: es el único método avalado y exigido por las terminales automotrices para no perder la garantía oficial. Los talleres de chapa tradicional queman o lijan el tratamiento de cataforesis anticorrosiva interna; el PDR no altera en absoluto las capas protectoras del fabricante.',
  },
  {
    q: '¿El seguro me cubre el arreglo por sacabollos o me obliga a llevarlo al taller de chapa?',
    a: 'Por ley de seguros y derecho del asegurado, tenés total libertad de elegir el taller de tu confianza. Las aseguradoras prefieren ampliamente la técnica PDR porque entrega un resultado superior y acorta drásticamente los tiempos de indemnización. Nosotros emitimos el presupuesto oficial homologado y gestionamos la aprobación con tu compañía.',
  },
  {
    q: '¿Qué pasa si el bollo agarró una nervadura, filo o chapa de aluminio?',
    a: 'En Águila Blanca contamos con herramental específico para aleaciones de aluminio (que requiere mayor control de temperatura y tracción) y técnicas de destensado para nervaduras y líneas de diseño complejas. El 95% de los bollos en nervaduras pueden recuperarse al 100% sin necesidad de pintura.',
  },
  {
    q: '¿Cuánto tiempo se tarda en reparar un auto con granizo completo?',
    a: 'Mientras un taller tradicional de chapa y pintura retiene el vehículo entre 15 y 30 días hábiles, en Águila Blanca un trabajo de granizo promedio se completa en 24 a 72 horas hábiles, devolviéndote la movilidad casi de inmediato.',
  },
  {
    q: '¿Cómo hago para pedir un presupuesto preliminar?',
    a: 'Simplemente usá nuestro cotizador interactivo arriba o envianos por WhatsApp fotos del daño tomadas en diagonal con buena iluminación. Nuestro perito te responderá en el día con un estimado y los pasos a seguir.',
  },
]

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx)
  }

  return (
    <section id="faq" className="py-20 bg-[#090b0e] relative border-t border-white/5">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#123a6b]/50 border border-[#1c4f8c] text-xs font-semibold text-sky-300 uppercase tracking-wider mb-3">
            <HelpCircle className="w-3.5 h-3.5 text-[#ffb800]" />
            <span>Respuestas Claras</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold uppercase tracking-tight text-white">
            Preguntas <span className="text-[#ffb800]">Frecuentes</span>
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base">
            Todo lo que necesitás saber antes de confiar tu vehículo a nuestro centro técnico.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx
            return (
              <div
                key={idx}
                className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 font-display text-base sm:text-lg font-bold text-white uppercase tracking-wide hover:text-[#ffb800] transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#ffb800] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-slate-300 text-xs sm:text-sm leading-relaxed border-t border-white/5">
                    {faq.a}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
