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
] as const

type Props = {
  activePath?: string
}

export function Sidebar({ activePath = '/chat' }: Props) {
  return (
    <aside className="hidden h-full w-[220px] shrink-0 flex-col overflow-hidden border-r border-[#E8F1FB] bg-white lg:flex">
      {/* Logo */}
      <div className="flex justify-center px-5 pt-6 pb-4">
        <img src="/logo.png" alt="GluKai" className="h-12 w-auto object-contain" />
      </div>

      {/* Nav */}
      <nav className="mt-3 flex flex-1 flex-col gap-0.5 overflow-y-auto overscroll-contain px-3" aria-label="Navegación principal">
        {items.map(([label, href, icon]) => {
          const active = href === activePath
          return (
            <a
              key={label}
              href={href}
              className={`flex items-center gap-3 rounded-[14px] px-3 py-2.5 text-[13.5px] font-bold transition-all ${
                active
                  ? 'bg-[#EEF5FF] text-[#1677FF] font-extrabold shadow-sm ring-1 ring-[#D4E8FF]'
                  : 'text-[#3A5278] hover:bg-[#F4F8FE] hover:text-[#1677FF]'
              }`}
            >
              <Icon
                name={icon}
                className={`h-[18px] w-[18px] shrink-0 ${active ? 'text-[#1677FF]' : 'text-[#6B88AF]'}`}
              />
              <span className={label === 'Momento valiente' ? 'leading-tight' : ''}>{label}</span>
            </a>
          )
        })}
      </nav>

      {/* Bottom stats card */}
      <div className="mx-3 mb-4 mt-3 rounded-[18px] bg-[#F4F9FF] p-4 ring-1 ring-[#DDE9F8]">
        <div className="flex items-center gap-2.5">
          <div className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-[10px] bg-white shadow-sm ring-1 ring-[#DDE9F8]">
            <GlukaiImage variant="chat" alt="" className="h-8 w-8" />
          </div>
          <div className="min-w-0">
            <p className="text-[13px] font-extrabold text-[#102A56]">¡Vamos increíble!</p>
            <p className="text-[11px] font-bold text-[#6B88AF]">5 días de racha 🔥</p>
          </div>
        </div>
        <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#DDE9F8]">
          <div className="h-full w-[72%] rounded-full bg-[linear-gradient(90deg,_#45D4E8,_#1677FF)]" />
        </div>
        <div className="mt-3 flex items-center gap-2.5">
          <div className="grid h-8 w-8 shrink-0 place-items-center rounded-[10px] bg-[#FFF6DC] text-base">⭐</div>
          <div>
            <p className="text-[14px] font-extrabold leading-none text-[#102A56]">320</p>
            <p className="text-[11px] font-bold text-[#6B88AF]">Estrellas totales</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
