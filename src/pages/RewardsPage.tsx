import { useState } from 'react'
import { BottomNav } from '../components/chat/BottomNav'
import { GlukaiImage } from '../components/chat/GlukaiImage'
import { Sidebar } from '../components/chat/Sidebar'

const rewards = [
  { icon: '🖼️', title: 'Fondo de pantalla Glukai', price: 20, tone: 'bg-[#F2ECFF]' },
  { icon: '🎒', title: 'Mochila Glukai azul', price: 40, tone: 'bg-[#E9FAFC]' },
  { icon: '🎡', title: 'Ruleta de sorpresas', price: 60, tone: 'bg-[#FFF7E3]' },
  { icon: '🥰', title: 'Pack de emojis Glukai', price: 30, tone: 'bg-[#FFF0FA]' },
  { icon: '🎵', title: 'Canción exclusiva de Glukai', price: 50, tone: 'bg-[#F5F0FF]' },
  { icon: '🪴', title: 'Planta virtual especial', price: 70, tone: 'bg-[#ECFAF0]' },
  { icon: '🛏️', title: 'Decoración para tu habitación', price: 90, tone: 'bg-[#F0EEFF]' },
  { icon: '🏆', title: 'Trofeo Valiente', price: 100, tone: 'bg-[#FFF8E8]' },
]

