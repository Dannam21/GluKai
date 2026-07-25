import { useState } from 'react'
import { enviarEmocion } from '../../api'
import { moodOptions } from '../../data/dashboardMock'
import { GlukaiImage } from '../chat/GlukaiImage'

const EMOCION_MAP: Record<string, string> = {
  great: 'genial',
  good: 'bien',
  normal: 'normal',
  worried: 'preocupado',
  sad: 'triste',
  scared: 'con miedo',
}

export function EmotionHero() {
  const [seleccionada, setSeleccionada] = useState<string | null>(null)
  const [enviando, setEnviando] = useState(false)

  async function handleEmocion(id: string) {
    if (enviando) return
    setSeleccionada(id)
    setEnviando(true)
    try {
      const respuesta = await enviarEmocion(EMOCION_MAP[id] ?? id)
      sessionStorage.setItem('kai_greeting', respuesta)
      window.history.pushState({}, '', '/chat')
      window.dispatchEvent(new PopStateEvent('popstate'))
    } catch (err) {
      console.error('Error enviando emoción:', err)
      setSeleccionada(null)
      setEnviando(false)
    }
  }

  return (
    <section className="relative h-[530px] overflow-hidden rounded-[28px] bg-[#9DDAFF] p-6 shadow-[0_18px_45px_rgba(22,119,255,0.09)]">
      <div className="absolute inset-x-0 bottom-0 h-44 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#A8E8B8_100%)]" />
      <div className="absolute bottom-0 left-0 right-0 h-26 bg-[#75D07E]" />
      <div className="absolute bottom-6 left-10 h-20 w-32 rounded-full bg-[#55BE70]/60" />
      <div className="absolute bottom-8 right-16 h-24 w-44 rounded-full bg-[#55BE70]/60" />
      <div className="absolute right-10 top-16 h-8 w-24 rounded-full bg-white/90" />
      <div className="absolute right-20 top-28 h-9 w-28 rounded-full bg-white/80" />
      <div className="absolute bottom-20 right-10 text-3xl">🦋</div>
      <div className="absolute bottom-10 right-32 text-2xl">🌸</div>
      <div className="absolute bottom-12 right-20 text-2xl">🌼</div>

      <div className="absolute bottom-4 left-5 h-[418px] w-[370px] md:left-7">
        <GlukaiImage variant="main" alt="Glukai saludando en el jardin" className="h-full w-full" />
      </div>

      <div className="absolute left-[43%] top-12 w-[280px] rounded-[20px] bg-white px-6 py-5 shadow-[0_12px_30px_rgba(16,42,86,0.08)] max-lg:left-auto max-lg:right-8">
        <span className="absolute -left-3 bottom-5 h-6 w-6 rotate-45 bg-white" />
        <p className="text-base font-bold leading-relaxed text-[#102A56]">Antes de comenzar, cuentame...</p>
        <span className="absolute right-6 top-1/2 -translate-y-1/2 text-2xl text-[#FF7D9C]">♥</span>
      </div>

      <div className="absolute right-6 top-[160px] z-10 w-[520px] max-w-[57%] text-center">
        <h2 className="text-[30px] font-extrabold leading-tight text-[#102A56]">¿Como te sientes hoy?</h2>
        <div className="mt-4 grid grid-cols-6 rounded-[24px] bg-white/96 p-3 shadow-[0_18px_35px_rgba(16,42,86,0.10)]">
          {moodOptions.map((mood) => {
            const active = seleccionada === mood.id
            return (
              <button
                key={mood.id}
                onClick={() => handleEmocion(mood.id)}
                disabled={enviando}
                className={`min-w-0 rounded-[18px] px-2 py-3 text-center transition focus:outline-none focus:ring-4 focus:ring-[#BFE7FF] ${
                  active
                    ? 'bg-[#EEF5FF] ring-2 ring-[#1677FF]/40'
                    : 'hover:-translate-y-0.5 hover:bg-[#F8FCFF]'
                } ${enviando && !active ? 'opacity-50' : ''}`}
              >
                <span className={`relative mx-auto grid h-12 w-12 place-items-center rounded-full text-[28px] shadow-sm transition ${mood.tone} ${active ? 'scale-110 shadow-md' : ''}`}>
                  {mood.emoji}
                  {active && enviando && (
                    <span className="absolute inset-0 animate-ping rounded-full bg-[#1677FF]/20" />
                  )}
                </span>
                <span className={`mt-2 block text-[11px] font-extrabold leading-tight transition ${active ? 'text-[#1677FF]' : 'text-[#102A56]'}`}>
                  {mood.label}
                </span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
