export function DashboardHeader() {
  return (
    <header className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
      <div className="min-w-0">
        <h1 className="text-[2.6rem] font-extrabold leading-none text-[#102A56] md:text-[2.9rem]">¡Hola, Mateo! 👋</h1>
        <p className="mt-2 text-base font-bold text-[#345184]">Estoy feliz de verte hoy 💙</p>
      </div>

      <div className="flex flex-wrap items-center gap-2.5">
        {/* Racha */}
        <div className="flex h-[54px] items-center gap-2.5 rounded-[16px] bg-white px-4 shadow-[0_6px_18px_rgba(16,42,86,0.07)] ring-1 ring-sky-100">
          <span className="text-[22px] leading-none">🔥</span>
          <div className="leading-none">
            <p className="text-[10px] font-extrabold uppercase tracking-wide text-[#48628E]">Racha</p>
            <p className="mt-1 text-[16px] font-extrabold text-[#102A56]">5 días</p>
          </div>
        </div>

        {/* Estrellas */}
        <div className="flex h-[54px] items-center gap-2.5 rounded-[16px] bg-white px-4 shadow-[0_6px_18px_rgba(16,42,86,0.07)] ring-1 ring-sky-100">
          <span className="text-[22px] leading-none">⭐</span>
          <div className="leading-none">
            <p className="text-[10px] font-extrabold uppercase tracking-wide text-[#48628E]">Estrellas</p>
            <p className="mt-1 text-[16px] font-extrabold text-[#102A56]">320</p>
          </div>
        </div>

        {/* Perfil / Nivel */}
        <button className="flex h-[54px] items-center gap-2.5 rounded-[16px] bg-white px-4 shadow-[0_6px_18px_rgba(16,42,86,0.07)] ring-1 ring-sky-100 transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#BFE7FF]">
          <span className="text-[22px] leading-none">👦🏽</span>
          <div className="text-left leading-none">
            <p className="text-[14px] font-extrabold text-[#102A56]">Mateo</p>
            <p className="mt-1 text-[11px] font-bold text-[#48628E]">Nivel 4</p>
          </div>
          <svg className="ml-1 h-3.5 w-3.5 text-[#8AA0BA]" viewBox="0 0 12 8" fill="none">
            <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </header>
  )
}
