import { useState } from 'react'
import { BottomNav } from '../components/chat/BottomNav'
import { GlukaiImage } from '../components/chat/GlukaiImage'
import { Sidebar } from '../components/chat/Sidebar'

export function ProfilePage() {
  const [editing, setEditing] = useState(false)
  const [name, setName] = useState('Mateo')
  const [city, setCity] = useState('Lima, Perú')
  const [likes, setLikes] = useState('Dibujar, los videojuegos y los animales')

  return (
    <div className="min-h-screen bg-[#F8FCFF] font-sans text-[#102A56]">
      <div className="flex min-h-screen overflow-hidden bg-white/70 lg:m-3 lg:min-h-[calc(100vh-24px)] lg:rounded-[28px] lg:border lg:border-sky-100">
        <Sidebar activePath="/profile" />
        <main className="min-w-0 flex-1 px-4 pb-28 pt-6 sm:px-6 lg:pb-7 xl:px-8">
          <header className="flex items-center justify-between border-b border-[#E8EEF8] pb-5">
            <div><h1 className="flex items-center gap-3 text-3xl font-black"><span>👤</span> Mi perfil</h1><p className="mt-1 font-bold text-[#405174]">Este es tu espacio, {name} 💙</p></div>
            <button type="button" onClick={() => setEditing((value) => !value)} className="rounded-[16px] bg-white px-5 py-3 font-extrabold text-[#7443D6] shadow-sm ring-1 ring-[#DED7F1]">{editing ? '✓ Guardar cambios' : '✏️ Editar perfil'}</button>
          </header>

          <section className="relative mt-5 flex min-h-52 flex-col items-center gap-6 overflow-hidden rounded-[26px] bg-[linear-gradient(100deg,#F4F1FF,#FBFAFF)] p-6 ring-1 ring-[#DFD8F5] sm:flex-row">
            <div className="grid h-40 w-40 shrink-0 place-items-center rounded-full bg-[#DDEEFF] text-8xl ring-4 ring-[#C7DDFB]">👦</div>
            <div>
              {editing ? <input value={name} onChange={(event) => setName(event.target.value)} className="w-52 rounded-xl border border-[#CFC2F2] bg-white px-3 py-2 text-3xl font-black outline-none" /> : <h2 className="text-3xl font-black">{name} 💙</h2>}
              <p className="mt-2 font-bold">8 años</p>
              <span className="mt-3 inline-block rounded-full bg-[#E5F1FF] px-4 py-2 text-sm font-extrabold text-[#3F73BF]">Tipo 1</span>
              <p className="mt-3 text-sm font-bold text-[#65718A]">🗓️ Diagnosticado en marzo 2023</p>
            </div>
            <div className="ml-auto mr-36 hidden max-w-[300px] rounded-[22px] bg-white p-5 font-bold leading-relaxed shadow-sm ring-1 ring-[#E1DCF0] lg:block"><strong>¡Eres increíble, {name}!</strong><br />Cada día aprendes más y te haces más valiente. 💜</div>
            <GlukaiImage variant="chat" alt="Glukai orgulloso" className="absolute -bottom-6 right-2 hidden h-48 w-48 lg:block" />
          </section>

          <div className="mt-5 grid gap-5 xl:grid-cols-2">
            <InfoCard title="ℹ️  Sobre mí">
              <InfoRow label="🎂 Cumpleaños" value="12 de abril de 2016" />
              <InfoRow label="📍 Vivo en" value={city} editable={editing} onChange={setCity} />
              <InfoRow label="💗 Me gusta" value={likes} editable={editing} onChange={setLikes} />
              <InfoRow label="⭐ Mi color favorito" value="🔵 Azul" />
              <InfoRow label="📝 Mi meta" value="¡Aprender cosas nuevas cada día!" />
            </InfoCard>
            <InfoCard title="🩸  Mi diabetes">
              <InfoRow label="📱 Uso" value="Sensor continuo (CGM)" />
              <InfoRow label="💉 Me aplico insulina con" value="Pluma" />
              <InfoRow label="🕒 Días con mi sensor" value="7 días" />
              <InfoRow label="🛡️ Lo que más me ayuda" value="Mi familia, Glukai y respirar profundo" />
            </InfoCard>
            <InfoCard title="🏆  Mis logros">
              <div className="grid gap-3 sm:grid-cols-3">
                <Achievement icon="⭐" title="Primeros pasos" detail="Completaste 5 misiones" date="10/04/2024" />
                <Achievement icon="🏅" title="Valiente" detail="Hablaste de tus miedos" date="22/05/2024" />
                <Achievement icon="🛡️" title="Experto en alimentos" detail="Aprendiste sobre carbohidratos" date="15/06/2024" />
              </div>
              <a href="/rewards" className="mt-4 block text-center text-sm font-black text-[#7443D6]">Ver todos mis logros →</a>
            </InfoCard>
            <InfoCard title="🔥  Mi racha">
              <div className="flex flex-col items-center gap-5 sm:flex-row">
                <div className="grid h-36 w-36 shrink-0 place-items-center rounded-full border-[12px] border-[#C4A7F7] text-center"><div><span className="text-4xl">🔥</span><p className="text-3xl font-black">7</p><p className="text-sm font-black">días</p></div></div>
                <div><p className="font-black">¡Lo estás haciendo genial!</p><p className="mt-2 text-sm font-bold leading-relaxed text-[#536380]">Sigue así para ganar más recompensas y ayudar a tu cuerpo.</p><div className="mt-5 flex gap-2">{['L','M','M','J','V','S','D'].map((day,index) => <span key={`${day}${index}`} className="grid h-8 w-8 place-items-center rounded-full bg-[#7961E8] text-xs font-black text-white">✓</span>)}</div></div>
              </div>
            </InfoCard>
          </div>
          <section className="relative mt-5 overflow-hidden rounded-[24px] bg-[#EAF5FF] p-6 ring-1 ring-sky-100"><h2 className="font-black">💬 Mi frase del día</h2><p className="mt-3 font-bold">“Puedo hacer cosas difíciles, paso a paso.” 💙</p><GlukaiImage variant="sleeping" alt="" className="absolute -bottom-6 right-24 hidden h-28 w-28 sm:block" /></section>
        </main>
      </div>
      <BottomNav activePath="/profile" />
    </div>
  )
}

function InfoCard({ title, children }: { title: string; children: React.ReactNode }) {
  return <section className="rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-sky-100"><h2 className="mb-5 text-xl font-black">{title}</h2>{children}</section>
}
function InfoRow({ label, value, editable, onChange }: { label: string; value: string; editable?: boolean; onChange?: (value: string) => void }) {
  return <div className="flex flex-col gap-1 border-b border-[#F0F3F8] py-2.5 text-sm font-bold last:border-0 sm:flex-row sm:items-center sm:justify-between"><span>{label}</span>{editable ? <input value={value} onChange={(event) => onChange?.(event.target.value)} className="rounded-lg border border-[#D8CEF1] px-2 py-1 text-right outline-none" /> : <span className="text-[#31405F]">{value}</span>}</div>
}
function Achievement({ icon, title, detail, date }: { icon: string; title: string; detail: string; date: string }) {
  return <div className="rounded-[18px] bg-[#FBFCFF] p-4 text-center ring-1 ring-[#E5E9F2]"><div className="text-4xl">{icon}</div><p className="mt-2 text-sm font-black">{title}</p><p className="mt-1 text-xs font-bold">{detail}</p><p className="mt-2 text-xs font-bold text-[#8A68DA]">{date}</p></div>
}
