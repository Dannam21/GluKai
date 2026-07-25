import { Icon } from './Icon'
import { GlukaiImage } from './GlukaiImage'

const items = [
  ['Inicio', '/', 'home'],
  ['Misiones', '/missions', 'map'],
  ['Hablar con Glukai', '/chat', 'chat'],
  ['Mi plato', '/plate', 'plate'],
  ['Momento valiente', '/brave-moment', 'shield'],
  ['Diario', '/diary', 'book'],
  ['Premios', '/rewards', 'star'],
  ['Perfil', '/profile', 'user'],
  ['Ayuda', '/help', 'help'],
] as const

export function Sidebar() {
  return (
    <aside className="hidden h-screen w-[248px] shrink-0 flex-col border-r border-sky-100 bg-white/92 px-5 py-6 shadow-[12px_0_35px_rgba(22,119,255,0.05)] lg:flex">
      <div className="flex items-center gap-3 px-2">
        <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#E9F6FF]">
          <GlukaiImage variant="main" alt="Logo Glukai" className="h-9 w-9" />
        </div>
        <div>
          <p className="text-xl font-extrabold text-[#102A56]">Glukai</p>
          <p className="text-xs font-bold text-[#45AFC5]">amigo valiente</p>
        </div>
      </div>

      <div className="mt-5 rounded-[34px] bg-[#E9F6FF] py-4">
        <GlukaiImage variant="chat" alt="Glukai sonriendo" className="mx-auto h-28 w-28" />
      </div>

      <nav className="mt-5 flex flex-1 flex-col gap-1.5" aria-label="Navegacion principal">
        {items.map(([label, href, icon]) => {
          const active = label === 'Hablar con Glukai'
          return (
            <a
              key={label}
              href={href}
              className={`flex items-center gap-4 rounded-[20px] px-4 py-3.5 text-[15px] font-extrabold transition hover:bg-[#E9F6FF] ${
                active ? 'bg-[#E9F6FF] text-[#1677FF]' : 'text-[#6A7C96]'
              }`}
            >
              <Icon name={icon} className="h-5 w-5" />
              <span>{label}</span>
            </a>
          )
        })}
      </nav>

      <div className="rounded-[24px] bg-white p-4 shadow-[0_12px_30px_rgba(22,119,255,0.08)] ring-1 ring-sky-100">
        <p className="font-extrabold text-[#102A56]">¡Vamos increible!</p>
        <p className="mt-1 text-sm font-bold text-[#7B8CA6]">5 dias de racha 🔥</p>
        <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-[#DDEFFF]">
          <div className="h-full w-[72%] rounded-full bg-[#45D4E8]" />
        </div>
        <div className="mt-4 flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-2xl bg-[#FFF6DC] text-lg">⭐</div>
          <div>
            <p className="font-extrabold text-[#102A56]">320</p>
            <p className="text-xs font-bold text-[#7B8CA6]">Estrellas totales</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
