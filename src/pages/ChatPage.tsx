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
import { hablar } from '../useVoz'

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
const thinkingFrames = ['/pensando/image.png', '/pensando/image2.png', '/pensando/image3.png']

type SpeechRecognitionResultLike = {
  transcript: string
}

type SpeechRecognitionEventLike = {
  results: ArrayLike<ArrayLike<SpeechRecognitionResultLike>>
}

type SpeechRecognitionErrorEventLike = {
  error: string
}

type SpeechRecognitionLike = {
  lang: string
  interimResults: boolean
  maxAlternatives: number
  onstart: null | (() => void)
  onend: null | (() => void)
  onerror: null | ((event: SpeechRecognitionErrorEventLike) => void)
  onresult: null | ((event: SpeechRecognitionEventLike) => void)
  start: () => void
  stop: () => void
}

export function ChatPage() {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState('')
  const [isThinking, setIsThinking] = useState(false)
  const [isImmersive, setIsImmersive] = useState(() => initialMessages.some((message) => message.author === 'child'))
  const [isKaiTalking, setIsKaiTalking] = useState(false)
  const [talkingFrameIndex, setTalkingFrameIndex] = useState(0)
  const [thinkingFrameIndex, setThinkingFrameIndex] = useState(0)
  const [isListening, setIsListening] = useState(false)
  const [streamingMessage, setStreamingMessage] = useState<Message | null>(null)
  const [emotion, setEmotion] = useState<Emotion>('Preocupado')
  const [showBreathing, setShowBreathing] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const timeoutsRef = useRef<number[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const recognitionRef = useRef<SpeechRecognitionLike | null>(null)

  useEffect(() => {
    return () => {
      timeoutsRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId))
      timeoutsRef.current = []
    }
  }, [])

  // Leer saludo de Kai proveniente del selector de emociones
  useEffect(() => {
    const greeting = sessionStorage.getItem('kai_greeting')
    if (!greeting) return
    sessionStorage.removeItem('kai_greeting')
    const msg: Message = {
      id: Date.now(),
      author: 'glukai',
      text: greeting,
      time: new Intl.DateTimeFormat('es-CO', { hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date()),
    }
    setMessages([msg])
    setIsImmersive(true)
    hablar(greeting)
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

  useEffect(() => {
    if (!isThinking) {
      setThinkingFrameIndex(0)
      return
    }
    const timer = window.setInterval(() => {
      setThinkingFrameIndex((current) => (current + 1) % thinkingFrames.length)
    }, 300)
    return () => window.clearInterval(timer)
  }, [isThinking])

  function handleMicClick() {
    const speechWindow = window as typeof window & {
      SpeechRecognition?: new () => SpeechRecognitionLike
      webkitSpeechRecognition?: new () => SpeechRecognitionLike
    }
    const SR = speechWindow.SpeechRecognition ?? speechWindow.webkitSpeechRecognition

    if (!SR) {
      console.warn('Tu navegador no soporta reconocimiento de voz.')
      return
    }

    if (isListening) {
      recognitionRef.current?.stop()
      return
    }

    const recognition = new SR()
    recognition.lang = 'es-ES'
    recognition.interimResults = false
    recognition.maxAlternatives = 1

    recognition.onstart = () => setIsListening(true)
    recognition.onend = () => setIsListening(false)
    recognition.onerror = (event: SpeechRecognitionErrorEventLike) => {
      if (event.error !== 'no-speech') console.error('Error de micrófono:', event.error)
      setIsListening(false)
    }
    recognition.onresult = (event: SpeechRecognitionEventLike) => {
      const transcript = event.results[0][0].transcript.trim()
      if (transcript) sendMessage(transcript)
    }

    recognitionRef.current = recognition
    recognition.start()
  }

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
    hablar(fullText)

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
          className={`relative mx-auto flex h-full min-w-0 flex-1 flex-col px-3 pb-2 pt-3 transition-all duration-500 sm:px-4 lg:pb-2 xl:px-5 ${
            isImmersive ? 'max-w-[900px] overflow-hidden' : 'max-w-[1440px] overflow-x-hidden overflow-y-auto overscroll-contain'
          }`}
        >
          <div
            className={`overflow-hidden transition-all duration-500 ${
              isImmersive ? 'max-h-0 -translate-y-4 opacity-0' : 'max-h-40 translate-y-0 opacity-100'
            }`}
          >
            <ChatHeader />
          </div>

          <div className={`mt-2 grid min-h-0 flex-1 items-stretch gap-4 transition-all duration-500 ${isImmersive ? 'grid-cols-1 overflow-hidden' : 'xl:grid-cols-[minmax(0,1fr)_292px] 2xl:grid-cols-[minmax(0,1fr)_312px]'}`}>
            <section className={`flex min-h-0 min-w-0 flex-col pr-1 transition-all duration-500 ${isImmersive ? 'mx-auto h-full w-full max-w-[800px] overflow-hidden' : 'w-full'}`}>
              <div className={`relative flex flex-col overflow-hidden border border-white/80 bg-[linear-gradient(180deg,_#edf8ff_0%,_#ffffff_82%)] shadow-[0_18px_48px_rgba(22,119,255,0.08)] transition-all duration-500 ${isImmersive ? 'min-h-0 flex-1 h-full w-full max-w-[800px] rounded-[34px] px-5 py-4 md:px-8' : 'rounded-[28px] p-3.5 md:p-4'}`}>
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
                  className={`flex shrink-0 flex-col items-center transition-all duration-500 ${
                    isImmersive ? 'mb-3 max-h-[260px] translate-y-0 py-2 opacity-100' : 'max-h-0 overflow-hidden opacity-0 -translate-y-4'
                  }`}
                >
                  <div className="relative flex h-[150px] w-[110px] shrink-0 items-end justify-center md:h-[168px] md:w-[124px]">
                    <div className="absolute bottom-0 left-1/2 h-5 w-32 -translate-x-1/2 rounded-full bg-[#8acbff]/25 blur-lg" />
                    {isKaiTalking ? (
                      <img
                        src={talkingFrames[talkingFrameIndex]}
                        alt="Kai hablando"
                        className="relative h-full w-auto object-contain drop-shadow-md"
                      />
                    ) : isThinking ? (
                      <img
                        src={thinkingFrames[thinkingFrameIndex]}
                        alt="Kai pensando"
                        className="relative h-full w-auto object-contain drop-shadow-md"
                      />
                    ) : (
                      <img
                        src="/glukai/glukai-main.png"
                        alt="Kai conversando"
                        className="relative h-full w-auto object-contain drop-shadow-md"
                      />
                    )}
                  </div>
                  <p className="mt-4 text-center text-base font-extrabold text-[#102A56]">Kai está contigo</p>
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
                <ChatInput value={input} onChange={setInput} onSubmit={() => sendMessage()} disabled={isThinking} inputRef={inputRef} isListening={isListening} onMicClick={handleMicClick} />
                {!isImmersive && <p className="mt-2 text-center text-[11px] font-bold text-[#7B8CA6]">🛡️ Glukai te escucha con respeto y cuida tu privacidad. Tus conversaciones son seguras.</p>}
              </div>
            </section>

            {!isImmersive && (
              <div className="transition-all duration-500">
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