export function RewardsPage() {
  const [stars, setStars] = useState(120)
  const [notice, setNotice] = useState('')

  const redeem = (title: string, price: number) => {
    if (price > stars) {
      setNotice(`Te faltan ${price - stars} estrellas para conseguir “${title}”. ¡Sigue así!`)
      return
    }
    setStars((current) => current - price)
    setNotice(`¡Canjeaste “${title}”! 🎉`)
  }

  return (
    <div className="min-h-screen bg-[#F8FCFF] font-sans text-[#102A56]">
      <div className="flex min-h-screen overflow-hidden bg-white/70 lg:m-3 lg:min-h-[calc(100vh-24px)] lg:rounded-[28px] lg:border lg:border-sky-100">
        <Sidebar activePath="/rewards" />
        <main className="min-w-0 flex-1 px-4 pb-28 pt-6 sm:px-6 lg:pb-7 xl:px-8">
          <header className="flex items-start justify-between border-b border-[#E8EEF8] pb-5">
            <div>
              <h1 className="flex items-center gap-3 text-3xl font-black text-[#11194E]"><span>🗓️</span> Mis premios</h1>
              <p className="mt-1 font-bold text-[#405174]">Cada paso que das te hace crecer ✨</p>
            </div>
            <button type="button" onClick={() => setNotice('Ganas estrellas completando misiones, cuidándote y viviendo momentos valientes ⭐')} className="hidden rounded-[16px] bg-white px-5 py-3 text-sm font-extrabold shadow-sm ring-1 ring-[#E4E9F4] sm:block">
              ¿Cómo gano estrellas? ⭐
            </button>
          </header>

          {notice && (
            <button type="button" onClick={() => setNotice('')} className="mt-4 w-full rounded-[16px] bg-[#EEE9FF] px-5 py-3 text-left text-sm font-extrabold text-[#5130A4]">
              {notice} <span className="float-right">×</span>
            </button>
          )}

          <section className="relative mt-5 grid min-h-44 overflow-hidden rounded-[26px] bg-[#FFFBEF] p-6 shadow-sm ring-1 ring-[#F6E8B7] sm:grid-cols-3 sm:items-center">
            <div className="flex items-center gap-5 border-[#EEDFA9] sm:border-r">
              <span className="text-6xl">⭐</span>
              <div><p className="text-5xl font-black text-[#7443D6]">{stars}</p><p className="font-extrabold">estrellas totales</p></div>
            </div>
            <div className="mt-5 text-center sm:mt-0">
              <p className="text-3xl font-black">🔥 7</p>
              <p className="font-extrabold">días seguidos</p>
              <p className="mt-2 font-black text-[#8B5CC7]">¡Sigue tu racha!</p>
            </div>
            <div className="mt-5 rounded-[20px] bg-white/80 p-5 font-bold leading-relaxed sm:mt-0 sm:mr-24">
              <strong>¡Eres increíble, Mateo! 💙</strong><br />Sigue aprendiendo, cuidándote y siendo valiente cada día.
            </div>
            <GlukaiImage variant="chat" alt="Glukai celebrando" className="absolute -bottom-5 right-0 hidden h-44 w-44 sm:block" />
          </section>

          <div className="mt-6 grid gap-6 xl:grid-cols-[minmax(620px,1fr)_340px]">
            <section>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div><h2 className="text-2xl font-black">Premios disponibles</h2><p className="font-bold text-[#405174]">Canjea tus estrellas por recompensas geniales</p></div>
                <select className="rounded-[14px] border border-[#E3E7F1] bg-white px-4 py-2.5 text-sm font-bold outline-none">
                  <option>Ordenar: Menor precio</option>
                  <option>Ordenar: Mayor precio</option>
                </select>
              </div>
              <div className="mt-5 grid grid-cols-2 gap-4 lg:grid-cols-4">
                {rewards.map((reward) => (
                  <article key={reward.title} className={`flex min-h-60 flex-col rounded-[24px] p-4 text-center shadow-sm ring-1 ring-[#E4E7F0] ${reward.tone}`}>
                    <div className="grid min-h-24 place-items-center text-6xl">{reward.icon}</div>
                    <h3 className="mt-2 flex-1 text-base font-black leading-snug">{reward.title}</h3>
                    <button type="button" onClick={() => redeem(reward.title, reward.price)} className="mt-4 rounded-full bg-white px-3 py-2 text-sm font-black text-[#7443D6] shadow-sm ring-1 ring-white transition hover:-translate-y-0.5">
                      ⭐ {reward.price} estrellas
                    </button>
                  </article>
                ))}
              </div>
              <button type="button" className="mt-5 w-full rounded-[18px] bg-[#F9F5FF] py-3 font-black text-[#7443D6] ring-1 ring-[#E7DDF8]">Ver más premios⌄</button>
            </section>

            <aside className="space-y-5">
              <section className="rounded-[24px] bg-white p-6 text-center shadow-sm ring-1 ring-sky-100">
                <h2 className="text-left text-xl font-black">Tu progreso</h2>
                <div className="mt-3 text-7xl">🧰</div>
                <p className="mt-2 font-black">¡Sigue juntando estrellas!</p>
                <p className="mt-3 text-sm font-bold text-[#536380]">Próximo premio:</p>
                <p className="mt-2 rounded-full bg-[#F5F7FB] px-4 py-2 font-extrabold">🎒 Mochila Glukai azul</p>
                <div className="mt-5 h-3 overflow-hidden rounded-full bg-[#E9ECF5]"><div className="h-full rounded-full bg-[#9965E8]" style={{ width: `${Math.min(100, (stars / 150) * 100)}%` }} /></div>
                <p className="mt-2 text-sm font-black text-[#7443D6]">{stars} / 150 estrellas</p>
              </section>
              <section className="rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-sky-100">
                <h2 className="text-xl font-black">Premios especiales</h2>
                <p className="mt-1 text-sm font-bold text-[#536380]">Se desbloquean con logros increíbles.</p>
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <SpecialReward icon="🌈" title="Viaje mágico" stars={200} />
                  <SpecialReward icon="🦸" title="Disfraz de super Glukai" stars={300} />
                </div>
              </section>
            </aside>
          </div>
        </main>
      </div>
      <BottomNav activePath="/rewards" />
    </div>
  )
}

function SpecialReward({ icon, title, stars }: { icon: string; title: string; stars: number }) {
  return <div className="rounded-[18px] bg-[#F7F4FF] p-3 text-center ring-1 ring-[#E7E0F7]"><span className="float-right">🔒</span><div className="mt-3 text-5xl">{icon}</div><p className="mt-3 text-sm font-black">{title}</p><p className="mt-2 text-xs font-bold text-[#536380]">Se desbloquea con {stars} estrellas</p></div>
}
