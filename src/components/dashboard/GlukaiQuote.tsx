import { GlukaiImage } from '../chat/GlukaiImage'

export function GlukaiQuote() {
  return (
    <section className="flex items-center justify-center gap-4 rounded-[22px] bg-[#EAF5FF] px-6 py-5 text-center shadow-sm ring-1 ring-sky-100">
      <span className="text-3xl text-[#9DD5FF]">✦</span>
      <GlukaiImage variant="chat" alt="" className="h-12 w-12" />
      <p className="text-lg font-bold text-[#102A56]">
        <span className="font-extrabold">Glukai dice:</span> “Cada pequeno paso te hace mas fuerte. ¡Estoy orgulloso de ti!” 💙
      </p>
      <span className="text-3xl text-[#9DD5FF]">✦</span>
    </section>
  )
}
