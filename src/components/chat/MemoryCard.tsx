import { GlukaiImage } from './GlukaiImage'

export function MemoryCard() {
  return (
    <section className="relative overflow-hidden rounded-[24px] bg-[#EAFBF4] p-6 shadow-sm ring-1 ring-emerald-100">
      <p className="text-base font-extrabold text-[#102A56]">🧠 Glukai recuerda</p>
      <p className="mt-3 max-w-[220px] text-sm font-bold leading-relaxed text-[#4D6B74]">
        Has hablado antes sobre el cambio de sensor. ¡Vamos a trabajar en eso juntos!
      </p>
      <GlukaiImage variant="learning" className="absolute bottom-2 right-3 h-24 w-24 opacity-95" />
    </section>
  )
}
