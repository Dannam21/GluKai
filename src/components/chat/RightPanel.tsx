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
    <aside className="w-full shrink-0 space-y-5 xl:w-[420px]">
      <section className="flex items-center justify-between rounded-[28px] bg-white p-5 shadow-sm ring-1 ring-sky-100">
        <div>
          <p className="text-sm font-extrabold text-[#7B8CA6]">🔥 Racha</p>
          <p className="text-2xl font-extrabold text-[#102A56]">5 dias</p>
        </div>
        <div className="relative rounded-3xl bg-[#E9F6FF] p-2">
          <GlukaiImage variant="chat" alt="Glukai disponible" className="h-16 w-16" />
          <span className="absolute bottom-3 right-3 h-3.5 w-3.5 rounded-full border-2 border-white bg-[#35D07F]" aria-label="Disponible" />
        </div>
      </section>
      <EmotionCard emotion={emotion} onChange={onEmotionChange} />
      <MemoryCard />
      <ToolsCard onBreathingClick={onBreathingClick} />
      <AdviceCard />
      <section className="flex items-end gap-3 px-2 pb-5">
        <GlukaiImage variant="sleeping" alt="Glukai descansando" className="h-24 w-24" />
        <div className="rounded-[24px] rounded-bl-md bg-white px-4 py-3 text-sm font-extrabold leading-snug text-[#102A56] shadow-sm ring-1 ring-sky-100">
          ¡No estas solo, yo estoy contigo siempre!
        </div>
      </section>
    </aside>
  )
}
