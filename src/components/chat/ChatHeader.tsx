import { Icon } from './Icon'

type Props = {
  onHistoryClick: () => void
}

export function ChatHeader({ onHistoryClick }: Props) {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-4">
        <button className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-white text-[#102A56] shadow-sm ring-1 ring-sky-100 transition hover:-translate-x-0.5" aria-label="Volver">
          <Icon name="arrowLeft" className="h-5 w-5" />
        </button>
        <div>
          <h1 className="text-3xl font-extrabold leading-tight text-[#102A56] md:text-4xl">Hablar con Glukai 💗</h1>
          <p className="mt-1 text-sm font-bold text-[#6F829E] md:text-base">Estoy aqui para escucharte y ayudarte 💙</p>
        </div>
      </div>
      <button
        onClick={onHistoryClick}
        className="inline-flex w-fit items-center gap-2 rounded-2xl bg-white px-4 py-3 text-sm font-extrabold text-[#102A56] shadow-sm ring-1 ring-sky-100 transition hover:-translate-y-0.5 hover:shadow-md focus:outline-none focus:ring-4 focus:ring-[#BFE7FF]"
      >
        <Icon name="clock" className="h-5 w-5 text-[#1677FF]" />
        Historial de chats
      </button>
    </header>
  )
}
