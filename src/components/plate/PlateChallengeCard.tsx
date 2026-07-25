import { challengeOptions } from '../../data/plateMock'
import { GlukaiImage } from '../chat/GlukaiImage'

export function PlateChallengeCard() {
  return (
    <section className="grid gap-5 overflow-hidden rounded-[24px] lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">

      {/* Left: Quiz */}
      <div className="rounded-[24px] bg-[#FFF8EA] p-5 shadow-sm ring-1 ring-[#F3DCAA]">
        <p className="text-[11px] font-extrabold uppercase tracking-widest text-[#C4840A]">⭐ Mini reto</p>
        <h2 className="mt-1.5 text-base font-extrabold text-[#102A56]">
          ¿Cuál de estos alimentos aporta principalmente carbohidratos (energía para tu cuerpo)?
        </h2>
        <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          {challengeOptions.map((option) => (
            <button
              key={option.id}
              className={`relative rounded-[16px] bg-white py-3 text-center shadow-sm ring-1 transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#D9CCFF] ${
                option.selected ? 'ring-2 ring-[#5B2BEA]' : 'ring-[#F1DDB8]'
              }`}
            >
              {option.selected && (
                <span className="absolute -right-1.5 -top-1.5 grid h-6 w-6 place-items-center rounded-full bg-[#5B2BEA] text-xs text-white shadow-sm">
                  ✓
                </span>
              )}
              <span className="block text-4xl">{option.emoji}</span>
              <span className="mt-2 block text-xs font-extrabold text-[#102A56]">{option.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Right: Result */}
      <div className="flex flex-col rounded-[24px] bg-[#F6F2FF] p-5 shadow-sm ring-1 ring-violet-100">
        <div className="flex items-center gap-3">
          <GlukaiImage variant="playing" alt="Glukai felicitando" className="h-20 w-20 shrink-0" />
          <div>
            <h3 className="text-base font-extrabold text-[#4B21D6]">¡Muy bien, Mateo!</h3>
            <p className="mt-2 text-sm font-bold leading-relaxed text-[#102A56]">
              El arroz es un carbohidrato que tu cuerpo convierte en energía para jugar, estudiar y crecer.
            </p>
          </div>
        </div>
        <button className="mt-4 w-full rounded-[16px] bg-[#5B2BEA] px-5 py-3 text-sm font-extrabold text-white shadow-[0_8px_20px_rgba(91,43,234,0.28)] transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#D9CCFF]">
          Continuar
        </button>
        <p className="mt-2.5 text-center text-xs font-extrabold text-[#7B56D4]">⭐ +10 estrellas</p>
      </div>

    </section>
  )
}
