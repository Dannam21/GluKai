export function ProgressSummaryCard() {
  return (
    <section className="flex items-center justify-between gap-5 rounded-[28px] bg-[#EAFBF4] p-5 shadow-sm ring-1 ring-emerald-100">
      <div className="grid h-20 w-20 place-items-center rounded-full bg-[#C8F1D9] text-4xl">🏅</div>
      <div className="min-w-0 flex-1">
        <h2 className="text-[2rem] font-extrabold text-[#102A56]">¡Vas muy bien!</h2>
        <p className="mt-1 text-[15px] font-bold text-[#345184]">Has completado 7 misiones</p>
        <div className="mt-3 flex gap-2">
          {[0, 1, 2, 3, 4, 5, 6].map((step) => (
            <span key={step} className={`h-5 w-5 rounded-full ${step < 5 ? 'bg-[#35C878]' : 'bg-white ring-2 ring-[#C7D5EF]'}`}>
              {step < 5 && <span className="grid h-full place-items-center text-xs text-white">✓</span>}
            </span>
          ))}
        </div>
      </div>
      <span className="grid h-14 w-14 place-items-center rounded-full bg-white text-3xl shadow-sm">🎁</span>
    </section>
  )
}
