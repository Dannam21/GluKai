export type Interest = {
  id: string
  label: string
  emoji: string
  selected?: boolean
}

export const interests: Interest[] = [
  { id: 'games', label: 'Videojuegos', emoji: '🎮', selected: true },
  { id: 'sports', label: 'Deportes', emoji: '⚽' },
  { id: 'draw', label: 'Dibujar', emoji: '🎨', selected: true },
  { id: 'music', label: 'Musica', emoji: '🎵' },
  { id: 'animals', label: 'Animales', emoji: '🐾' },
  { id: 'space', label: 'Espacio', emoji: '🚀' },
  { id: 'read', label: 'Leer', emoji: '📖', selected: true },
  { id: 'cook', label: 'Cocinar', emoji: '🧑‍🍳' },
]

export const favoriteColors = ['#1677FF', '#72C957', '#8C5CF6', '#FF7286', '#FFBE3D', '#FF8E37']
