export type Emotion = 'Feliz' | 'Tranquilo' | 'Normal' | 'Preocupado' | 'Triste' | 'Tengo miedo'

export type ChatMessage = {
  id: number
  author: 'child' | 'glukai'
  text: string
  time: string
}

export type SuggestedActionItem = {
  id: 'breathing' | 'sensor' | 'mission' | 'continue'
  title: string
  subtitle: string
  image: string
  tone: string
}

export const glukaiAssets = {
  main: '/mascota.png',
  chat: '/mascota.png',
  breathing: '/mascota.png',
  learning: '/mascota.png',
  playing: '/mascota.png',
  sleeping: '/mascota.png',
}

export const emotions: Emotion[] = [
  'Feliz',
  'Tranquilo',
  'Normal',
  'Preocupado',
  'Triste',
  'Tengo miedo',
]

export const initialMessages: ChatMessage[] = [
  {
    id: 1,
    author: 'child',
    text: 'Estoy un poco nervioso porque mañana tengo que cambiar mi sensor y me da miedo que me duela',
    time: '09:32',
  },
  {
    id: 2,
    author: 'glukai',
    text: 'Gracias por contarme, es normal sentir miedo a veces. Estoy aqui contigo. ¿Quieres que veamos juntos como sera el cambio del sensor o prefieres hacer algo para sentirte mas tranquilo?',
    time: '09:33',
  },
]

export const suggestedActions: SuggestedActionItem[] = [
  {
    id: 'breathing',
    title: 'Respiremos juntos',
    subtitle: 'Para sentirte mejor',
    image: glukaiAssets.breathing,
    tone: 'bg-[#F2ECFF]',
  },
  {
    id: 'sensor',
    title: 'Explicame sobre mi sensor',
    subtitle: 'Te lo explico paso a paso',
    image: glukaiAssets.learning,
    tone: 'bg-[#E9F6FF]',
  },
  {
    id: 'mission',
    title: 'Hagamos una mision',
    subtitle: 'Aprendamos jugando',
    image: glukaiAssets.playing,
    tone: 'bg-[#EAFBF4]',
  },
  {
    id: 'continue',
    title: 'Quiero seguir hablando',
    subtitle: 'Cuentame mas',
    image: glukaiAssets.chat,
    tone: 'bg-[#FFF6DC]',
  },
]

export const previousChats = [
  { id: 1, title: 'Cambio de sensor', preview: 'Hablamos de respirar antes del cambio.', date: 'Hoy, 09:15' },
  { id: 2, title: 'Antes del colegio', preview: 'Compartiste que querias sentirte tranquilo.', date: 'Ayer, 18:40' },
  { id: 3, title: 'Mision del plato', preview: 'Repasamos alimentos y energia.', date: 'Lunes, 16:10' },
]
