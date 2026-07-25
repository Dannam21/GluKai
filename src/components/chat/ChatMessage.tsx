import { ChatMessage as Message } from '../../data/chatMock'
import { Icon } from './Icon'
import { GlukaiImage } from './GlukaiImage'

type Props = {
  message: Message
}

export function ChatMessage({ message }: Props) {
  const isChild = message.author === 'child'

  return (
    <article className={`flex items-end gap-2.5 ${isChild ? 'justify-end pr-1' : 'justify-start'}`}>
      {!isChild && (
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white p-1 shadow-[0_10px_24px_rgba(16,42,86,0.08)] ring-1 ring-sky-100">
          <GlukaiImage variant="chat" alt="Avatar de Glukai" className="h-8 w-8" />
        </span>
      )}
      <div className={`max-w-[82%] sm:max-w-[68%] ${isChild ? 'items-end' : 'items-start'} flex flex-col`}>
        {!isChild && (
          <span className="mb-1 ml-1 text-[11px] font-extrabold tracking-wide text-[#5B98D6]">Kai</span>
        )}
        <div
          className={`rounded-[20px] px-4 py-3 text-[15px] font-semibold leading-relaxed ${
            isChild
              ? 'rounded-br-[6px] bg-[linear-gradient(135deg,_#2f8fff_0%,_#1260f0_100%)] text-white shadow-[0_10px_28px_rgba(22,111,240,0.32)]'
              : 'rounded-bl-[6px] bg-white text-[#102A56] shadow-[0_8px_24px_rgba(16,42,86,0.07)] ring-1 ring-sky-100/80'
          }`}
        >
          {message.text}
        </div>
        <div className="mt-1.5 flex items-center gap-1 text-[11px] font-bold text-[#8AA0BA]">
          <span>{message.time}</span>
          {isChild
            ? <Icon name="check" className="h-3.5 w-3.5 text-[#60AAFF]" />
            : <Icon name="heart" className="h-3.5 w-3.5 text-[#FF8FA8]" />}
        </div>
      </div>
      {isChild && (
        <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[linear-gradient(135deg,_#e8f4ff_0%,_#cce8ff_100%)] text-xl shadow-[0_8px_20px_rgba(16,42,86,0.1)] ring-2 ring-white">
          👦🏽
        </div>
      )}
    </article>
  )
}
