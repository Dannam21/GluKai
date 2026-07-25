import { GlukaiImage } from '../chat/GlukaiImage'
import { Icon } from '../chat/Icon'

export function PlateRightPanel() {
  return (
    <aside className="w-full shrink-0 space-y-5 xl:w-[360px]">
      <section className="relative overflow-hidden rounded-[24px] bg-[#EAFBF4] p-6 shadow-sm ring-1 ring-emerald-100">
        <p className="text-lg font-extrabold text-[#176B32]">💡 Consejo de Glukai</p>
        <p className="mt-5 max-w-[180px] text-base font-bold leading-relaxed text-[#102A56]">
          Los carbohidratos dan energia, las proteinas ayudan a crecer y las grasas saludables cuidan tu corazon.
        </p>
        <p className="mt-4 text-xl">💚</p>
        <GlukaiImage variant="learning" alt="Glukai dando un consejo" className="absolute bottom-4 right-3 h-40 w-40" />
      </section>

      <section className="rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-sky-100">
        <h2 className="text-lg font-extrabold text-[#102A56]">Tu progreso hoy</h2>
        <div className="mt-5 flex items-center gap-6">
          <div className="grid h-28 w-28 place-items-center rounded-full bg-[conic-gradient(#6A35E8_0_67%,#E8ECF8_67%_100%)] p-3">
            <div className="grid h-full w-full place-items-center rounded-full bg-white text-center">
              <div>
                <p className="text-3xl font-extrabold text-[#102A56]">2/3</p>
                <p className="text-[11px] font-extrabold leading-tight text-[#55709E]">actividades completadas</p>
              </div>
            </div>
          </div>
          <div className="flex-1 space-y-4">
            {['Check-in emocional', 'Mi plato', 'Mision'].map((item, index) => (
              <div key={item} className="flex items-center gap-3 text-sm font-extrabold text-[#102A56]">
                <span className={`grid h-6 w-6 place-items-center rounded-full ${index < 2 ? 'bg-[#31C363] text-white' : 'bg-white text-transparent ring-2 ring-[#C7D5EF]'}`}>
                  <Icon name="check" className="h-4 w-4" />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden rounded-[24px] bg-[#F6F2FF] p-6 shadow-sm ring-1 ring-violet-100">
        <h2 className="text-lg font-extrabold text-[#4B21D6]">¡Ganaste estrellas!</h2>
        <div className="mt-5 flex items-center gap-4">
          <span className="text-6xl">⭐</span>
          <p className="text-4xl font-extrabold text-[#5B2BEA]">+15</p>
        </div>
        <p className="mt-5 max-w-[190px] text-base font-bold leading-relaxed text-[#102A56]">Sigue aprendiendo y sumando estrellas.</p>
        <GlukaiImage variant="playing" alt="Glukai celebrando estrellas" className="absolute bottom-2 right-2 h-36 w-36" />
      </section>

      <section className="flex items-center gap-4 rounded-[24px] bg-[#F6F2FF] p-5 shadow-sm ring-1 ring-violet-100">
        <span className="text-5xl">🥑</span>
        <div>
          <h2 className="font-extrabold text-[#4B21D6]">¿Sabias que?</h2>
          <p className="mt-2 text-sm font-bold leading-relaxed text-[#102A56]">El aguacate ayuda a tu cerebro y te da energia por mas tiempo. ♡</p>
        </div>
      </section>
    </aside>
  )
}
