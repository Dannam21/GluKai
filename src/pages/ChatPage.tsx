import { useEffect, useMemo, useRef, useState } from 'react'
import { BottomNav } from '../components/chat/BottomNav'
import { BreathingModal } from '../components/chat/BreathingModal'
import { ChatHeader } from '../components/chat/ChatHeader'
import { ChatHero } from '../components/chat/ChatHero'
import { Icon } from '../components/chat/Icon'
import { ChatInput } from '../components/chat/ChatInput'
import { ChatMessage } from '../components/chat/ChatMessage'
import { GlukaiImage } from '../components/chat/GlukaiImage'
import { RightPanel } from '../components/chat/RightPanel'
import { Sidebar } from '../components/chat/Sidebar'
import { ChatMessage as Message, Emotion, initialMessages, suggestedActions } from '../data/chatMock'
import { SuggestedAction } from '../components/chat/SuggestedAction'
import { preguntarAKai } from '../api'

function currentTime() {
  return new Intl.DateTimeFormat('es-CO', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(new Date())
}

function getWordDelay(word: string) {
  if (/[.!?]$/.test(word)) return 240
  if (/[,;:]$/.test(word)) return 170
  return 95
}

const talkingFrames = ['/hablando/78.png', '/hablando/79.png', '/hablando/80.png', '/hablando/81.png']

export function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState('')
  const [isThinking, setIsThinking] = useState(false)
  const [isImmersive, setIsImmersive] = useState(() => initialMessages.some((message) => message.author === 'child'))
  const [isKaiTalking, setIsKaiTalking] = useState(false)
  const [talkingFrameIndex, setTalkingFrameIndex] = useState(0)
  const [streamingMessage, setStreamingMessage] = useState<Message | null>(null)
  const [emotion, setEmotion] = useState<Emotion>('Preocupado')
  const [showBreathing, setShowBreathing] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const timeoutsRef = useRef<number[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId))
      timeoutsRef.current = []
    }
  }, [])

  const renderedMessages = useMemo(
    () => (streamingMessage ? [...messages, streamingMessage] : messages),
    [messages, streamingMessage],
  )
  const hasStartedChat = renderedMessages.length > 0 || isThinking

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ block: 'end' })
  }, [renderedMessages, isThinking, isImmersive])

  useEffect(() => {
    if (!isKaiTalking) {
      setTalkingFrameIndex(0)
      return
    }

    const timer = window.setInterval(() => {
      setTalkingFrameIndex((current) => (current + 1) % talkingFrames.length)
    }, 140)

    return () => window.clearInterval(timer)
  }, [isKaiTalking])

  function wait(ms: number) {
    return new Promise<void>((resolve) => {
      const timeoutId = window.setTimeout(() => {
        timeoutsRef.current = timeoutsRef.current.filter((id) => id !== timeoutId)
        resolve()
      }, ms)
      timeoutsRef.current.push(timeoutId)
    })
  }

  async function streamKaiResponse(fullText: string) {
    const words = fullText.trim().split(/\s+/).filter(Boolean)
    const baseMessage: Message = {
      id: Date.now() + 1,
      author: 'glukai',
      text: '',
      time: currentTime(),
    }

    setStreamingMessage(baseMessage)
    setIsKaiTalking(true)

    let partialText = ''

    for (const word of words) {
      partialText = partialText ? `${partialText} ${word}` : word
      setStreamingMessage({ ...baseMessage, text: partialText })
      await wait(getWordDelay(word))
    }

    setMessages((prev) => [...prev, { ...baseMessage, text: fullText }])
    setStreamingMessage(null)
    setIsKaiTalking(false)
  }

  async function addGlukaiResponse(mensajeDelNino: string) {
    setIsThinking(true)
    try {
      const respuesta = await preguntarAKai(mensajeDelNino)
      await streamKaiResponse(respuesta)
      const r = respuesta.toLowerCase()
      if (/bien|genial|felicit|orgullos|campe|valiente/.test(r)) setEmotion('Feliz')
      else if (/miedo|triste|dolor|preocup|pena/.test(r)) setEmotion('Preocupado')
    } catch {
      await streamKaiResponse('Uy, no me pude conectar. ¿El servidor está corriendo? 😅')
    } finally {
      setIsThinking(false)
    }
  }

  function sendMessage(text = input) {
    const cleanText = text.trim()
    if (!cleanText || isThinking) return
    if (!isImmersive) setIsImmersive(true)
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
    addGlukaiResponse(cleanText)
  }

  function handleAction(id: string) {
    if (!isImmersive) setIsImmersive(true)

    if (id === 'breathing') {
      setShowBreathing(true)
      return
    }

    if (id === 'sensor') {
      addGlukaiResponse('¿Me explicas cómo funciona mi sensor de glucosa?')
      return
    }

    if (id === 'mission') {
      window.history.pushState({}, '', '/missions')
      window.dispatchEvent(new PopStateEvent('popstate'))
      return
    }

    if (id === 'continue') {
      addGlukaiResponse('Quiero seguir hablando contigo')
      return
    }

    inputRef.current?.focus()
  }

  return (
    <div className="h-[100dvh] overflow-hidden bg-[radial-gradient(circle_at_top,_#ffffff_0%,_#f4fbff_40%,_#eef7ff_100%)] font-sans text-[#102A56]">
      <div className="relative flex h-full overflow-hidden rounded-none bg-white/75 lg:m-3 lg:h-[calc(100dvh-24px)] lg:rounded-[32px] lg:border lg:border-white/70 lg:shadow-[0_24px_90px_rgba(82,158,231,0.18)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(157,213,255,0.24),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(255,214,102,0.14),_transparent_24%)]" />
        <div
          className={`hidden overflow-hidden transition-all duration-500 lg:block ${
            isImmersive ? 'w-0 -translate-x-6 opacity-0' : 'w-[230px] translate-x-0 opacity-100'
          }`}
        >
          <Sidebar />
        </div>
        <main
          className={`relative mx-auto flex h-full min-w-0 flex-1 flex-col overflow-hidden px-3 pb-2 pt-3 transition-all duration-500 sm:px-4 lg:pb-2 xl:px-5 ${
            isImmersive ? 'max-w-[900px]' : 'max-w-[1440px]'
          }`}
        >
          <div
            className={`overflow-hidden transition-all duration-500 ${
              isImmersive ? 'max-h-0 -translate-y-4 opacity-0' : 'max-h-40 translate-y-0 opacity-100'
            }`}
          >
            <ChatHeader />
          </div>

          <div className={`mt-2 grid min-h-0 flex-1 items-stretch gap-4 overflow-hidden transition-all duration-500 ${isImmersive ? 'grid-cols-1' : 'xl:grid-cols-[minmax(0,1fr)_292px] 2xl:grid-cols-[minmax(0,1fr)_312px]'}`}>
            <section className={`flex h-full min-h-0 min-w-0 flex-col pr-1 transition-all duration-500 ${isImmersive ? 'mx-auto w-full max-w-[800px] overflow-hidden' : 'overflow-y-auto overscroll-contain'}`}>
              <div className={`relative flex min-h-0 flex-1 flex-col overflow-hidden border border-white/80 bg-[linear-gradient(180deg,_#edf8ff_0%,_#ffffff_82%)] shadow-[0_18px_48px_rgba(22,119,255,0.08)] transition-all duration-500 ${isImmersive ? 'h-[800px] w-full max-w-[800px] rounded-[34px] px-5 py-4 md:px-8' : 'rounded-[28px] p-3.5 md:p-4'}`}>
                <div className="pointer-events-none absolute inset-x-10 top-0 h-20 rounded-b-[44px] bg-[radial-gradient(circle,_rgba(255,255,255,0.95)_0%,_rgba(255,255,255,0)_72%)]" />
                <div className="pointer-events-none absolute left-9 top-14 h-14 w-24 rounded-full bg-white/50 blur-xl" />
                <div className="pointer-events-none absolute right-10 top-16 text-3xl text-[#9DD5FF]">♥</div>
                <div className="pointer-events-none absolute right-28 top-28 text-xl text-[#9DD5FF]">♥</div>
                <div className="pointer-events-none absolute left-6 bottom-5 text-lg text-[#B9A4FF]">✦</div>
                <div className="pointer-events-none absolute right-12 bottom-8 text-lg text-[#FFC857]">✦</div>
                <div
                  className={`relative z-10 flex shrink-0 justify-end overflow-hidden transition-all duration-500 ${
                    isImmersive ? 'mb-3 max-h-16 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setIsImmersive(false)}
                    className="inline-flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-extrabold text-[#1677FF] shadow-[0_12px_28px_rgba(16,42,86,0.08)] ring-1 ring-sky-100 transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#BFE7FF]"
                  >
                    <Icon name="close" className="h-4 w-4" />
                    Salir del modo enfoque
                  </button>
                </div>
                <div
                  className={`shrink-0 overflow-hidden transition-all duration-500 ${
                    isImmersive ? 'max-h-0 -translate-y-4 opacity-0' : 'max-h-[420px] translate-y-0 opacity-100'
                  }`}
                >
                  <ChatHero />
                </div>

                <div
                  className={`flex shrink-0 flex-col items-center justify-center transition-all duration-500 ${
                    isImmersive ? 'mb-3 max-h-[180px] translate-y-0 px-2 pb-1 pt-1 opacity-100' : 'max-h-0 -translate-y-4 overflow-hidden opacity-0'
                  }`}
                >
                  <div className="relative flex h-[100px] items-end justify-center md:h-[120px]">
                    <div className="absolute bottom-1 left-1/2 h-7 w-36 -translate-x-1/2 rounded-full bg-[#8acbff]/20 blur-md" />
                    {isKaiTalking ? (
                      <img
                        src={talkingFrames[talkingFrameIndex]}
                        alt="Kai hablando"
                        className="relative h-24 w-24 object-contain object-bottom drop-shadow-sm md:h-28 md:w-28"
                      />
                    ) : (
                      <GlukaiImage
                        variant="main"
                        alt="Kai conversando"
                        className="relative h-24 w-24 md:h-28 md:w-28"
                      />
                    )}
                  </div>
                  <p className="mt-1.5 text-center text-base font-extrabold text-[#102A56]">Kai está contigo</p>
                  <p className="mt-1 text-center text-xs font-bold text-[#6F829E]">Escuchando y respondiendo paso a paso</p>
                </div>

                <div className={`min-h-0 flex-1 overflow-y-auto overscroll-contain pr-1 ${isImmersive ? 'space-y-4 pb-3' : '-mt-8 space-y-3.5 pb-2 md:-mt-12'} transition-all duration-500`}>
                  {renderedMessages.map((message) => (
                    <ChatMessage key={message.id} message={message} />
                  ))}
                  {isThinking && !streamingMessage && (
                    <div className="flex items-end gap-2.5">
                      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white p-1 shadow-[0_10px_24px_rgba(16,42,86,0.08)] ring-1 ring-sky-100">
                        <GlukaiImage variant="chat" alt="Avatar de Glukai" className="h-8 w-8" />
                      </span>
                      <div className="rounded-[20px] rounded-bl-[6px] bg-white px-5 py-3.5 shadow-[0_8px_24px_rgba(16,42,86,0.07)] ring-1 ring-sky-100/80">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2 w-2 animate-bounce rounded-full bg-[#9DD5FF]" style={{ animationDelay: '0ms' }} />
                          <span className="h-2 w-2 animate-bounce rounded-full bg-[#9DD5FF]" style={{ animationDelay: '160ms' }} />
                          <span className="h-2 w-2 animate-bounce rounded-full bg-[#9DD5FF]" style={{ animationDelay: '320ms' }} />
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </div>

              <div
                className={`overflow-hidden transition-all duration-500 ${
                  isImmersive || hasStartedChat ? 'max-h-0 translate-y-4 opacity-0' : 'max-h-[420px] translate-y-0 opacity-100'
                }`}
              >
                <section className="mt-4">
                  <h2 className="text-center text-[1.65rem] font-extrabold text-[#102A56]">¿Que te gustaria hacer?</h2>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                    {suggestedActions.map((action) => (
                      <SuggestedAction key={action.id} action={action} onClick={() => handleAction(action.id)} />
                    ))}
                  </div>
                </section>
              </div>

              <div className={`mt-3 shrink-0 ${isImmersive ? 'pb-0.5' : ''}`}>
                <ChatInput value={input} onChange={setInput} onSubmit={() => sendMessage()} disabled={isThinking} inputRef={inputRef} />
                {!isImmersive && <p className="mt-2 text-center text-[11px] font-bold text-[#7B8CA6]">🛡️ Glukai te escucha con respeto y cuida tu privacidad. Tus conversaciones son seguras.</p>}
              </div>
            </section>

            {!isImmersive && (
              <div className="min-h-0 overflow-y-auto transition-all duration-500">
                <RightPanel emotion={emotion} onEmotionChange={setEmotion} onBreathingClick={() => setShowBreathing(true)} />
              </div>
            )}
          </div>
        </main>
      </div>
      {!isImmersive && <BottomNav />}
      {showBreathing && <BreathingModal onClose={() => setShowBreathing(false)} />}
    </div>
  )
}
