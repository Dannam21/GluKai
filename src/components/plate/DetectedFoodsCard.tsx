import { detectedFoods } from '../../data/plateMock'
import { GlukaiImage } from '../chat/GlukaiImage'

export function DetectedFoodsCard() {
  return (
    <section className="rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-[#D9CDFB]">
      <h2 className="text-2xl font-extrabold text-[#4B21D6]">2. ¡Glukai encontro estos alimentos!</h2>
      <p className="mt-3 text-base font-bold text-[#102A56]">Asi identifico lo que hay en tu plato:</p>

      <div className="mt-5 space-y-3">
        {detectedFoods.map((food) => (
          <div key={food.id} className="flex items-center gap-4 rounded-[18px] bg-white px-4 py-3 shadow-sm ring-1 ring-[#DFE7FB]">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#F8FCFF] text-3xl">{food.emoji}</span>
            <div className="min-w-0 flex-1">
              <p className="font-extrabold text-[#102A56]">{food.name}</p>
              <p className="text-sm font-bold text-[#55709E]">{food.description}</p>
            </div>
            <p className={`text-lg font-extrabold ${food.color}`}>{food.percent}%</p>
          </div>
        ))}
      </div>

      <div className="mt-5 flex items-end gap-4">
        <GlukaiImage variant="chat" alt="Glukai celebrando el plato" className="h-20 w-20 shrink-0" />
        <div className="relative flex-1 rounded-[18px] bg-white px-4 py-3 text-base font-bold leading-relaxed text-[#102A56] shadow-sm ring-1 ring-[#DFE7FB]">
          ¡Buen trabajo! Comer equilibrado le da energia a tu cuerpo. 💪
          <span className="absolute -right-2 -top-3 text-3xl text-[#9B73FF]">♥</span>
        </div>
      </div>
    </section>
  )
}
