import { useEffect, useState } from 'react'
import { Icon } from './Icon'

type HistoryMessage = {
  autor: 'nino' | 'kai'
  mensaje: string
}

export function HistoryDrawer({ onClose }: { onClose: () => void }) {
  const [messages, setMessages] = useState<HistoryMessage[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isActive = true

    async function loadHistory() {
      setIsLoading(true)
      setError('')

      try {
        const response = await fetch('http://localhost:5001/historial')
        if (!response.ok) throw new Error('No se pudo cargar el historial')

        const data = (await response.json()) as HistoryMessage[]
        if (!isActive) return
        setMessages(Array.isArray(data) ? data : [])
      } catch {
        if (!isActive) return
        setError('No pudimos cargar tu historial por ahora')
      } finally {
        if (isActive) setIsLoading(false)
      }
    }

    loadHistory()

    return () => {
      isActive = false
    }
  }, [])

  return (
    <div className="fixed inset-0 z-40 bg-[#102A56]/20 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="history-title">
      <button type="button" className="absolute inset-0 cursor-default" onClick={onClose} aria-label="Cerrar historial" />
      <aside className="relative ml-auto flex h-full w-full max-w-md flex-col bg-[linear-gradient(180deg,_#fbfdff_0%,_#f3f9ff_100%)] p-5 shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <h2 id="history-title" className="text-2xl font-extrabold text-[#102A56]">Historial de chats</h2>
            <p className="mt-1 text-sm font-bold text-[#6F829E]">Tus conversaciones con Kai</p>
          </div>
          <button
            onClick={onClose}
            className="grid h-10 w-10 place-items-center rounded-full bg-white text-[#102A56] shadow-sm ring-1 ring-sky-100 focus:outline-none focus:ring-4 focus:ring-[#BFE7FF]"
            aria-label="Cerrar historial"
          >
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 flex-1 overflow-y-auto pr-1">
          {isLoading && (
            <div className="rounded-[24px] bg-white/90 p-4 text-sm font-extrabold text-[#6F829E] shadow-sm ring-1 ring-sky-100">
              Cargando tu historial...
            </div>
          )}

          {!isLoading && error && (
            <div className="rounded-[24px] bg-[#fff4f4] p-4 text-sm font-extrabold text-[#b45454] shadow-sm ring-1 ring-[#ffd6d6]">
              {error}
            </div>
          )}

          {!isLoading && !error && messages.length === 0 && (
            <div className="rounded-[24px] bg-white/90 p-4 text-sm font-extrabold text-[#6F829E] shadow-sm ring-1 ring-sky-100">
              Aún no tienes conversaciones guardadas
            </div>
          )}

          {!isLoading && !error && messages.length > 0 && (
            <div className="space-y-3 pb-4">
              {messages.map((message, index) => {
                const isChild = message.autor === 'nino'

                return (
                  <article key={`${message.autor}-${index}`} className={`flex ${isChild ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[85%] rounded-[24px] px-4 py-3 shadow-sm ring-1 ${
                      isChild
                        ? 'rounded-br-md bg-[linear-gradient(180deg,_#dff3ff_0%,_#d4ecff_100%)] text-[#102A56] ring-[#b3dcff]'
                        : 'rounded-bl-md bg-white text-[#102A56] ring-sky-100'
                    }`}>
                      <p className="mb-1 text-[11px] font-extrabold uppercase tracking-[0.08em] text-[#7B8CA6]">
                        {isChild ? 'Niño' : 'Kai'}
                      </p>
                      <p className="text-sm font-bold leading-relaxed">{message.mensaje}</p>
                    </div>
                  </article>
                )
              })}
            </div>
          )}
        </div>
      </aside>
    </div>
  )
}
