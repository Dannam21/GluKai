import { FormEvent } from 'react'
import { Icon } from './Icon'

type Props = {
  value: string
  disabled?: boolean
  inputRef: React.RefObject<HTMLInputElement>
  onChange: (value: string) => void
  onSubmit: () => void
}

export function ChatInput({ value, disabled, inputRef, onChange, onSubmit }: Props) {
  function submit(event: FormEvent) {
    event.preventDefault()
    onSubmit()
  }

  return (
    <form onSubmit={submit} className="rounded-[30px] bg-white/95 p-2.5 shadow-[0_18px_42px_rgba(16,42,86,0.1)] ring-1 ring-sky-100 transition focus-within:scale-[1.01] focus-within:ring-[#BFE7FF]">
      <div className="flex items-center gap-2">
        <button type="button" className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-sky-100 bg-[#f8fbff] text-[#102A56] transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#D9CCFF]" aria-label="Usar microfono">
          <Icon name="mic" className="h-5 w-5" />
        </button>
        <input
          ref={inputRef}
          value={value}
          onChange={(event) => onChange(event.target.value)}
          placeholder="Escribe tu mensaje..."
          className="min-w-0 flex-1 bg-transparent px-2 py-3 text-base font-bold text-[#102A56] outline-none placeholder:text-[#9AAEC4]"
          disabled={disabled}
        />
        <button type="submit" disabled={disabled || !value.trim()} className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[linear-gradient(180deg,_#2f89ff_0%,_#166fff_100%)] text-white shadow-[0_10px_24px_rgba(22,119,255,0.35)] transition hover:scale-105 focus:outline-none focus:ring-4 focus:ring-[#BFE7FF] disabled:cursor-not-allowed disabled:opacity-50" aria-label="Enviar mensaje">
          <Icon name="send" className="h-5 w-5" />
        </button>
      </div>
    </form>
  )
}
