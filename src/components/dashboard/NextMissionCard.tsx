import { GlukaiImage } from '../chat/GlukaiImage'

export function NextMissionCard() {
  return (
    <section className="rounded-[28px] bg-[#FFF7DF] p-5 shadow-sm ring-1 ring-[#F3DCAA]">
      <div className="flex items-center justify-between">
        <h2 className="text-[2rem] font-extrabold text-[#102A56]">🎯 Tu proxima mision</h2>
        <span className="grid h-11 w-11 place-items-center rounded-full bg-white text-2xl shadow-sm">⭐</span>
      </div>
      <div className="mt-4 rounded-[22px] bg-white p-5 shadow-sm ring-1 ring-[#F5E7C1]">
        <div className="grid gap-5 sm:grid-cols-[120px_1fr]">
          <div className="grid h-30 place-items-center overflow-hidden rounded-[20px] bg-[#D6C4FF]">
            <GlukaiImage variant="learning" alt="Glukai aprendiendo sobre el sensor" className="h-24 w-24" />
          </div>
          <div>
            <h3 className="text-[1.9rem] font-extrabold text-[#102A56]">Conoce tu sensor</h3>
            <p className="mt-2 text-[15px] font-bold leading-relaxed text-[#102A56]">Descubramos juntos como funciona y por que es importante para cuidarte.</p>
          </div>
        </div>
        <div className="mt-5 flex items-center gap-4">
          <span className="font-extrabold text-[#102A56]">Progreso</span>
          <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-[#E3EAF4]">
            <div className="h-full w-[60%] rounded-full bg-[#1677FF]" />
          </div>
          <span className="font-extrabold text-[#102A56]">60%</span>
        </div>
        <button className="mt-5 flex w-full items-center justify-center gap-3 rounded-[18px] bg-[#1677FF] px-6 py-3.5 text-base font-extrabold text-white shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#BFE7FF]">
          ¡Comenzar mision! <span className="text-2xl">→</span>
        </button>
      </div>
    </section>
  )
}
