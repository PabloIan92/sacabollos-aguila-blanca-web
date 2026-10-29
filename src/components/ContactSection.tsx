import React from 'react'
import { MessageCircle, Clock, MapPin, ShieldCheck } from 'lucide-react'

export const ContactSection: React.FC = () => {
  return (
    <section id="contacto" className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-3xl bg-gradient-to-br from-[#123a6b] via-[#154278] to-[#1c4f8c] text-white p-8 sm:p-14 border-2 border-[#123a6b] shadow-ficha-lg relative overflow-hidden">
        {/* Background ambient pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.08),transparent)] pointer-events-none" />

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 relative z-10">
          <span className="px-3 py-1 rounded-full bg-white/10 text-[#ffd166] text-xs font-mono font-bold uppercase tracking-wider border border-white/20">
            Diagnóstico Sin Cargo por WhatsApp
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mt-4">
            ¿Tenés un bollo en tu auto?{' '}
            <span className="text-[#ffd166]">Escribinos ahora</span>
          </h2>
          <p className="mt-3 text-sky-100 text-sm sm:text-base font-sans">
            Envianos una foto o video del daño por WhatsApp y nuestro técnico te responde en el día con el diagnóstico y presupuesto oficial.
          </p>
        </div>

        {/* 3 Quick Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10 relative z-10 max-w-4xl mx-auto text-left">
          <div className="p-4 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#ffd166] text-[#123a6b] flex items-center justify-center font-display font-black text-sm shrink-0">
              1
            </div>
            <div>
              <strong className="text-white block font-display text-sm uppercase tracking-wider">
                Sacale una foto
              </strong>
              <p className="text-xs text-sky-200 mt-0.5">
                Fotografiá el golpe con luz natural de costado para ver el reflejo.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#ffd166] text-[#123a6b] flex items-center justify-center font-display font-black text-sm shrink-0">
              2
            </div>
            <div>
              <strong className="text-white block font-display text-sm uppercase tracking-wider">
                Envianos por WhatsApp
              </strong>
              <p className="text-xs text-sky-200 mt-0.5">
                Tocá el botón de abajo y adjuntá la foto con el modelo de tu auto.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm flex items-start gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#ffd166] text-[#123a6b] flex items-center justify-center font-display font-black text-sm shrink-0">
              3
            </div>
            <div>
              <strong className="text-white block font-display text-sm uppercase tracking-wider">
                Presupuesto en el Acto
              </strong>
              <p className="text-xs text-sky-200 mt-0.5">
                Te confirmamos si es apto para PDR, tiempo estimado y costo.
              </p>
            </div>
          </div>
        </div>

        {/* Big Action Button */}
        <div className="text-center mb-12 relative z-10">
          <a
            href="https://wa.me/5491122334455?text=Hola%20Águila%20Blanca,%20les%20adjunto%20fotos%20del%20daño%20de%20mi%20auto%20para%20presupuestar."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-2xl bg-[#c0272d] hover:bg-[#a51d23] text-white font-display font-black text-lg sm:text-xl uppercase tracking-wider shadow-[4px_4px_0_rgba(0,0,0,0.35)] transition-all active:scale-95 group w-full sm:w-auto border border-white/20"
          >
            <MessageCircle className="w-6 h-6 fill-white group-hover:scale-110 transition-transform" />
            <span>Enviar Fotos por WhatsApp Ahora</span>
          </a>
        </div>

        {/* 3 Pillars of Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/15 text-xs sm:text-sm relative z-10">
          <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-[#ffd166] shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-white block font-display text-sm uppercase tracking-wider">Horarios de Taller</strong>
              <p className="text-sky-200 mt-1">Lunes a Viernes: 08:00 a 18:30 hs</p>
              <p className="text-sky-200">Sábados: 08:30 a 13:00 hs</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-sky-200 shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-white block font-display text-sm uppercase tracking-wider">Centro Técnico Especializado</strong>
              <p className="text-sky-200 mt-1">Taller equipado con cabinas de luz lineal PDR</p>
              <p className="text-sky-200">Peritaje visual en el acto sin turno previo</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-emerald-300 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-white block font-display text-sm uppercase tracking-wider">Garantía de Conformidad</strong>
              <p className="text-sky-200 mt-1">Compromiso de calidad por escrito</p>
              <p className="text-emerald-300 font-semibold">Si no queda perfecto, no pagás el trabajo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
