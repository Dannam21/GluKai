import { challengeOptions } from '../../data/plateMock'
import { GlukaiImage } from '../chat/GlukaiImage'

export function PlateChallengeCard() {
  return (
    <section className="rounded-[24px] bg-[#FFF8EA] p-6 shadow-sm ring-1 ring-[#F3DCAA]">
      <div className="grid gap-5 xl:grid-cols-[1fr_310px]">
        <div>
          <h2 className="text-2xl font-extrabold text-[#4B21D6]">⭐ ¡Mini reto para ganar estrellas!</h2>
          <p className="mt-3 max-w-2xl text-base font-bold leading-relaxed text-[#102A56]">
            ¿Cual de estos alimentos aporta principalmente carbohidratos energia para tu cuerpo?
          </p>
          <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {challengeOptions.map((option) => (
              <button key={option.id} className={`relative rounded-[18px] bg-white p-4 text-center shadow-sm ring-1 transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#D9CCFF] ${option.selected ? 'ring-2 ring-[#5B2BEA]' : 'ring-[#F1DDB8]'}`}>
                {option.selected && <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-[#5B2BEA] text-sm text-white">✓</span>}
                <span className="block text-6xl">{option.emoji}</span>
                <span className="mt-3 block font-extrabold text-[#102A56]">{option.name}</span>
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-5">
          <GlukaiImage variant="playing" alt="Glukai felicitando" className="hidden h-36 w-36 shrink-0 sm:inline-grid" />
          <div>
            <h3 className="text-2xl font-extrabold text-[#4B21D6]">¡Muy bien, Mateo!</h3>
            <p className="mt-4 text-base font-bold leading-relaxed text-[#102A56]">
              El arroz es un carbohidrato que tu cuerpo convierte en energia para jugar, estudiar y crecer.
            </p>
            <button className="mt-5 w-full rounded-2xl bg-[#5B2BEA] px-6 py-3 text-base font-extrabold text-white shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#D9CCFF]">
              Continuar
            </button>
            <p className="mt-3 text-center text-sm font-extrabold text-[#102A56]">⭐ +10 estrellas</p>
          </div>
        </div>
      </div>
    </section>
  )
}
