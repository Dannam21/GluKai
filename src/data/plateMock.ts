export type DetectedFood = {
  id: string
  name: string
  description: string
  percent: number
  emoji: string
  color: string
}

export type ChallengeOption = {
  id: string
  name: string
  emoji: string
  selected?: boolean
}

export const detectedFoods: DetectedFood[] = [
  {
    id: 'rice',
    name: 'Arroz blanco',
    description: 'Fuente principal de carbohidratos',
    percent: 65,
    emoji: '🍚',
    color: 'text-[#6A35E8]',
  },
  {
    id: 'chicken',
    name: 'Pollo a la plancha',
    description: 'Fuente de proteinas',
    percent: 20,
    emoji: '🍗',
    color: 'text-[#21B65F]',
  },
  {
    id: 'avocado',
    name: 'Aguacate',
    description: 'Fuente de grasas saludables',
    percent: 10,
    emoji: '🥑',
    color: 'text-[#FF9F1A]',
  },
  {
    id: 'salad',
    name: 'Ensalada',
    description: 'Verduras y fibra',
    percent: 5,
    emoji: '🥗',
    color: 'text-[#1677FF]',
  },
]

export const challengeOptions: ChallengeOption[] = [
  { id: 'rice', name: 'Arroz', emoji: '🍚', selected: true },
  { id: 'avocado', name: 'Aguacate', emoji: '🥑' },
  { id: 'chicken', name: 'Pollo', emoji: '🍗' },
  { id: 'salad', name: 'Ensalada', emoji: '🥗' },
]
