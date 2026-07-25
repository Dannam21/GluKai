import { GlukaiImage } from '../chat/GlukaiImage'
import { Icon } from '../chat/Icon'

export function PlateRightPanel() {
  return (
    <aside className="space-y-4">

      {/* Consejo de Glukai */}
      <section className="relative overflow-hidden rounded-[24px] bg-[#EAFBF4] p-5 shadow-sm ring-1 ring-emerald-100">
        <p className="text-sm font-extrabold text-[#176B32]">💡 Consejo de Glukai</p>
        <p className="mt-3 max-w-[170px] text-sm font-bold leading-relaxed text-[#102A56]">
          Los carbohidratos dan energía, las proteínas ayudan a crecer y las grasas saludables cuidan tu corazón.
        </p>
        <p className="mt-3 text-lg">💚</p>
        <GlukaiImage variant="learning" alt="Glukai dando un consejo" className="absolute -bottom-1 right-2 h-32 w-32" />
      </section>

      {/* Progreso hoy */}
      <section className="rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-sky-100">
        <h2 className="text-sm font-extrabold text-[#102A56]">Tu progreso hoy</h2>
        <div className="mt-4 flex items-center gap-5">
          <div
            className="relative grid h-24 w-24 shrink-0 place-items-center rounded-full p-[5px]"
            style={{ background: 'conic-gradient(#6A35E8 0 67%, #E8ECF8 67% 100%)' }}
          >
            <div className="grid h-full w-full place-items-center rounded-full bg-white text-center">
              <div>
                <p className="text-xl font-extrabold text-[#102A56]">2/3</p>
                <p className="text-[9px] font-extrabold leading-tight text-[#55709E]">actividades</p>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-3">
            {['Check-in emocional', 'Mi plato', 'Misión'].map((item, i) => (
              <div key={item} className="flex items-center gap-2.5 text-sm font-bold text-[#102A56]">
                <span className={`grid h-5 w-5 shrink-0 place-items-center rounded-full ${i < 2 ? 'bg-[#31C363] text-white' : 'bg-white ring-2 ring-[#C7D5EF]'}`}>
                  {i < 2 && <Icon name="check" className="h-3 w-3" />}
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ganaste estrellas */}
      <section className="relative overflow-hidden rounded-[24px] bg-[#F6F2FF] p-5 shadow-sm ring-1 ring-violet-100">
        <h2 className="text-sm font-extrabold text-[#4B21D6]">¡Ganaste estrellas!</h2>
        <div className="mt-3 flex items-center gap-3">
          <span className="text-5xl">⭐</span>
          <p className="text-3xl font-extrabold text-[#5B2BEA]">+15</p>
        </div>
        <p className="mt-3 max-w-[160px] text-sm font-bold leading-relaxed text-[#102A56]">
          Sigue aprendiendo y sumando estrellas.
        </p>
        <GlukaiImage variant="playing" alt="Glukai celebrando" className="absolute -bottom-1 right-1 h-28 w-28" />
      </section>

      {/* Sabías que */}
      <section className="flex items-start gap-3 rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-sky-100">
        <span className="text-3xl">🥑</span>
        <div>
          <h2 className="text-sm font-extrabold text-[#4B21D6]">¿Sabías que?</h2>
          <p className="mt-1.5 text-sm font-bold leading-relaxed text-[#102A56]">
            El aguacate ayuda a tu cerebro y te da energía por más tiempo. ♡
          </p>
        </div>
      </section>

    </aside>
  )
}
