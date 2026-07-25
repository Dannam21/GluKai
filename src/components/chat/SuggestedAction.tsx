import { SuggestedActionItem } from '../../data/chatMock'
import { GlukaiImage } from './GlukaiImage'

type Props = {
  action: SuggestedActionItem
  onClick: () => void
}

export function SuggestedAction({ action, onClick }: Props) {
  const variantByAction = {
    breathing: 'breathing',
    sensor: 'learning',
    mission: 'playing',
    continue: 'chat',
  } as const

  return (
    <button
      onClick={onClick}
      className={`${action.tone} group min-h-[170px] rounded-[20px] p-4 text-center shadow-[0_12px_28px_rgba(16,42,86,0.06)] ring-1 ring-white/80 transition duration-200 hover:-translate-y-[3px] hover:shadow-[0_16px_34px_rgba(16,42,86,0.1)] focus:outline-none focus:ring-4 focus:ring-[#BFE7FF]`}
    >
      <GlukaiImage variant={variantByAction[action.id]} className="mx-auto h-20 w-20 transition duration-200 group-hover:scale-105" />
      <p className="mt-2 text-base font-extrabold leading-tight text-[#102A56]">{action.title}</p>
      <p className="mt-1 text-sm font-bold leading-snug text-[#6F829E]">{action.subtitle}</p>
    </button>
  )
}
