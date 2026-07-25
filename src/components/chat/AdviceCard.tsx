import { GlukaiImage } from './GlukaiImage'

export function AdviceCard() {
  return (
    <section className="relative overflow-hidden rounded-[24px] bg-[#EAFBF4] p-6 shadow-sm ring-1 ring-emerald-100">
      <p className="text-base font-extrabold text-[#102A56]">💡 Consejo de Glukai</p>
      <p className="mt-3 pr-16 text-sm font-bold leading-relaxed text-[#4D6B74]">
        Respirar profundo puede ayudarte mucho cuando sientes nervios.
      </p>
      <GlukaiImage variant="chat" className="absolute bottom-1 right-3 h-24 w-24" />
    </section>
  )
}
