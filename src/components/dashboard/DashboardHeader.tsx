export function DashboardHeader() {
  return (
    <header className="flex flex-col gap-5 xl:flex-row xl:items-start xl:justify-between">
      <div className="min-w-[300px]">
        <h1 className="text-4xl font-extrabold leading-none text-[#102A56] md:text-[42px]">¡Hola, Mateo! 👋</h1>
        <p className="mt-3 text-xl font-bold text-[#345184]">Estoy feliz de verte hoy 💙</p>
      </div>

      <div className="grid gap-3 sm:grid-cols-[140px_150px_minmax(220px,1fr)_130px] xl:w-[720px]">
        <div className="flex h-[72px] items-center gap-3 rounded-[20px] bg-white px-5 shadow-[0_12px_30px_rgba(16,42,86,0.07)] ring-1 ring-sky-100">
          <span className="text-4xl">🔥</span>
          <div>
            <p className="text-sm font-extrabold text-[#48628E]">Racha</p>
            <p className="text-2xl font-extrabold text-[#102A56]">5 dias</p>
          </div>
        </div>
        <div className="flex h-[72px] items-center gap-3 rounded-[20px] bg-white px-5 shadow-[0_12px_30px_rgba(16,42,86,0.07)] ring-1 ring-sky-100">
          <span className="text-4xl">⭐</span>
          <div>
            <p className="text-sm font-extrabold text-[#48628E]">Estrellas</p>
            <p className="text-2xl font-extrabold text-[#102A56]">320</p>
          </div>
        </div>
        <div className="h-[72px] rounded-[20px] bg-white px-5 py-3 shadow-[0_12px_30px_rgba(16,42,86,0.07)] ring-1 ring-sky-100">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-[#1677FF] text-2xl font-extrabold text-white">4</span>
            <div className="min-w-0 flex-1">
              <p className="font-extrabold text-[#102A56]">Nivel</p>
              <div className="mt-2 flex items-center gap-3">
                <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-[#E3EAF4]">
                  <div className="h-full w-[62%] rounded-full bg-[#1677FF]" />
                </div>
                <span className="text-sm font-bold text-[#345184]">120/200</span>
              </div>
            </div>
          </div>
        </div>
        <button className="flex h-[72px] items-center gap-3 rounded-[20px] bg-white px-4 text-left shadow-[0_12px_30px_rgba(16,42,86,0.07)] ring-1 ring-sky-100">
          <span className="text-3xl">👦🏽</span>
          <span>
            <span className="block font-extrabold text-[#102A56]">Mateo</span>
            <span className="text-sm font-bold text-[#48628E]">Nivel 4</span>
          </span>
          <span className="ml-auto text-2xl text-[#102A56]">⌄</span>
        </button>
      </div>
    </header>
  )
}
