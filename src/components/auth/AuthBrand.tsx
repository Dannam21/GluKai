import { GlukaiImage } from '../chat/GlukaiImage'

type Props = {
  compact?: boolean
}

export function AuthBrand({ compact = false }: Props) {
  return (
    <a href="/welcome" className="inline-flex items-center gap-3 rounded-2xl focus:outline-none focus:ring-4 focus:ring-[#BFE7FF]">
      <span className={`${compact ? 'h-12 w-12' : 'h-14 w-14'} grid place-items-center rounded-2xl bg-[#E9F6FF] shadow-sm`}>
        <GlukaiImage variant="chat" alt="Glukai" className={compact ? 'h-10 w-10' : 'h-12 w-12'} />
      </span>
      <span className={`${compact ? 'text-3xl' : 'text-4xl'} font-black leading-none text-[#1677FF] [text-shadow:0_3px_0_#D9F1FF]`}>
        GluKai
      </span>
    </a>
  )
}
