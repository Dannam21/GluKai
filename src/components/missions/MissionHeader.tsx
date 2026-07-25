export function MissionHeader() {
  return (
    <header className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
      <div>
        <div className="flex items-center gap-4">
          <span className="text-5xl">🎯</span>
          <h1 className="text-4xl font-extrabold leading-none text-[#102A56] md:text-[44px]">Misiones</h1>
        </div>
        <p className="mt-3 text-lg font-bold text-[#345184]">Aprende jugando y completa aventuras con Glukai</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-[150px_170px_260px]">
        <div className="flex h-[76px] items-center gap-3 rounded-[20px] bg-white px-5 shadow-[0_12px_30px_rgba(16,42,86,0.07)] ring-1 ring-sky-100">
          <span className="text-4xl">🔥</span>
          <div><p className="text-sm font-extrabold text-[#48628E]">Racha</p><p className="text-2xl font-extrabold">5 dias</p></div>
        </div>
        <div className="flex h-[76px] items-center gap-3 rounded-[20px] bg-white px-5 shadow-[0_12px_30px_rgba(16,42,86,0.07)] ring-1 ring-sky-100">
          <span className="text-4xl">⭐</span>
          <div><p className="text-sm font-extrabold text-[#48628E]">Estrellas</p><p className="text-2xl font-extrabold">320</p></div>
        </div>
        <button className="flex h-[76px] items-center gap-3 rounded-[20px] bg-white px-5 text-left shadow-[0_12px_30px_rgba(16,42,86,0.07)] ring-1 ring-sky-100">
          <span className="text-4xl">👦🏽</span>
          <span><span className="block font-extrabold">Mateo</span><span className="text-sm font-bold text-[#48628E]">Nivel 4</span></span>
          <span className="ml-auto text-2xl">⌄</span>
        </button>
      </div>
    </header>
  )
}
