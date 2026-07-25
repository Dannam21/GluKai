import { badges, progressStats } from '../../data/missionsMock'
import { GlukaiImage } from '../chat/GlukaiImage'

export function MissionsRightPanel() {
  return (
    <aside className="space-y-4">
      {/* Progress */}
      <section className="rounded-[24px] bg-[#F6F2FF] p-5 shadow-sm ring-1 ring-violet-100/80">
        <h2 className="text-base font-extrabold text-[#102A56]">Tu progreso general</h2>
        <div className="mt-4 flex items-center gap-4">
          <div className="relative grid h-[88px] w-[88px] shrink-0 place-items-center rounded-full p-[6px]"
            style={{ background: 'conic-gradient(#25B96F 0 65%, #BFE7FF 65% 76%, #E8DFFF 76% 100%)' }}
          >
            <div className="grid h-full w-full place-items-center rounded-full bg-white text-2xl font-extrabold text-[#102A56]">
              65%
            </div>
          </div>
          <div>
            <p className="text-[22px] font-extrabold text-[#102A56]">35 / 54</p>
            <p className="mt-0.5 text-sm font-bold text-[#5B7BA8]">misiones completadas</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-2">
          {progressStats.map((stat) => (
            <div key={stat.value} className={`rounded-[14px] p-2.5 text-center ${stat.tone}`}>
              <span className="block text-2xl">{stat.icon}</span>
              <span className="mt-1 block text-xs font-extrabold text-[#102A56]">{stat.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Current mission */}
      <section className="rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-sky-100/80">
        <h2 className="text-base font-extrabold text-[#102A56]">Misión actual</h2>
        <div className="mt-4 flex gap-4">
          <div className="grid h-[80px] w-[80px] shrink-0 place-items-center rounded-[18px] bg-[#EAF6FF] text-5xl shadow-inner">
            💧
          </div>
          <div className="min-w-0">
            <h3 className="text-base font-extrabold leading-snug text-[#102A56]">¿Qué hace la insulina?</h3>
            <p className="mt-1.5 text-[12px] font-bold leading-relaxed text-[#5B7BA8]">
              Descubre cómo la insulina ayuda a que la glucosa entre a tus células.
            </p>
          </div>
        </div>
        <button className="mt-4 flex w-full items-center justify-center gap-2.5 rounded-[16px] bg-[linear-gradient(135deg,_#1a6fff_0%,_#2f8fff_100%)] px-5 py-3 font-extrabold text-white shadow-[0_8px_20px_rgba(22,119,255,0.3)] transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#BFE7FF]">
          Continuar misión <span className="text-base">→</span>
        </button>
      </section>

      {/* Recent rewards */}
      <section className="relative overflow-hidden rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-sky-100/80">
        <h2 className="text-base font-extrabold text-[#102A56]">Recompensas recientes</h2>
        <div className="mt-3 space-y-3">
          <div className="flex items-center gap-3 rounded-[12px] bg-[#FFFBEC] px-3 py-2">
            <span className="text-xl">⭐</span>
            <div>
              <span className="text-sm font-extrabold text-[#102A56]">+15 estrellas</span>
              <span className="ml-2 text-xs font-bold text-[#5B7BA8]">Misión completada</span>
            </div>
          </div>
          <div className="flex items-center gap-3 rounded-[12px] bg-[#FFFBEC] px-3 py-2">
            <span className="text-xl">⭐</span>
            <div>
              <span className="text-sm font-extrabold text-[#102A56]">+10 estrellas</span>
              <span className="ml-2 text-xs font-bold text-[#5B7BA8]">Respuesta correcta</span>
            </div>
          </div>
        </div>
        <GlukaiImage variant="playing" alt="" className="absolute -bottom-1 right-1 h-24 w-24" />
      </section>

      {/* Badges */}
      <section className="rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-sky-100/80">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-extrabold text-[#102A56]">Insignias</h2>
          <a href="/rewards" className="text-xs font-extrabold text-[#1677FF] hover:underline">Ver todas</a>
        </div>
        <div className="mt-4 grid grid-cols-4 gap-2">
          {badges.map(([icon, label]) => (
            <div key={label} className="text-center">
              <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-[#F2ECFF] text-2xl shadow-sm">
                {icon}
              </div>
              <p className="mt-1.5 text-[10px] font-extrabold text-[#102A56]">{label}</p>
            </div>
          ))}
        </div>
      </section>
    </aside>
  )
}
