import { GlukaiImage } from '../components/chat/GlukaiImage'

const nav = ['🏠 Resumen', '♡ Bienestar', '📖 Aprendizaje', '🗓️ Historial', '⚙️ Ajustes']
const activities = [
  ['🥗', 'Mi plato', '9:15 a. m.'],
  ['🎯', 'Misión: Carbohidratos', '10:00 a. m.'],
  ['📱', 'Aprendiendo sobre mi sensor', '4:30 p. m.'],
  ['💙', 'Momento Valiente', '7:00 p. m.'],
]

export function CaregiverDashboardPage() {
  return (
    <div className="min-h-screen bg-[#F8FCFF] p-3 font-sans text-[#11194E]">
      <div className="mx-auto flex min-h-[calc(100vh-24px)] max-w-[1500px] overflow-hidden rounded-[28px] bg-white shadow-sm ring-1 ring-sky-100">
        <aside className="hidden w-48 shrink-0 flex-col border-r border-[#E5EDF7] p-5 lg:flex">
          <GlukaiImage variant="chat" alt="Glukai" className="mx-auto h-24 w-24" />
          <p className="text-center text-3xl font-black text-[#7443D6]">Glukai💜</p>
          <nav className="mt-8 space-y-3">{nav.map((item, index) => <button key={item} className={`w-full rounded-[16px] px-4 py-3 text-left text-sm font-extrabold ${index === 0 ? 'bg-[#EEE7FF] text-[#6F3BD2]' : ''}`}>{item}</button>)}</nav>
          <div className="mt-auto rounded-[18px] bg-[#F8F6FF] p-4 text-center text-sm font-bold">🛡️<br />Panel protegido para cuidadores 💜</div>
          <a href="/profiles" className="mt-4 rounded-[14px] bg-[#F6F8FC] px-4 py-3 text-center text-sm font-extrabold">↪ Cerrar sesión</a>
        </aside>

        <main className="min-w-0 flex-1 p-5 sm:p-8">
          <header className="flex flex-col justify-between gap-4 sm:flex-row">
            <div><h1 className="text-3xl font-black">Hola, Darlene 👋</h1><p className="mt-1 text-xl font-extrabold">Así estuvo Mateo hoy 💜</p></div>
            <div className="flex items-center gap-3"><span className="grid h-12 w-12 place-items-center rounded-full bg-[#F0E7FF] text-3xl">👩</span><div><p className="font-black">Darlene</p><p className="text-sm font-bold">Cuidador de Mateo</p></div></div>
          </header>

          <section className="relative mt-6 flex flex-wrap items-center gap-6 overflow-hidden rounded-[24px] bg-[#F9FCFF] p-5 ring-1 ring-sky-100">
            <span className="grid h-24 w-24 place-items-center rounded-full bg-[#DDF1FF] text-6xl">👦</span>
            <div><h2 className="text-2xl font-black">Mateo</h2><p className="font-bold">8 años</p><span className="mt-2 inline-block rounded-full bg-[#EFE7FF] px-3 py-1 text-xs font-black text-[#7548D8]">Tipo 1</span></div>
            <div className="ml-auto"><p className="text-sm font-bold">Racha actual</p><p className="mt-2 text-xl font-black text-[#7443D6]">🔥 7 días</p></div>
            <div className="mr-36"><p className="text-sm font-bold">Estrellas totales</p><p className="mt-2 text-xl font-black text-[#7443D6]">⭐ 120</p></div>
            <GlukaiImage variant="chat" alt="" className="absolute -bottom-4 right-0 hidden h-36 w-36 sm:block" />
          </section>

          <div className="mt-5 grid gap-5 xl:grid-cols-2">
            <section className="rounded-[24px] bg-[#F0FCF8] p-6 ring-1 ring-[#D4F0E7]">
              <h2 className="text-xl font-black text-[#155843]">Bienestar de hoy ♡</h2>
              <div className="mt-4 rounded-[18px] bg-white p-5">
                <p className="text-sm font-black">Estado emocional inicial</p><p className="mt-3 text-lg font-black">😟 Preocupado</p><p className="text-sm font-bold text-[#536380]">8:30 a. m.</p>
                <p className="mt-6 text-sm font-black">Evolución emocional</p><div className="mt-3 flex items-center justify-between text-4xl"><span>😟</span><span className="text-sm">→</span><span>😐</span><span className="text-sm">→</span><span>😊</span></div>
              </div>
              <div className="mt-3 rounded-[18px] bg-white p-4"><p className="font-black">Actividades de regulación</p><p className="mt-2 text-sm font-bold">🌿 Respiración guiada · 5 min <span className="float-right text-green-500">✓</span></p></div>
            </section>
            <section className="rounded-[24px] bg-[#F3F7FF] p-6 ring-1 ring-[#DFE8FA]">
              <h2 className="text-xl font-black text-[#213D88]">Actividades realizadas 🎮</h2>
              <div className="mt-4 divide-y divide-[#EDF0F6] rounded-[18px] bg-white px-4">
                {activities.map(([icon,title,time]) => <div key={title} className="flex items-center gap-4 py-3"><span className="text-3xl">{icon}</span><div><p className="text-sm font-black">{title}</p><p className="text-xs font-bold text-[#536380]">{time}</p></div><span className="ml-auto text-green-500">●✓</span></div>)}
              </div>
              <a href="/diary" className="mt-5 block text-center text-sm font-black text-[#7443D6]">Ver todas las actividades →</a>
            </section>
            <section className="rounded-[24px] bg-[#FFF9E9] p-6 ring-1 ring-[#F4E8BE]">
              <h2 className="text-xl font-black text-[#6C4D0B]">Progreso de hoy ⭐</h2>
              <div className="mt-5 grid grid-cols-4 gap-2">{[['⭐','30','Estrellas'],['🏆','3','Misiones'],['📖','2','Temas'],['⚡','2','Momentos']].map(([icon,value,label]) => <div key={label} className="rounded-[14px] bg-white p-3 text-center"><p className="text-2xl">{icon}</p><p className="text-xl font-black">{value}</p><p className="text-[10px] font-bold">{label}</p></div>)}</div>
              <p className="mt-5 font-black">Temas aprendidos hoy</p><div className="mt-3 flex flex-wrap gap-2"><span className="rounded-full bg-[#DFF6EA] px-3 py-1 text-xs font-bold">Carbohidratos</span><span className="rounded-full bg-[#F1E7FF] px-3 py-1 text-xs font-bold">Alimentos</span><span className="rounded-full bg-[#E5F1FF] px-3 py-1 text-xs font-bold">Sensor</span></div>
            </section>
            <section className="relative overflow-hidden rounded-[24px] bg-[#F6F0FF] p-6 ring-1 ring-[#E6DCF7]">
              <h2 className="text-xl font-black text-[#4E168D]">Resumen inteligente de Glukai</h2><p className="mt-1 text-xs font-bold">Generado a partir de las interacciones de Mateo.</p>
              <div className="mt-4 rounded-[18px] bg-white/80 p-5 text-sm font-bold leading-relaxed"><p>Mateo comenzó el día preocupado por el cambio de su sensor. Conversó con Glukai y realizó una actividad de respiración que lo ayudó a sentirse mejor.</p><p className="mt-3">Más tarde exploró “Mi plato” y completó 3 actividades educativas.</p></div>
              <a href="/diary" className="mt-4 block text-center text-sm font-black text-[#7443D6]">Ver día completo →</a>
            </section>
          </div>
          <section className="mt-5 rounded-[24px] bg-[#FFF3F7] p-6 ring-1 ring-[#F5DCE5]"><h2 className="text-center text-xl font-black text-[#B5275C]">¿Cómo puedo acompañarlo hoy?</h2><div className="mt-4 grid gap-4 md:grid-cols-[1fr_2fr_1fr]"><div className="text-center text-7xl">👩‍👦</div><div className="rounded-[18px] bg-white/70 p-5 text-sm font-bold leading-relaxed">💡 Mateo mostró preocupación relacionada con su sensor. Podrías preguntarle cómo se siente respecto al próximo cambio y recordarle la actividad de respiración que practicó hoy. 💗</div><div className="text-sm font-bold"><p className="font-black">Sugerencias de Glukai</p><p className="mt-3">🔵 Escucha cómo se siente</p><p className="mt-3">💗 Valida sus emociones</p><p className="mt-3">⭐ Refuerza sus logros</p></div></div></section>
          <p className="mt-5 rounded-[18px] bg-[#EFF6FF] p-4 text-center text-xs font-bold">🛡️ Glukai es un compañero educativo y emocional. No reemplaza el seguimiento médico profesional.</p>
        </main>
      </div>
    </div>
  )
}
