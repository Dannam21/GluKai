import { Icon } from '../chat/Icon'

type Props = {
  icon: 'user' | 'mail' | 'lock'
  placeholder: string
  type?: string
}

export function AuthInput({ icon, placeholder, type = 'text' }: Props) {
  return (
    <label className="flex h-14 items-center gap-4 rounded-2xl border border-[#D6E0EE] bg-white px-5 shadow-[0_8px_20px_rgba(16,42,86,0.04)] transition focus-within:border-[#1677FF] focus-within:shadow-[0_12px_26px_rgba(22,119,255,0.10)] focus-within:ring-4 focus-within:ring-[#BFE7FF]">
      <span className="grid h-8 w-8 place-items-center rounded-xl bg-[#F3F8FF]">
        <Icon name={icon} className="h-4 w-4 text-[#1677FF]" />
      </span>
      <input type={type} placeholder={placeholder} className="min-w-0 flex-1 bg-transparent text-sm font-bold text-[#102A56] outline-none placeholder:text-[#8498B5]" />
      {type === 'password' && <Icon name="eyeOff" className="h-5 w-5 text-[#8498B5]" />}
    </label>
  )
}
