export type MoodOption = {
  id: string
  label: string
  emoji: string
  tone: string
}

export type QuickAccess = {
  id: string
  title: string
  subtitle: string
  href: string
  image: 'chat' | 'learning' | 'playing'
  icon: string
  tone: string
  buttonTone: string
}

export const moodOptions: MoodOption[] = [
  { id: 'great', label: 'Genial', emoji: '🙂', tone: 'bg-[#FFF4BE]' },
  { id: 'good', label: 'Bien', emoji: '🙂', tone: 'bg-[#BFEFA8]' },
  { id: 'normal', label: 'Normal', emoji: '😐', tone: 'bg-[#AEE0FF]' },
  { id: 'worried', label: 'Preocupado', emoji: '😟', tone: 'bg-[#FFD28B]' },
  { id: 'sad', label: 'Triste', emoji: '☹️', tone: 'bg-[#C8AFF7]' },
  { id: 'scared', label: 'Tengo miedo', emoji: '😡', tone: 'bg-[#FF9A9A]' },
]

export const quickAccessItems: QuickAccess[] = [
  {
    id: 'chat',
    title: 'Hablar con Glukai',
    subtitle: 'Cuentame lo que quieras',
    href: '/chat',
    image: 'chat',
    icon: '💬',
    tone: 'bg-[#F2ECFF]',
    buttonTone: 'bg-[#7B42F6]',
  },
  {
    id: 'plate',
    title: 'Mi plato',
    subtitle: 'Toma una foto y aprendamos juntos',
    href: '/plate',
    image: 'learning',
    icon: '📷',
    tone: 'bg-[#EAFBF4]',
    buttonTone: 'bg-[#31B873]',
  },
  {
    id: 'missions',
    title: 'Misiones',
    subtitle: 'Aprende jugando con Glukai',
    href: '/missions',
    image: 'playing',
    icon: '🎯',
    tone: 'bg-[#FFF2DA]',
    buttonTone: 'bg-[#FF9A2E]',
  },
  {
    id: 'brave',
    title: 'Momento valiente',
    subtitle: 'Respiramos juntos y tu puedes hacerlo',
    href: '/brave-moment',
    image: 'learning',
    icon: '🚀',
    tone: 'bg-[#E9F6FF]',
    buttonTone: 'bg-[#4D9BFF]',
  },
]
