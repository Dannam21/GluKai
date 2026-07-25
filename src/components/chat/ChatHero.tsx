import { GlukaiImage } from './GlukaiImage'

export function ChatHero() {
  return (
    <section className="grid gap-5 sm:grid-cols-[300px_1fr]">
      <div className="flex items-end justify-center">
        <div className="relative">
          <GlukaiImage variant="main" alt="Glukai saludando" className="h-64 w-64 md:h-[310px] md:w-[310px]" />
          <span className="absolute right-10 top-12 text-2xl text-[#87CFFF]">♥</span>
        </div>
      </div>
      <div className="relative max-w-[340px] self-start rounded-[22px] bg-white px-7 py-6 shadow-[0_14px_35px_rgba(16,42,86,0.08)]">
        <span className="absolute left-[-12px] top-10 hidden h-6 w-6 rotate-45 bg-white sm:block" />
        <p className="text-2xl font-extrabold leading-snug text-[#102A56]">¡Hola, Mateo! 👋</p>
        <p className="mt-3 text-lg font-bold leading-snug text-[#102A56]">Cuentame, ¿como te sientes o que quieres hablar hoy?</p>
        <p className="mt-4 text-right text-xs font-extrabold text-[#647BA4]">09:30</p>
      </div>
    </section>
  )
}
