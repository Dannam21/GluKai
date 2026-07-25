import { GlukaiImage } from '../chat/GlukaiImage'

type Props = {
  respuesta?: string
  analizando?: boolean
}

export function DetectedFoodsCard({ respuesta, analizando }: Props) {
  return (
    <section className="flex flex-col rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-[#D9CDFB]">
      <h2 className="text-lg font-extrabold text-[#4B21D6]">2. ¡Glukai encontró estos alimentos!</h2>
      <p className="mt-1 text-sm font-bold text-[#55709E]">Así identificó lo que hay en tu plato:</p>

      <div className="mt-4 flex flex-1 flex-col">
        {analizando ? (
          /* Loading state */
          <div className="flex flex-1 flex-col items-center justify-center gap-4 py-8">
            <div className="relative">
              <GlukaiImage variant="main" alt="Glukai analizando" className="h-24 w-24" />
              <span className="absolute -right-1 -top-1 flex h-5 w-5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7B42F6] opacity-60" />
                <span className="relative inline-flex h-5 w-5 rounded-full bg-[#7B42F6]" />
              </span>
            </div>
            <div className="text-center">
              <p className="font-extrabold text-[#4B21D6]">Glukai está mirando tu plato...</p>
              <div className="mt-3 flex justify-center gap-1.5">
                <span className="h-2 w-2 animate-bounce rounded-full bg-[#9DD5FF]" style={{ animationDelay: '0ms' }} />
                <span className="h-2 w-2 animate-bounce rounded-full bg-[#9DD5FF]" style={{ animationDelay: '150ms' }} />
                <span className="h-2 w-2 animate-bounce rounded-full bg-[#9DD5FF]" style={{ animationDelay: '300ms' }} />
              </div>
            </div>
          </div>
        ) : respuesta ? (
          /* AI response */
          <div className="flex flex-1 flex-col gap-4">
            <div className="flex-1 rounded-[16px] bg-[#F8FAFF] p-4 ring-1 ring-[#E8EDFA]">
              <p className="whitespace-pre-wrap text-sm font-bold leading-relaxed text-[#102A56]">
                {respuesta}
              </p>
            </div>
            <div className="flex items-end gap-3">
              <GlukaiImage variant="chat" alt="Glukai celebrando" className="h-16 w-16 shrink-0" />
              <div className="flex-1 rounded-[16px] bg-[#F4EEFF] px-4 py-3 text-sm font-bold leading-relaxed text-[#102A56] ring-1 ring-[#E0D0FF]">
                ¡Buen trabajo! Comer equilibrado le da energía a tu cuerpo. 💪
              </div>
            </div>
          </div>
        ) : (
          /* Empty / initial state */
          <div className="flex flex-1 flex-col items-center justify-center gap-4 py-8 text-center">
            <div className="grid h-20 w-20 place-items-center rounded-full bg-[#F4EEFF] text-4xl">
              🍽️
            </div>
            <div>
              <p className="font-extrabold text-[#4B21D6]">¡Toma una foto de tu plato!</p>
              <p className="mt-1 text-sm font-bold text-[#7B8CAA]">
                Glukai analizará qué alimentos hay y te explicará cuánta energía te dan.
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
