import { Emotion, emotions } from '../../data/chatMock'

const emotionEmoji: Record<Emotion, string> = {
  Feliz: '😊',
  Tranquilo: '😌',
  Normal: '🙂',
  Preocupado: '😟',
  Triste: '😢',
  'Tengo miedo': '😨',
}

type Props = {
  emotion: Emotion
  onChange: (emotion: Emotion) => void
}

export function EmotionCard({ emotion, onChange }: Props) {
  const currentIndex = emotions.indexOf(emotion)

  return (
    <section className="rounded-[24px] bg-[linear-gradient(180deg,_#ffffff_0%,_#f8f7ff_100%)] p-5 shadow-[0_14px_32px_rgba(16,42,86,0.07)] ring-1 ring-[#eceafd]">
      <p className="text-base font-extrabold text-[#102A56]">Hoy te sientes:</p>
      <div className="mt-4 flex items-center gap-4">
        <span className="text-5xl" aria-hidden="true">{emotionEmoji[emotion]}</span>
        <div>
          <h2 className="text-xl font-extrabold text-[#5B3BC5]">{emotion}</h2>
        </div>
      </div>
      <p className="mt-3 text-sm font-bold text-[#102A56]">Gracias por compartir como te sientes.</p>
      <button
        onClick={() => onChange(emotions[(currentIndex + 1) % emotions.length])}
        className="mt-4 rounded-2xl bg-white px-4 py-2.5 text-xs font-extrabold text-[#1677FF] shadow-sm ring-1 ring-sky-100 transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#D9CCFF]"
      >
        Cambiar emocion
      </button>
    </section>
  )
}
