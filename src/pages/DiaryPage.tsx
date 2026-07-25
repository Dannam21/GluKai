import { useMemo, useState } from 'react'
import { BottomNav } from '../components/chat/BottomNav'
import { GlukaiImage } from '../components/chat/GlukaiImage'
import { Sidebar } from '../components/chat/Sidebar'

const moods = [
  { id: 'happy', emoji: '😊', label: 'Feliz', tone: 'bg-[#FFF4BE]' },
  { id: 'calm', emoji: '😌', label: 'Tranquilo', tone: 'bg-[#DDF7E8]' },
  { id: 'normal', emoji: '😐', label: 'Normal', tone: 'bg-[#DCEEFF]' },
  { id: 'worried', emoji: '😟', label: 'Preocupado', tone: 'bg-[#FFE5BD]' },
  { id: 'sad', emoji: '😢', label: 'Triste', tone: 'bg-[#E9DFFF]' },
] as const

const prompts = [
  '¿Qué fue lo mejor de tu día?',
  '¿Hubo algo que te preocupó?',
  '¿Qué te hizo sentir orgulloso hoy?',
]

type SavedEntry = {
  mood: string
  text: string
  date: string
}

export function DiaryPage() {
  const [mood, setMood] = useState('happy')
  const [text, setText] = useState('')
  const [savedEntry, setSavedEntry] = useState<SavedEntry | null>(null)
  const [message, setMessage] = useState('')

  const today = useMemo(
    () =>
      new Intl.DateTimeFormat('es-CO', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
      }).format(new Date()),
    [],
  )

  const saveEntry = () => {
    if (!text.trim()) {
      setMessage('Cuéntame un poquito sobre tu día antes de guardar 💙')
      return
    }

    const entry = { mood, text: text.trim(), date: new Date().toISOString() }
    window.localStorage.setItem('glukai-diary-latest', JSON.stringify(entry))
    setSavedEntry(entry)
    setMessage('¡Tu momento quedó guardado! Estoy orgulloso de ti 💜')
  }

  return (
    <div className="min-h-screen bg-[#F8FCFF] font-sans text-[#102A56]">
      <div className="flex min-h-screen overflow-hidden bg-white/70 lg:m-3 lg:min-h-[calc(100vh-24px)] lg:rounded-[28px] lg:border lg:border-sky-100">
        <Sidebar activePath="/diary" />

        <main className="min-w-0 flex-1 px-4 pb-28 pt-6 sm:px-6 lg:pb-7 xl:px-8">
          <header className="flex flex-col gap-4 border-b border-[#E8EEF8] pb-5 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="flex items-center gap-3 text-2xl font-black tracking-tight text-[#11194E] sm:text-3xl">
                <span aria-hidden="true">📖</span> Mi diario
              </h1>
              <p className="mt-1 text-sm font-bold text-[#405174] sm:text-base">
                Este es tu espacio para contar cómo fue tu día. Todo lo que sientes importa. 💙
              </p>
            </div>
            <div className="rounded-[18px] bg-white px-5 py-3 text-sm font-extrabold capitalize shadow-sm ring-1 ring-sky-100">
              📅 {today}
            </div>
          </header>

          <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(620px,1fr)_350px]">
            <div className="space-y-6">
              <section className="overflow-hidden rounded-[26px] bg-[linear-gradient(135deg,#EAF7FF_0%,#F4EEFF_100%)] p-6 shadow-sm ring-1 ring-[#DCEEFF] sm:p-8">
                <div className="flex flex-col items-center gap-5 sm:flex-row">
                  <GlukaiImage variant="learning" alt="Glukai escribiendo contigo" className="h-36 w-36 shrink-0" />
                  <div>
                    <h2 className="text-2xl font-black text-[#24205F]">Hola, Mateo 👋</h2>
                    <p className="mt-2 max-w-xl font-bold leading-relaxed text-[#405174]">
                      Quiero saber cómo te fue hoy. Puedes contarme algo bonito, algo difícil o cualquier cosa que tengas en tu corazón.
                    </p>
                  </div>
                </div>
              </section>

              <section className="rounded-[26px] bg-white p-6 shadow-sm ring-1 ring-sky-100 sm:p-8">
                <h2 className="text-xl font-black text-[#11194E]">¿Cómo te sentiste hoy?</h2>
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-5">
                  {moods.map((item) => {
                    const active = mood === item.id
                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setMood(item.id)}
                        className={`relative flex min-h-28 flex-col items-center justify-center rounded-[22px] transition hover:-translate-y-1 ${item.tone} ${
                          active ? 'shadow-[0_10px_25px_rgba(79,70,229,0.16)] ring-3 ring-[#7C5CE7]' : 'ring-1 ring-white'
                        }`}
                      >
                        <span className="text-4xl">{item.emoji}</span>
                        <span className="mt-2 text-sm font-black">{item.label}</span>
                        {active && <span className="absolute right-2 top-2 grid h-6 w-6 place-items-center rounded-full bg-[#7C5CE7] text-xs text-white">✓</span>}
                      </button>
                    )
                  })}
                </div>

                <div className="mt-7">
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                    <h2 className="text-xl font-black text-[#11194E]">Cuéntame sobre tu día</h2>
                    <span className="text-xs font-bold text-[#71809A]">{text.length}/600 caracteres</span>
                  </div>
                  <textarea
                    value={text}
                    maxLength={600}
                    onChange={(event) => {
                      setText(event.target.value)
                      setMessage('')
                    }}
                    placeholder="Hoy me sentí... porque..."
                    className="mt-4 min-h-52 w-full resize-none rounded-[22px] border-2 border-[#E1EAF6] bg-[#FBFDFF] p-5 font-bold leading-relaxed text-[#27365C] outline-none transition placeholder:text-[#9AA9BD] focus:border-[#8B6AE8] focus:bg-white focus:ring-4 focus:ring-[#EEE9FF]"
                  />
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <button
                    type="button"
                    onClick={saveEntry}
                    className="rounded-full bg-[linear-gradient(90deg,#6546D7,#8B6AE8)] px-8 py-3.5 font-black text-white shadow-[0_10px_24px_rgba(101,70,215,0.25)] transition hover:-translate-y-0.5"
                  >
                    Guardar en mi diario 💜
                  </button>
                  <p className="text-sm font-bold text-[#536380]">{message || '🔒 Solo tú puedes ver lo que escribes aquí.'}</p>
                </div>
              </section>
            </div>

            <aside className="space-y-5">
              <section className="rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-sky-100">
                <h2 className="font-black text-[#11194E]">Ideas para escribir ✨</h2>
                <div className="mt-4 space-y-3">
                  {prompts.map((prompt, index) => (
                    <button
                      key={prompt}
                      type="button"
                      onClick={() => setText((current) => `${current}${current ? '\n\n' : ''}${prompt}\n`)}
                      className="flex w-full items-start gap-3 rounded-[18px] bg-[#F8FBFF] p-4 text-left text-sm font-extrabold leading-snug ring-1 ring-[#E6EEF8] transition hover:bg-[#EEF7FF]"
                    >
                      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-[#E5DDFF] text-xs text-[#6546D7]">{index + 1}</span>
                      {prompt}
                    </button>
                  ))}
                </div>
              </section>

              <section className="relative overflow-hidden rounded-[24px] bg-[#FFF4D8] p-6">
                <h2 className="font-black text-[#4D3C13]">⭐ Momento del día</h2>
                <p className="mt-3 max-w-[210px] text-sm font-bold leading-relaxed">
                  Incluso en un día difícil siempre puede haber un momento pequeño que nos hizo bien.
                </p>
                <GlukaiImage variant="chat" alt="" className="absolute -bottom-4 right-0 h-24 w-24" />
              </section>

              <section className="rounded-[24px] bg-[#F3EDFF] p-6">
                <h2 className="font-black text-[#442779]">Tu diario esta semana</h2>
                <div className="mt-5 flex items-end justify-between gap-2" aria-label="Tres de siete días completados">
                  {['L', 'M', 'M', 'J', 'V', 'S', 'D'].map((day, index) => (
                    <div key={`${day}-${index}`} className="text-center">
                      <span className={`grid h-9 w-9 place-items-center rounded-full text-sm font-black ${index < 3 || savedEntry ? 'bg-[#7C5CE7] text-white' : 'bg-white text-[#8B97AA]'}`}>
                        {index < 3 || (savedEntry && index === 3) ? '✓' : day}
                      </span>
                      <span className="mt-1 block text-[10px] font-bold text-[#71809A]">{day}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm font-extrabold text-[#513B7D]">¡Sigue expresando lo que sientes! 🌈</p>
              </section>

              <section className="relative overflow-hidden rounded-[24px] bg-[#E9F8F3] p-6">
                <h2 className="font-black text-[#164C3E]">💡 Consejo de Glukai</h2>
                <p className="mt-3 max-w-[225px] text-sm font-bold leading-relaxed">
                  No hay emociones buenas o malas. Todas nos cuentan algo importante.
                </p>
                <GlukaiImage variant="breathing" alt="" className="absolute -bottom-4 right-0 h-24 w-24" />
              </section>
            </aside>
          </div>
        </main>
      </div>
      <BottomNav activePath="/diary" />
    </div>
  )
}
