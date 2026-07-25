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
    <section className="rounded-[24px] bg-[#F6F2FF] p-7 shadow-sm ring-1 ring-violet-100">
      <p className="text-lg font-extrabold text-[#102A56]">Hoy te sientes:</p>
      <div className="mt-5 flex items-center gap-5">
        <span className="text-6xl" aria-hidden="true">{emotionEmoji[emotion]}</span>
        <div>
          <h2 className="text-2xl font-extrabold text-[#5B3BC5]">{emotion}</h2>
        </div>
      </div>
      <p className="mt-4 text-base font-bold text-[#102A56]">Gracias por compartir como te sientes.</p>
      <button
        onClick={() => onChange(emotions[(currentIndex + 1) % emotions.length])}
        className="mt-4 rounded-2xl bg-white px-4 py-2.5 text-sm font-extrabold text-[#1677FF] shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#D9CCFF]"
      >
        Cambiar emocion
      </button>
    </section>
  )
}
