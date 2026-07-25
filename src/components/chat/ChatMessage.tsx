import { ChatMessage as Message } from '../../data/chatMock'
import { Icon } from './Icon'
import { GlukaiImage } from './GlukaiImage'

type Props = {
  message: Message
}

export function ChatMessage({ message }: Props) {
  const isChild = message.author === 'child'

  return (
    <article className={`flex items-end gap-3 ${isChild ? 'justify-end' : 'justify-start'}`}>
      {!isChild && (
        <span className="grid h-12 w-12 place-items-center rounded-full bg-[#E9F6FF] p-1">
          <GlukaiImage variant="chat" alt="Avatar de Glukai" className="h-10 w-10" />
        </span>
      )}
      <div className={`max-w-[82%] sm:max-w-[66%] ${isChild ? 'items-end' : 'items-start'} flex flex-col`}>
        <div className={`rounded-[22px] px-6 py-4 text-base font-bold leading-relaxed ${isChild ? 'rounded-br-md bg-[#DDF2FF] text-[#102A56] ring-1 ring-[#B9E2FF]' : 'rounded-bl-md bg-white text-[#102A56] shadow-[0_12px_28px_rgba(16,42,86,0.07)] ring-1 ring-sky-50'}`}>
          {message.text}
        </div>
        <div className="mt-2 flex items-center gap-1.5 text-xs font-extrabold text-[#8AA0BA]">
          <span>{message.time}</span>
          {isChild ? <Icon name="check" className="h-4 w-4 text-[#1677FF]" /> : <Icon name="heart" className="h-4 w-4 text-[#FF8FA8]" />}
        </div>
      </div>
      {isChild && <div className="grid h-12 w-12 place-items-center rounded-full bg-[#FFF6DC] text-2xl shadow-sm">👦🏽</div>}
    </article>
  )
}
