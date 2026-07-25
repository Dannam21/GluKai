export type Mission = {
  id: string
  title: string
  icon: string
  stars: number
  completed?: boolean
  active?: boolean
  locked?: boolean
}

export type MissionWorld = {
  id: string
  label: string
  title: string
  description: string
  icon: string
  tone: string
  badgeTone: string
  missions: Mission[]
}

export const missionWorlds: MissionWorld[] = [
  {
    id: 'body',
    label: 'MUNDO 1',
    title: 'Conoce tu cuerpo',
    description: 'Descubre como funciona tu cuerpo y la diabetes.',
    icon: '🏞️',
    tone: 'bg-[#EAF8F7]',
    badgeTone: 'bg-[#26B96F]',
    missions: [
      { id: 'glucose', title: '¿Que es la glucosa?', icon: '🩸', stars: 3, completed: true },
      { id: 'energy', title: 'La llave de la energia', icon: '🔑', stars: 3, completed: true },
      { id: 'insulin', title: '¿Que hace la insulina?', icon: '💧', stars: 0, active: true },
      { id: 'secret', title: 'Tu superpoder secreto', icon: '🔒', stars: 0, locked: true },
    ],
  },
  {
    id: 'food',
    label: 'MUNDO 2',
    title: 'Descubre tu comida',
    description: 'Aprende sobre los alimentos y como te dan energia.',
    icon: '🥗',
    tone: 'bg-[#FFF7E4]',
    badgeTone: 'bg-[#FFB022]',
    missions: [
      { id: 'carbs', title: 'Encuentra los carbohidratos', icon: '🫐', stars: 3, completed: true },
      { id: 'plate', title: 'Foto de mi plato', icon: '📷', stars: 2 },
      { id: 'balance', title: 'Equilibra tu plato', icon: '🔒', stars: 0, locked: true },
      { id: 'chef', title: 'Verdadero chef saludable', icon: '🔒', stars: 0, locked: true },
    ],
  },
  {
    id: 'emotions',
    label: 'MUNDO 3',
    title: 'Mis emociones',
    description: 'Entiende lo que sientes y aprende a manejarlo.',
    icon: '💗',
    tone: 'bg-[#FFF1EF]',
    badgeTone: 'bg-[#FF6D92]',
    missions: [
      { id: 'feeling', title: '¿Que estoy sintiendo?', icon: '🦊', stars: 3, completed: true },
      { id: 'breath', title: 'Respiramos con Glukai', icon: '🧘', stars: 2 },
      { id: 'fear', title: 'Cuando tengo miedo', icon: '🔒', stars: 0, locked: true },
      { id: 'diary', title: 'Diario de mis emociones', icon: '🔒', stars: 0, locked: true },
    ],
  },
  {
    id: 'tools',
    label: 'MUNDO 4',
    title: 'Mis herramientas',
    description: 'Conoce tus herramientas y como usarlas con confianza.',
    icon: '🎒',
    tone: 'bg-[#EEF6FF]',
    badgeTone: 'bg-[#6157E8]',
    missions: [
      { id: 'sensor', title: 'Conoce tu sensor', icon: '🩺', stars: 3, completed: true },
      { id: 'how', title: '¿Como funciona?', icon: '🔒', stars: 0, locked: true },
      { id: 'brave', title: 'Momento valiente', icon: '🔒', stars: 0, locked: true },
      { id: 'together', title: 'Cuidemos juntos', icon: '🔒', stars: 0, locked: true },
    ],
  },
]

export const progressStats = [
  { icon: '🧍', value: '12/18', tone: 'bg-[#EAFBF4]' },
  { icon: '🍎', value: '8/14', tone: 'bg-[#FFF6DC]' },
  { icon: '💗', value: '6/12', tone: 'bg-[#FFEAF1]' },
  { icon: '🚀', value: '9/10', tone: 'bg-[#E9F6FF]' },
]

export const badges = [
  ['🌿', 'Explorador'],
  ['📖', 'Aprendiz'],
  ['💗', 'Valiente'],
  ['🏅', 'Experto'],
]
