import { badges, progressStats } from '../../data/missionsMock'
import { GlukaiImage } from '../chat/GlukaiImage'

export function MissionsRightPanel() {
  return (
    <aside className="space-y-5">
      <section className="rounded-[26px] bg-[#F6F2FF] p-6 shadow-sm ring-1 ring-violet-100">
        <h2 className="text-lg font-extrabold text-[#102A56]">Tu progreso general</h2>
        <div className="mt-5 flex items-center gap-5">
          <div className="grid h-28 w-28 place-items-center rounded-full bg-[conic-gradient(#25B96F_0_65%,#BFE7FF_65%_76%,#E8DFFF_76%_100%)] p-3">
            <div className="grid h-full w-full place-items-center rounded-full bg-white text-3xl font-extrabold">65%</div>
          </div>
          <div>
            <p className="text-2xl font-extrabold text-[#102A56]">35 / 54</p>
            <p className="mt-1 text-sm font-bold text-[#345184]">misiones completadas</p>
          </div>
        </div>
        <div className="mt-5 grid grid-cols-4 gap-3">
          {progressStats.map((stat) => (
            <div key={stat.value} className={`rounded-2xl p-3 text-center ${stat.tone}`}>
              <span className="block text-3xl">{stat.icon}</span>
              <span className="mt-2 block text-sm font-extrabold">{stat.value}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-[26px] bg-white p-6 shadow-sm ring-1 ring-sky-100">
        <h2 className="text-lg font-extrabold text-[#102A56]">Mision actual</h2>
        <div className="mt-5 grid gap-4 sm:grid-cols-[130px_1fr] xl:grid-cols-1 2xl:grid-cols-[130px_1fr]">
          <div className="grid h-32 place-items-center rounded-[20px] bg-[#EAF6FF] text-7xl">💧</div>
          <div>
            <h3 className="text-2xl font-extrabold leading-tight text-[#102A56]">¿Que hace la insulina?</h3>
            <p className="mt-3 text-sm font-bold leading-relaxed text-[#102A56]">Descubre como la insulina ayuda a que la glucosa entre a tus celulas.</p>
          </div>
        </div>
        <button className="mt-5 flex w-full items-center justify-center gap-3 rounded-[18px] bg-[#1677FF] px-5 py-3.5 font-extrabold text-white shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#BFE7FF]">
          Continuar mision <span className="text-xl">→</span>
        </button>
      </section>

      <section className="relative overflow-hidden rounded-[26px] bg-white p-6 shadow-sm ring-1 ring-sky-100">
        <h2 className="text-lg font-extrabold text-[#102A56]">Recompensas recientes</h2>
        <div className="mt-5 space-y-4">
          <p className="font-extrabold text-[#102A56]">⭐ +15 <span className="ml-3 text-sm font-bold text-[#345184]">Mision completada</span></p>
          <p className="font-extrabold text-[#102A56]">⭐ +10 <span className="ml-3 text-sm font-bold text-[#345184]">Respuesta correcta en quiz</span></p>
        </div>
        <GlukaiImage variant="playing" alt="" className="absolute bottom-1 right-2 h-28 w-28" />
      </section>

      <section className="rounded-[26px] bg-white p-6 shadow-sm ring-1 ring-sky-100">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-extrabold text-[#102A56]">Insignias</h2>
          <a href="/rewards" className="text-sm font-extrabold text-[#1677FF]">Ver todas</a>
        </div>
        <div className="mt-5 grid grid-cols-4 gap-3">
          {badges.map(([icon, label]) => (
            <div key={label} className="text-center">
              <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-[#F2ECFF] text-3xl shadow-sm">{icon}</div>
              <p className="mt-2 text-xs font-extrabold text-[#102A56]">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </aside>
  )
}
