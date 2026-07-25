import { glukaiAssets } from '../../data/chatMock'

type Variant = 'main' | 'chat' | 'breathing' | 'learning' | 'playing' | 'sleeping'

type Props = {
  variant: Variant
  alt?: string
  className?: string
}

const imageByVariant: Record<Variant, string> = {
  main: glukaiAssets.main,
  chat: glukaiAssets.chat,
  breathing: glukaiAssets.breathing,
  learning: glukaiAssets.learning,
  playing: glukaiAssets.playing,
  sleeping: glukaiAssets.sleeping,
}

const poseByVariant: Record<Variant, string> = {
  main: 'rotate-0',
  chat: '-rotate-3',
  breathing: 'rotate-0 animate-respira',
  learning: 'rotate-3',
  playing: '-rotate-6',
  sleeping: 'rotate-[-8deg] scale-x-[-1]',
}

export function GlukaiImage({ variant, alt = '', className = '' }: Props) {
  return (
    <span className={`relative inline-grid place-items-center ${className}`}>
      <img src={imageByVariant[variant]} alt={alt} className={`h-full w-full object-contain drop-shadow-sm ${poseByVariant[variant]}`} />
    </span>
  )
}
