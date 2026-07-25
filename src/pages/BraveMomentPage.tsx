import { useEffect, useState } from 'react'
import { BottomNav } from '../components/chat/BottomNav'
import { GlukaiImage } from '../components/chat/GlukaiImage'
import { Icon } from '../components/chat/Icon'
import { Sidebar } from '../components/chat/Sidebar'

const challenges = [
  { id: 'sensor', icon: '⌚', label: 'Cambiar el sensor' },
  { id: 'insulin', icon: '💉', label: 'Ponerme insulina' },
  { id: 'sugar', icon: '🩸', label: 'Medirme el azúcar' },
  { id: 'doctor', icon: '💗', label: 'Ir al médico' },
] as const

const tools = [
  { icon: '🌬️', title: 'Ejercicio de respiración', subtitle: 'Para calmarte' },
  { icon: '🎵', title: 'Música relajante', subtitle: 'Para tranquilizarte' },
  { icon: '⭐', title: 'Frases positivas', subtitle: 'Para animarte' },
]

export function BraveMomentPage() {
  const [selected, setSelected] = useState('sensor')
  const [otherFear, setOtherFear] = useState('')
  const [isBreathing, setIsBreathing] = useState(false)
  const [seconds, setSeconds] = useState(3)
  const [phase, setPhase] = useState<'Inhala' | 'Exhala'>('Inhala')
  const [cycles, setCycles] = useState(0)

  useEffect(() => {
    if (!isBreathing) return
    const timer = window.setInterval(() => {
      setSeconds((current) => {
        if (current > 1) return current - 1
        setPhase((currentPhase) => {
          if (currentPhase === 'Exhala') setCycles((currentCycles) => Math.min(5, currentCycles + 1))
          return currentPhase === 'Inhala' ? 'Exhala' : 'Inhala'
        })
        return 3
      })
    }, 1000)
    return () => window.clearInterval(timer)
  }, [isBreathing])

  useEffect(() => {
    if (cycles === 5) setIsBreathing(false)
  }, [cycles])

  const startBreathing = () => {
    if (cycles === 5) setCycles(0)
    setSeconds(3)
    setPhase('Inhala')
    setIsBreathing((current) => !current)
  }

  return (
    <div className="min-h-screen bg-[#F8FCFF] font-sans text-[#102A56]">
      <div className="flex min-h-screen overflow-hidden bg-white/70 lg:m-3 lg:min-h-[calc(100vh-24px)] lg:rounded-[28px] lg:border lg:border-sky-100">
        <Sidebar activePath="/brave-moment" />

        <main className="min-w-0 flex-1 px-4 pb-28 pt-6 sm:px-6 lg:pb-7 xl:px-7">
          <header className="flex flex-col gap-4 border-b border-[#E8EEF8] pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="flex items-center gap-3 text-2xl font-black tracking-tight text-[#11194E] sm:text-3xl">
                <span aria-hidden="true">🚀</span> Momento valiente
              </h1>
              <p className="mt-1 text-sm font-bold text-[#405174] sm:text-base">
                Glukai está contigo para ayudarte a enfrentar lo que te da miedo. 💜
              </p>
            </div>
            <div className="flex gap-3">
              <StatCard icon="🔥" label="Racha" value="5 días" />
              <StatCard icon="⭐" label="Estrellas" value="320" />
            </div>
          </header>

          <div className="mt-6 grid gap-6 2xl:grid-cols-[minmax(680px,1fr)_350px]">
            <div className="space-y-6">
              <section className="grid overflow-hidden rounded-[26px] bg-[linear-gradient(135deg,#F3EDFF_0%,#FAF8FF_100%)] shadow-sm ring-1 ring-[#E9DEFF] lg:grid-cols-[320px_1fr]">
                <div className="relative flex min-h-[330px] flex-col p-7">
                  <h2 className="text-xl font-black text-[#2E176B]">Vamos a hacerlo juntos 💜</h2>
                  <p className="mt-3 max-w-[245px] font-bold leading-relaxed text-[#27365C]">
                    Respiraremos, contaremos y lo lograremos paso a paso. ¡Yo estoy aquí contigo!
                  </p>
                  <GlukaiImage variant="main" alt="Glukai te acompaña" className="mx-auto mt-auto h-48 w-48" />
                </div>

                <div className="m-4 rounded-[24px] bg-white/90 p-5 shadow-sm ring-1 ring-white sm:p-6">
                  <h2 className="text-xl font-black text-[#11194E]">¿Qué vas a enfrentar hoy?</h2>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {challenges.map((challenge) => {
                      const active = selected === challenge.id && !otherFear
                      return (
                        <button
                          key={challenge.id}
                          type="button"
                          onClick={() => {
                            setSelected(challenge.id)
                            setOtherFear('')
                          }}
                          className={`relative flex min-h-20 items-center gap-4 rounded-[20px] border-2 px-4 text-left font-extrabold transition hover:-translate-y-0.5 hover:shadow-md ${
                            active ? 'border-[#7C3AED] bg-[#FBF9FF] shadow-[0_8px_22px_rgba(124,58,237,0.12)]' : 'border-[#EDF0F6] bg-white'
                          }`}
                        >
                          <span className="text-3xl">{challenge.icon}</span>
                          <span>{challenge.label}</span>
                          {active && <span className="absolute right-3 top-3 grid h-6 w-6 place-items-center rounded-full bg-[#7C3AED] text-xs text-white">✓</span>}
                        </button>
                      )
                    })}
                  </div>
                  <label className={`mt-3 flex min-h-16 items-center gap-3 rounded-[20px] border-2 px-4 transition ${otherFear ? 'border-[#7C3AED]' : 'border-[#EDF0F6]'}`}>
                    <span className="text-2xl">💬</span>
                    <input
                      value={otherFear}
                      onChange={(event) => setOtherFear(event.target.value)}
                      placeholder="Otra cosa que me da miedo"
                      className="w-full bg-transparent text-sm font-extrabold text-[#102A56] outline-none placeholder:text-[#405174]"
                    />
                  </label>
                </div>
              </section>

              <section className="grid items-center gap-6 rounded-[26px] bg-white p-6 shadow-sm ring-1 ring-sky-100 lg:grid-cols-[190px_1fr_220px]">
                <div className="text-center lg:text-left">
                  <h2 className="text-2xl font-black text-[#11194E]">Respiremos juntos 🌬️</h2>
                  <p className="mt-3 font-bold text-[#405174]">Inhala... exhala...<br />Tú puedes.</p>
                  <GlukaiImage variant="breathing" alt="Glukai respirando" className="mx-auto mt-3 h-36 w-36" />
                </div>

                <div>
                  <div className={`relative mx-auto grid aspect-square max-w-[280px] place-items-center rounded-full p-[14px] ${isBreathing ? 'animate-pulse' : ''}`} style={{ background: `conic-gradient(#8B5CF6 ${cycles * 20}%, #E6DAFF 0)` }}>
                    <div className="grid h-full w-full place-items-center rounded-full bg-white text-center shadow-inner">
                      <div>
                        <p className="text-xl font-black text-[#11194E]">{cycles === 5 ? '¡Lo lograste!' : phase}</p>
                        <p className="mt-2 text-5xl font-black text-[#3E227F]">{cycles === 5 ? '💜' : seconds}</p>
                        <p className="text-sm font-bold text-[#405174]">{cycles === 5 ? 'Eres muy valiente' : 'segundos'}</p>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-center text-sm font-extrabold text-[#5E4A89]">{cycles}/5 ciclos completados</p>
                </div>

                <div className="rounded-[22px] bg-[#F3EDFF] p-5">
                  <h3 className="font-black text-[#462585]">Así lo haremos:</h3>
                  <ol className="mt-4 space-y-3 text-sm font-bold text-[#27365C]">
                    {['Respiramos juntos para calmarnos', 'Contamos hasta 10', 'Lo logramos paso a paso', 'Celebramos tu coraje'].map((step, index) => (
                      <li key={step} className="flex gap-3">
                        <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-[#8B5CF6] text-xs text-white">{index + 1}</span>
                        {step}
                      </li>
                    ))}
                  </ol>
                </div>

                <button
                  type="button"
                  onClick={startBreathing}
                  className="rounded-full bg-[linear-gradient(90deg,#7138D5,#8B5CF6)] px-6 py-3 font-black text-white shadow-[0_10px_24px_rgba(113,56,213,0.25)] transition hover:-translate-y-0.5 lg:col-start-2"
                >
                  {isBreathing ? 'Pausar ejercicio' : cycles === 5 ? 'Respirar otra vez' : '¡Estoy listo, Glukai!'} →
                </button>
                <p className="text-center text-xs font-bold text-[#71809A] lg:col-start-2">🛡️ Este es un espacio seguro. Avanzamos a tu ritmo.</p>
              </section>
            </div>

            <aside className="space-y-5">
              <section className="rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-sky-100">
                <h2 className="font-black text-[#11194E]">Tu progreso valiente</h2>
                <div className="mt-5 flex items-center gap-5">
                  <div className="grid h-24 w-24 shrink-0 place-items-center rounded-full p-2" style={{ background: 'conic-gradient(#16A34A 70%, #DCE8F8 0)' }}>
                    <div className="grid h-full w-full place-items-center rounded-full bg-white text-xl font-black">7/10</div>
                  </div>
                  <p className="font-black leading-snug">Momentos valientes completados</p>
                </div>
                <p className="mt-5 font-extrabold">¡Qué increíble eres! 💪</p>
              </section>

              <section className="rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-sky-100">
                <h2 className="font-black text-[#11194E]">Herramientas que te ayudan</h2>
                <div className="mt-4 space-y-2">
                  {tools.map((tool) => (
                    <button key={tool.title} type="button" className="flex w-full items-center gap-3 rounded-[18px] bg-white p-3 text-left shadow-sm ring-1 ring-[#E7EDF7] transition hover:bg-[#F8FBFF]">
                      <span className="text-2xl">{tool.icon}</span>
                      <span>
                        <span className="block text-sm font-extrabold">{tool.title}</span>
                        <span className="block text-xs font-bold text-[#71809A]">{tool.subtitle}</span>
                      </span>
                      <span className="ml-auto text-xl font-black">›</span>
                    </button>
                  ))}
                </div>
              </section>

              <section className="relative overflow-hidden rounded-[24px] bg-[#FFF0F5] p-6">
                <h2 className="font-black text-[#58205E]">💗 Recuerda</h2>
                <p className="mt-3 max-w-[210px] text-sm font-bold leading-relaxed">Sentir miedo es normal, pero ser valiente es intentar a pesar de él.</p>
                <GlukaiImage variant="chat" alt="" className="absolute -bottom-3 right-1 h-24 w-24" />
              </section>

              <section className="relative overflow-hidden rounded-[24px] bg-[#FFF8DC] p-6">
                <h2 className="font-black text-[#443610]">💡 Consejo de Glukai</h2>
                <p className="mt-3 max-w-[210px] text-sm font-bold leading-relaxed">Cada paso que das, por pequeño que sea, te hace más fuerte.</p>
                <GlukaiImage variant="learning" alt="" className="absolute -bottom-3 right-1 h-24 w-24" />
              </section>
            </aside>
          </div>
        </main>
      </div>
      <BottomNav activePath="/brave-moment" />
    </div>
  )
}

function StatCard({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-center gap-3 rounded-[18px] bg-white px-4 py-3 shadow-sm ring-1 ring-sky-100">
      <span className="text-2xl">{icon}</span>
      <div>
        <p className="text-xs font-bold text-[#536380]">{label}</p>
        <p className="font-black text-[#11194E]">{value}</p>
      </div>
    </div>
  )
}
