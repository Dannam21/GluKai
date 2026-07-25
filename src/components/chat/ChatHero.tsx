import { GlukaiImage } from './GlukaiImage'

export function ChatHero() {
  return (
    <section className="grid gap-4 sm:grid-cols-[240px_minmax(0,1fr)]">
      <div className="flex items-end justify-center">
        <div className="relative">
          <div className="absolute bottom-2 left-1/2 h-7 w-36 -translate-x-1/2 rounded-full bg-[#8acbff]/20 blur-md" />
          <GlukaiImage variant="main" alt="Glukai saludando" className="relative h-48 w-48 md:h-[250px] md:w-[250px]" />
          <span className="absolute right-8 top-8 text-xl text-[#87CFFF]">♥</span>
        </div>
      </div>
      <div className="relative mt-3 max-w-[330px] self-start rounded-[24px] bg-white px-5 py-4 shadow-[0_16px_36px_rgba(16,42,86,0.08)] ring-1 ring-white/80">
        <span className="absolute left-[-12px] top-10 hidden h-6 w-6 rotate-45 bg-white sm:block" />
        <p className="text-[1.65rem] font-extrabold leading-snug text-[#102A56]">¡Hola, Mateo! 👋</p>
        <p className="mt-2 text-base font-bold leading-snug text-[#102A56]">Cuentame, ¿como te sientes o que quieres hablar hoy?</p>
        <p className="mt-3 text-right text-[11px] font-extrabold text-[#647BA4]">09:30</p>
      </div>
    </section>
  )
}
