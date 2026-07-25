import { GlukaiImage } from './GlukaiImage'

export function AdviceCard() {
  return (
    <section className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,_#f9fff4_0%,_#effdec_100%)] p-5 shadow-[0_14px_32px_rgba(16,42,86,0.07)] ring-1 ring-lime-100">
      <p className="text-[15px] font-extrabold text-[#102A56]">💡 Consejo de Glukai</p>
      <p className="mt-3 pr-12 text-sm font-bold leading-relaxed text-[#39525d]">
        Respirar profundo puede ayudarte mucho cuando sientes nervios.
      </p>
      <GlukaiImage variant="chat" className="absolute bottom-1 right-3 h-20 w-20" />
    </section>
  )
}
