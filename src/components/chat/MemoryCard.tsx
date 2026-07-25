import { GlukaiImage } from './GlukaiImage'

export function MemoryCard() {
  return (
    <section className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(180deg,_#f5fffd_0%,_#ecfbf4_100%)] p-6 shadow-[0_14px_32px_rgba(16,42,86,0.07)] ring-1 ring-emerald-100">
      <p className="text-base font-extrabold text-[#102A56]">🧠 Glukai recuerda</p>
      <p className="mt-3 max-w-[220px] text-sm font-bold leading-relaxed text-[#314d5b]">
        Has hablado antes sobre el cambio de sensor. ¡Vamos a trabajar en eso juntos!
      </p>
      <GlukaiImage variant="learning" className="absolute bottom-2 right-3 h-24 w-24 opacity-95" />
    </section>
  )
}
