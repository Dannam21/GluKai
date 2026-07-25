import { Icon } from './Icon'

export function ToolsCard({ onBreathingClick }: { onBreathingClick: () => void }) {
  return (
    <section className="rounded-[24px] bg-[#F8FCFF] p-5 shadow-sm ring-1 ring-sky-100">
      <p className="text-base font-extrabold text-[#102A56]">💗 Herramientas para ti</p>
      <div className="mt-4 grid gap-3">
        <button onClick={onBreathingClick} className="flex items-center gap-4 rounded-2xl bg-white p-4 text-left shadow-sm ring-1 ring-sky-100 transition hover:bg-[#E9F6FF] focus:outline-none focus:ring-4 focus:ring-[#BFE7FF]">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#E9F6FF] text-[#1677FF]"><Icon name="breath" className="h-5 w-5" /></span>
          <span>
            <span className="block font-extrabold text-[#102A56]">Ejercicio de respiracion</span>
            <span className="text-sm font-bold text-[#7B8CA6]">2-3 minutos</span>
          </span>
        </button>
        <button className="flex items-center gap-4 rounded-2xl bg-white p-4 text-left shadow-sm ring-1 ring-sky-100 transition hover:bg-[#E9F6FF] focus:outline-none focus:ring-4 focus:ring-[#BFE7FF]">
          <span className="grid h-11 w-11 place-items-center rounded-2xl bg-[#FFF6DC] text-[#E6A600]"><Icon name="music" className="h-5 w-5" /></span>
          <span>
            <span className="block font-extrabold text-[#102A56]">Musica relajante</span>
            <span className="text-sm font-bold text-[#7B8CA6]">Para calmarte</span>
          </span>
        </button>
      </div>
    </section>
  )
}
