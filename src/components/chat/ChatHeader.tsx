import { Icon } from './Icon'

export function ChatHeader() {
  return (
    <header className="flex items-center gap-3">
      <div className="flex items-center gap-3">
        <button className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/95 text-[#1677FF] shadow-[0_12px_28px_rgba(16,42,86,0.06)] ring-1 ring-sky-100 transition hover:-translate-x-0.5" aria-label="Volver">
          <Icon name="arrowLeft" className="h-4.5 w-4.5" />
        </button>
        <div>
          <h1 className="text-[1.9rem] font-extrabold leading-tight text-[#102A56] md:text-[2rem]">Hablar con Glukai 💗</h1>
          <p className="mt-0.5 text-xs font-bold text-[#6F829E] md:text-sm">Estoy aqui para escucharte y ayudarte 💙</p>
        </div>
      </div>
    </header>
  )
}
