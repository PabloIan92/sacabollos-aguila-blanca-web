import React from 'react'
import { MessageCircle, Clock, MapPin, ShieldCheck } from 'lucide-react'

export const ContactSection: React.FC = () => {
  return (
    <section id="contacto" className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="rounded-3xl bg-[#123a6b] text-white p-8 sm:p-14 border-2 border-[#123a6b] shadow-ficha-lg relative overflow-hidden">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="px-3 py-1 rounded bg-white/10 text-[#ffd166] text-xs font-mono font-bold uppercase tracking-wider">
            Diagnóstico Sin Cargo
          </span>
          <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight text-white mt-3">
            ¿Tenés un bollo en tu auto?{' '}
            <span className="text-[#ffd166]">Escribinos ahora</span>
          </h2>
          <p className="mt-3 text-sky-100 text-sm sm:text-base font-sans">
            Envianos una foto del daño por WhatsApp y nuestro perito te responde en el día con el diagnóstico y presupuesto.
          </p>
        </div>

        {/* Big Action Button */}
        <div className="text-center mb-12">
          <a
            href="https://wa.me/5491122334455?text=Hola%20Águila%20Blanca,%20les%20adjunto%20fotos%20del%20daño%20de%20mi%20auto%20para%20presupuestar."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-8 py-5 rounded-xl bg-[#c0272d] hover:bg-[#a51d23] text-white font-display font-black text-lg sm:text-xl uppercase tracking-wider shadow-[4px_4px_0_rgba(0,0,0,0.3)] transition-all active:scale-95 group w-full sm:w-auto"
          >
            <MessageCircle className="w-6 h-6 fill-white group-hover:scale-110 transition-transform" />
            <span>Enviar Fotos por WhatsApp</span>
          </a>
        </div>

        {/* 3 Pillars of Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-white/15 text-xs sm:text-sm">
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
              <strong className="text-white block font-display text-sm uppercase tracking-wider">Centro Técnico</strong>
              <p className="text-sky-200 mt-1">Instalaciones preparadas con luz PDR</p>
              <p className="text-sky-200">Atención sin turno para peritajes</p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center text-emerald-300 shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <strong className="text-white block font-display text-sm uppercase tracking-wider">Garantía Escrita</strong>
              <p className="text-sky-200 mt-1">Conformidad total del cliente</p>
              <p className="text-emerald-300 font-semibold">Si no queda bien, no pagás</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
