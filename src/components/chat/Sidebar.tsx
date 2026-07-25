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

type Props = {
  activePath?: string
}

export function Sidebar({ activePath = '/chat' }: Props) {
  return (
    <aside className="hidden h-screen w-[230px] shrink-0 flex-col border-r border-[#e6f1fb] bg-[linear-gradient(180deg,_#fbfdff_0%,_#f3f9ff_100%)] px-5 py-5 shadow-[14px_0_40px_rgba(22,119,255,0.05)] lg:flex">
      <div className="flex justify-start px-2">
        <div className="text-center">
          <p className="text-[34px] font-black tracking-[-0.04em] text-[#1b7ee7] drop-shadow-[0_3px_0_rgba(255,255,255,0.9)]">GluKai</p>
        </div>
      </div>

      <div className="mt-4 rounded-[30px] bg-[radial-gradient(circle_at_top,_#eef8ff_0%,_#dcf0ff_100%)] py-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]">
        <GlukaiImage variant="chat" alt="Glukai sonriendo" className="mx-auto h-28 w-28" />
      </div>

      <nav className="mt-5 flex flex-1 flex-col gap-2" aria-label="Navegacion principal">
        {items.map(([label, href, icon]) => {
          const active = href === activePath
          return (
            <a
              key={label}
              href={href}
              className={`flex items-center gap-4 rounded-[22px] px-4 py-3 text-[15px] font-extrabold transition hover:bg-[#edf6ff] ${
                active
                  ? 'bg-[linear-gradient(180deg,_#eaf5ff_0%,_#dfefff_100%)] text-[#1677FF] shadow-[0_12px_28px_rgba(22,119,255,0.08)] ring-1 ring-[#d4eaff]'
                  : 'text-[#1f3764]'
              }`}
            >
              <Icon name={icon} className={`h-5 w-5 ${active ? 'text-[#1677FF]' : 'text-[#1f3764]'}`} />
              <span className={label === 'Momento valiente' ? 'max-w-[110px] leading-tight' : ''}>{label}</span>
            </a>
          )
        })}
      </nav>

      <div className="rounded-[24px] bg-white/95 p-4 shadow-[0_12px_28px_rgba(22,119,255,0.08)] ring-1 ring-sky-100">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center overflow-hidden rounded-2xl bg-[#ebf7ff]">
            <GlukaiImage variant="chat" alt="Glukai mini" className="h-10 w-10" />
          </div>
          <div>
            <p className="text-[15px] font-extrabold text-[#102A56]">¡Vamos increible!</p>
            <p className="mt-0.5 text-xs font-bold text-[#7B8CA6]">5 dias de racha 🔥</p>
          </div>
        </div>
        <div className="mt-3 h-2.5 overflow-hidden rounded-full bg-[#DDEFFF]">
          <div className="h-full w-[72%] rounded-full bg-[#45D4E8]" />
        </div>
        <div className="mt-4 flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#FFF6DC] text-lg">⭐</div>
          <div>
            <p className="text-[16px] font-extrabold text-[#102A56]">320</p>
            <p className="text-xs font-bold text-[#7B8CA6]">Estrellas totales</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
