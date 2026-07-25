import { moodOptions } from '../../data/dashboardMock'
import { GlukaiImage } from '../chat/GlukaiImage'

export function EmotionHero() {
  return (
    <section className="relative h-[500px] overflow-hidden rounded-[28px] bg-[#9DDAFF] p-7 shadow-[0_18px_45px_rgba(22,119,255,0.09)]">
      <div className="absolute inset-x-0 bottom-0 h-48 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#A8E8B8_100%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-[#75D07E]" />
      <div className="absolute bottom-7 left-10 h-20 w-32 rounded-full bg-[#55BE70]/60" />
      <div className="absolute bottom-9 right-16 h-24 w-44 rounded-full bg-[#55BE70]/60" />
      <div className="absolute right-10 top-16 h-8 w-24 rounded-full bg-white/90" />
      <div className="absolute right-20 top-28 h-9 w-28 rounded-full bg-white/80" />
      <div className="absolute bottom-20 right-10 text-3xl">🦋</div>
      <div className="absolute bottom-10 right-32 text-2xl">🌸</div>
      <div className="absolute bottom-12 right-20 text-2xl">🌼</div>

      <div className="absolute bottom-6 left-6 h-[430px] w-[390px] md:left-9">
        <GlukaiImage variant="main" alt="Glukai saludando en el jardin" className="h-full w-full" />
      </div>

      <div className="absolute left-[44%] top-12 w-[300px] rounded-[20px] bg-white px-7 py-5 shadow-[0_12px_30px_rgba(16,42,86,0.08)] max-lg:left-auto max-lg:right-8">
        <span className="absolute -left-3 bottom-5 h-6 w-6 rotate-45 bg-white" />
        <p className="text-lg font-bold leading-relaxed text-[#102A56]">Antes de comenzar, cuentame...</p>
        <span className="absolute right-6 top-1/2 -translate-y-1/2 text-2xl text-[#FF7D9C]">♥</span>
      </div>

      <div className="absolute right-8 top-[165px] z-10 w-[560px] max-w-[58%] text-center">
        <h2 className="text-[34px] font-extrabold leading-tight text-[#102A56]">¿Como te sientes hoy?</h2>
        <div className="mt-5 grid grid-cols-6 rounded-[24px] bg-white/96 p-3 shadow-[0_18px_35px_rgba(16,42,86,0.10)]">
          {moodOptions.map((mood) => (
            <button key={mood.id} className="min-w-0 rounded-[18px] px-2 py-3 text-center transition hover:-translate-y-0.5 hover:bg-[#F8FCFF] focus:outline-none focus:ring-4 focus:ring-[#BFE7FF]">
              <span className={`mx-auto grid h-14 w-14 place-items-center rounded-full text-3xl shadow-sm ${mood.tone}`}>{mood.emoji}</span>
              <span className="mt-2 block text-[12px] font-extrabold leading-tight text-[#102A56]">{mood.label}</span>
            </button>
          ))}
        </div>
        <button className="mt-[115px] inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-sm font-extrabold text-[#102A56] shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#BFE7FF]">
          📊 Ver mi historial emocional <span className="text-lg">→</span>
        </button>
      </div>
    </section>
  )
}
