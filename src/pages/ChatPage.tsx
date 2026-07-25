import { useRef, useState } from 'react'
import { BottomNav } from '../components/chat/BottomNav'
import { BreathingModal } from '../components/chat/BreathingModal'
import { ChatHeader } from '../components/chat/ChatHeader'
import { ChatHero } from '../components/chat/ChatHero'
import { ChatInput } from '../components/chat/ChatInput'
import { ChatMessage } from '../components/chat/ChatMessage'
import { HistoryDrawer } from '../components/chat/HistoryDrawer'
import { RightPanel } from '../components/chat/RightPanel'
import { Sidebar } from '../components/chat/Sidebar'
import { ChatMessage as Message, Emotion, initialMessages, suggestedActions } from '../data/chatMock'
import { SuggestedAction } from '../components/chat/SuggestedAction'

function currentTime() {
  return new Intl.DateTimeFormat('es-CO', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date())
}

export function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState('')
  const [isThinking, setIsThinking] = useState(false)
  const [emotion, setEmotion] = useState<Emotion>('Preocupado')
  const [showBreathing, setShowBreathing] = useState(false)
  const [showHistory, setShowHistory] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  function addGlukaiResponse(text: string) {
    setIsThinking(true)
    window.setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          id: Date.now() + 1,
          author: 'glukai',
          text,
          time: currentTime(),
        },
      ])
      setIsThinking(false)
    }, 800)
  }

  function sendMessage(text = input) {
    const cleanText = text.trim()
    if (!cleanText || isThinking) return
    setMessages((prev) => [
      ...prev,
      {
        id: Date.now(),
        author: 'child',
        text: cleanText,
        time: currentTime(),
      },
    ])
    setInput('')
    addGlukaiResponse('Te escucho, Mateo. Podemos ir paso a paso y elegir algo pequeno para sentirte mas seguro ahora. ¿Quieres respirar conmigo o contarme que parte te preocupa mas?')
  }

  function handleAction(id: string) {
    if (id === 'breathing') {
      setShowBreathing(true)
      return
    }

    if (id === 'sensor') {
      addGlukaiResponse('Un sensor ayuda a conocer tu glucosa durante el dia. Cambiarlo puede dar nervios, pero un adulto puede acompanarte, preparar todo con calma y explicarte cada paso antes de empezar.')
      return
    }

    if (id === 'mission') {
      window.history.pushState({}, '', '/missions')
      window.dispatchEvent(new PopStateEvent('popstate'))
      return
    }

    inputRef.current?.focus()
  }

  return (
    <div className="min-h-screen bg-[#F8FCFF] font-sans text-[#102A56]">
      <div className="flex min-h-screen overflow-hidden rounded-none border-sky-100 bg-white/70 shadow-none lg:m-3 lg:min-h-[calc(100vh-24px)] lg:rounded-[28px] lg:border">
        <Sidebar />
        <main className="flex min-w-0 flex-1 flex-col px-4 pb-28 pt-5 sm:px-6 lg:pb-6 xl:px-6">
          <ChatHeader onHistoryClick={() => setShowHistory(true)} />

          <div className="mt-6 grid flex-1 gap-6 xl:grid-cols-[minmax(0,1fr)_420px]">
            <section className="min-w-0">
              <div className="relative overflow-hidden rounded-[30px] bg-[#EAF7FF] p-5 shadow-[0_18px_45px_rgba(22,119,255,0.06)] md:p-7">
                <div className="pointer-events-none absolute right-10 top-16 text-3xl text-[#9DD5FF]">♥</div>
                <div className="pointer-events-none absolute right-28 top-28 text-xl text-[#9DD5FF]">♥</div>
                <div className="pointer-events-none absolute left-6 bottom-5 text-lg text-[#B9A4FF]">✦</div>
                <div className="pointer-events-none absolute right-12 bottom-8 text-lg text-[#FFC857]">✦</div>
                <ChatHero />

                <div className="-mt-20 space-y-5 md:-mt-24">
                  {messages.map((message) => (
                    <ChatMessage key={message.id} message={message} />
                  ))}
                  {isThinking && (
                    <div className="w-fit rounded-[22px] bg-white px-5 py-3 text-sm font-extrabold text-[#7B8CA6] shadow-sm ring-1 ring-sky-100">
                      Glukai esta pensando...
                    </div>
                  )}
                </div>
              </div>

              <section className="mt-7">
                <h2 className="text-center text-xl font-extrabold text-[#102A56]">¿Que te gustaria hacer?</h2>
                <div className="mt-3 grid gap-4 sm:grid-cols-2 2xl:grid-cols-4">
                  {suggestedActions.map((action) => (
                    <SuggestedAction key={action.id} action={action} onClick={() => handleAction(action.id)} />
                  ))}
                </div>
              </section>

              <div className="sticky bottom-4 mt-6">
                <ChatInput value={input} onChange={setInput} onSubmit={() => sendMessage()} disabled={isThinking} inputRef={inputRef} />
                <p className="mt-3 text-center text-xs font-bold text-[#7B8CA6]">🛡️ Glukai te escucha con respeto y cuida tu privacidad. Tus conversaciones son seguras.</p>
              </div>
            </section>

            <RightPanel emotion={emotion} onEmotionChange={setEmotion} onBreathingClick={() => setShowBreathing(true)} />
          </div>
        </main>
      </div>
      <BottomNav />
      {showBreathing && <BreathingModal onClose={() => setShowBreathing(false)} />}
      {showHistory && <HistoryDrawer onClose={() => setShowHistory(false)} />}
    </div>
  )
}
