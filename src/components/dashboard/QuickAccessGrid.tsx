import { quickAccessItems } from '../../data/dashboardMock'
import { GlukaiImage } from '../chat/GlukaiImage'

export function QuickAccessGrid() {
  return (
    <section>
      <h2 className="text-xl font-extrabold text-[#102A56]">Accesos rapidos</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2 2xl:grid-cols-4">
        {quickAccessItems.map((item) => (
          <a key={item.id} href={item.href} className={`group relative h-[158px] overflow-hidden rounded-[24px] p-5 shadow-sm ring-1 ring-sky-100 transition hover:-translate-y-1 hover:shadow-[0_16px_34px_rgba(16,42,86,0.1)] focus:outline-none focus:ring-4 focus:ring-[#BFE7FF] ${item.tone}`}>
            <span className="absolute left-5 top-5 z-10 grid h-11 w-11 place-items-center rounded-full bg-white/85 text-xl shadow-sm">{item.icon}</span>
            <div className="absolute bottom-0 left-4 h-28 w-28">
              <GlukaiImage variant={item.image} alt="" className="h-full w-full transition group-hover:scale-105" />
            </div>
            <div className="ml-[128px] flex h-full flex-col">
              <h3 className="text-lg font-extrabold text-[#102A56]">{item.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm font-bold leading-relaxed text-[#102A56]">{item.subtitle}</p>
              <span className={`mt-auto inline-grid h-9 w-14 place-items-center rounded-full text-lg font-extrabold text-white ${item.buttonTone}`}>→</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  )
}
