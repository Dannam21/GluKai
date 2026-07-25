import { Icon } from './Icon'

export function ToolsCard({ onBreathingClick }: { onBreathingClick: () => void }) {
  return (
    <section className="rounded-[24px] bg-white/95 p-4 shadow-[0_14px_32px_rgba(16,42,86,0.07)] ring-1 ring-sky-100">
      <div className="flex items-center justify-between gap-3">
        <p className="text-[15px] font-extrabold text-[#102A56]">💗 Herramientas para ti</p>
        <span className="text-[#6f829e]">⌄</span>
      </div>
      <div className="mt-3 grid gap-2.5">
        <button onClick={onBreathingClick} className="flex items-center gap-3 rounded-2xl bg-white p-3.5 text-left shadow-sm ring-1 ring-sky-100 transition hover:bg-[#E9F6FF] focus:outline-none focus:ring-4 focus:ring-[#BFE7FF]">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#E9F6FF] text-[#1677FF]"><Icon name="breath" className="h-4.5 w-4.5" /></span>
          <span>
            <span className="block text-[15px] font-extrabold text-[#102A56]">Ejercicio de respiracion</span>
            <span className="text-xs font-bold text-[#7B8CA6]">2-3 minutos</span>
          </span>
        </button>
        <button className="flex items-center gap-3 rounded-2xl bg-white p-3.5 text-left shadow-sm ring-1 ring-sky-100 transition hover:bg-[#E9F6FF] focus:outline-none focus:ring-4 focus:ring-[#BFE7FF]">
          <span className="grid h-10 w-10 place-items-center rounded-2xl bg-[#FFF6DC] text-[#E6A600]"><Icon name="music" className="h-4.5 w-4.5" /></span>
          <span>
            <span className="block text-[15px] font-extrabold text-[#102A56]">Musica relajante</span>
            <span className="text-xs font-bold text-[#7B8CA6]">Para calmarte</span>
          </span>
        </button>
      </div>
    </section>
  )
}
