import { Mood } from './types'

interface Props {
  mood: Mood
}

// La mascota Kai. Las animaciones son CSS puro (definidas en tailwind.config.js).
// Cambiamos la clase de animacion segun el estado de animo.
export default function Mascota({ mood }: Props) {
  const animacion =
    mood === 'celebra'
      ? 'animate-celebra'
      : mood === 'preocupa'
      ? 'animate-preocupa'
      : 'animate-respira'

  return (
    <img
      src="/mascota.png"
      alt="Kai el zorrito"
      className={`w-48 h-48 object-contain select-none pointer-events-none ${animacion}`}
    />
  )
}
