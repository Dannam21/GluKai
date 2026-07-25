import { useState, useRef, useEffect } from 'react'
import Mascota from './Mascota'
import { preguntarAKai } from './api'
import { hablar, escuchar } from './useVoz'
import { Mood, Mensaje } from './types'

export default function App() {
  const [mensajes, setMensajes] = useState<Mensaje[]>([
    { autor: 'kai', texto: '¡Hola! Soy Kai. ¿Cómo te sientes hoy?' },
  ])
  const [texto, setTexto] = useState('')
  const [mood, setMood] = useState<Mood>('idle')
  const [pensando, setPensando] = useState(false)
  const finRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    finRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [mensajes, pensando])

  // Decide la reaccion de la mascota segun lo que responde Kai.
  function reaccionar(respuesta: string) {
    const r = respuesta.toLowerCase()
    if (/bien|genial|felicit|orgullos|campe|valiente/.test(r)) {
      setMood('celebra')
    } else if (/miedo|triste|dolor|preocup|pena/.test(r)) {
      setMood('preocupa')
    }
    setTimeout(() => setMood('idle'), 1000)
  }

  async function enviar(mensajeTexto?: string) {
    const msg = (mensajeTexto ?? texto).trim()
    if (!msg || pensando) return
    setMensajes((prev) => [...prev, { autor: 'nino', texto: msg }])
    setTexto('')
    setPensando(true)
    try {
      const respuesta = await preguntarAKai(msg)
      setMensajes((prev) => [...prev, { autor: 'kai', texto: respuesta }])
      reaccionar(respuesta)
      hablar(respuesta)
    } catch {
      setMensajes((prev) => [
        ...prev,
        { autor: 'kai', texto: 'Uy, no me pude conectar 😅 ¿El servidor está corriendo?' },
      ])
    } finally {
      setPensando(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-6">
      <div className="text-center mb-2">
        <h1 className="text-3xl font-bold text-teal-dark">GluKai</h1>
        <p className="text-teal-dark/70 text-sm">tu amigo valiente</p>
      </div>

      <Mascota mood={mood} />

      <div className="bg-white w-full max-w-md rounded-3xl p-4 shadow-xl mt-4">
        <div className="h-72 overflow-y-auto flex flex-col gap-2 p-2">
          {mensajes.map((m, i) => (
            <div
              key={i}
              className={`px-4 py-2 rounded-2xl max-w-[80%] leading-snug ${
                m.autor === 'kai'
                  ? 'bg-teal-light text-teal-dark self-start rounded-bl-sm'
                  : 'bg-blue-500 text-white self-end rounded-br-sm'
              }`}
            >
              {m.texto}
            </div>
          ))}
          {pensando && (
            <div className="px-4 py-2 rounded-2xl bg-teal-light text-gray-500 italic self-start">
              Kai está pensando...
            </div>
          )}
          <div ref={finRef} />
        </div>

        <div className="flex gap-2 mt-3">
          <input
            value={texto}
            onChange={(e) => setTexto(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && enviar()}
            placeholder="Escríbele a Kai..."
            className="flex-1 px-4 py-3 border-2 border-teal-light rounded-2xl outline-none focus:border-teal"
          />
          <button
            onClick={() => escuchar((t) => enviar(t))}
            className="bg-pink-500 text-white px-4 rounded-2xl active:scale-95"
            aria-label="Hablar"
          >
            🎤
          </button>
          <button
            onClick={() => enviar()}
            className="bg-teal text-white px-4 rounded-2xl font-semibold active:scale-95"
            aria-label="Enviar"
          >
            ➤
          </button>
        </div>
      </div>
    </div>
  )
}
