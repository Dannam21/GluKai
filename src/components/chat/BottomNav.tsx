import { Icon } from './Icon'

const items = [
  ['Inicio', '/', 'home'],
  ['Misiones', '/missions', 'map'],
  ['Chat', '/chat', 'chat'],
  ['Mi plato', '/plate', 'plate'],
  ['Premios', '/rewards', 'star'],
] as const

export function BottomNav({ activePath = '/chat' }: { activePath?: string }) {
  return (
    <nav className="fixed inset-x-3 bottom-3 z-30 grid grid-cols-5 rounded-[26px] bg-white/95 p-2 shadow-[0_16px_40px_rgba(16,42,86,0.18)] ring-1 ring-sky-100 backdrop-blur lg:hidden" aria-label="Navegacion inferior">
      {items.map(([label, href, icon]) => {
        const active = href === activePath
        return (
          <a key={label} href={href} className={`flex flex-col items-center gap-1 rounded-2xl px-2 py-2 text-[11px] font-extrabold ${active ? 'bg-[#E9F6FF] text-[#1677FF]' : 'text-[#7B8CA6]'}`}>
            <Icon name={icon} className="h-5 w-5" />
            <span>{label}</span>
          </a>
        )
      })}
    </nav>
  )
}
