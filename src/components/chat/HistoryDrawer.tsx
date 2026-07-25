import { previousChats } from '../../data/chatMock'
import { Icon } from './Icon'

export function HistoryDrawer({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-40 bg-[#102A56]/20 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="history-title">
      <aside className="ml-auto h-full w-full max-w-md bg-white p-5 shadow-2xl">
        <div className="flex items-center justify-between">
          <h2 id="history-title" className="text-2xl font-extrabold text-[#102A56]">Historial de chats</h2>
          <button onClick={onClose} className="grid h-10 w-10 place-items-center rounded-full bg-[#F8FCFF] text-[#102A56] focus:outline-none focus:ring-4 focus:ring-[#BFE7FF]" aria-label="Cerrar historial">
            <Icon name="close" className="h-5 w-5" />
          </button>
        </div>
        <div className="mt-6 space-y-3">
          {previousChats.map((chat) => (
            <button key={chat.id} className="w-full rounded-[24px] bg-[#F8FCFF] p-4 text-left ring-1 ring-sky-100 transition hover:-translate-y-0.5 hover:bg-[#E9F6FF] focus:outline-none focus:ring-4 focus:ring-[#BFE7FF]">
              <p className="font-extrabold text-[#102A56]">{chat.title}</p>
              <p className="mt-1 text-sm font-bold text-[#6F829E]">{chat.preview}</p>
              <p className="mt-3 text-xs font-extrabold text-[#9AAEC4]">{chat.date}</p>
            </button>
          ))}
        </div>
      </aside>
    </div>
  )
}
