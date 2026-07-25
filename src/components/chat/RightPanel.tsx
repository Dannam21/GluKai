import { Emotion } from '../../data/chatMock'
import { AdviceCard } from './AdviceCard'
import { EmotionCard } from './EmotionCard'
import { GlukaiImage } from './GlukaiImage'
import { MemoryCard } from './MemoryCard'
import { ToolsCard } from './ToolsCard'

type Props = {
  emotion: Emotion
  onEmotionChange: (emotion: Emotion) => void
  onBreathingClick: () => void
}

export function RightPanel({ emotion, onEmotionChange, onBreathingClick }: Props) {
  return (
    <aside className="w-full shrink-0 space-y-4 xl:w-[330px] 2xl:w-[350px]">
      <section className="grid grid-cols-[minmax(0,1fr)_76px] gap-3">
        <div className="rounded-[22px] bg-white/95 px-4 py-3 shadow-[0_14px_32px_rgba(16,42,86,0.07)] ring-1 ring-sky-100">
          <p className="text-xs font-extrabold text-[#7B8CA6]">🔥 Racha</p>
          <p className="text-xl font-extrabold text-[#102A56]">5 dias</p>
        </div>
        <div className="relative grid place-items-center rounded-[22px] bg-white/95 p-2.5 shadow-[0_14px_32px_rgba(16,42,86,0.07)] ring-1 ring-sky-100">
          <GlukaiImage variant="chat" alt="Glukai disponible" className="h-12 w-12" />
          <span className="absolute bottom-3 right-3 h-3 w-3 rounded-full border-2 border-white bg-[#35D07F]" aria-label="Disponible" />
        </div>
      </section>
      <EmotionCard emotion={emotion} onChange={onEmotionChange} />
      <MemoryCard />
      <ToolsCard onBreathingClick={onBreathingClick} />
      <AdviceCard />
      <section className="flex items-end gap-2 px-1 pb-3">
        <GlukaiImage variant="sleeping" alt="Glukai descansando" className="h-20 w-20" />
        <div className="rounded-[22px] rounded-bl-md bg-white px-4 py-3 text-sm font-extrabold leading-snug text-[#102A56] shadow-sm ring-1 ring-sky-100">
          ¡No estas solo, yo estoy contigo siempre!
        </div>
      </section>
    </aside>
  )
}
