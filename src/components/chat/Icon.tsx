type IconProps = {
  name:
    | 'home'
    | 'map'
    | 'chat'
    | 'plate'
    | 'shield'
    | 'book'
    | 'star'
    | 'user'
    | 'help'
    | 'clock'
    | 'arrowLeft'
    | 'send'
    | 'mic'
    | 'heart'
    | 'check'
    | 'music'
    | 'breath'
    | 'close'
    | 'camera'
    | 'upload'
  className?: string
}

const paths: Record<IconProps['name'], string[]> = {
  home: ['M3 10.5 12 3l9 7.5', 'M5 10v10h14V10', 'M9 20v-6h6v6'],
  map: ['M5 4l5 2 5-2 4 2v14l-4-2-5 2-5-2-4 2V6z', 'M10 6v14', 'M15 4v14'],
  chat: ['M4 5h16v11H8l-4 4z'],
  plate: ['M7 3v18', 'M5 3v7a2 2 0 0 0 4 0V3', 'M16 3v18', 'M16 3c3 2 3 7 0 9'],
  shield: ['M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z'],
  book: ['M5 4h10a4 4 0 0 1 4 4v12H9a4 4 0 0 0-4-4z', 'M5 4v16'],
  star: ['M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z'],
  user: ['M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8z', 'M4 21a8 8 0 0 1 16 0'],
  help: ['M9.5 9a2.5 2.5 0 1 1 4 2c-.9.6-1.5 1.2-1.5 2.5', 'M12 18h.01', 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z'],
  clock: ['M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20z', 'M12 6v6l4 2'],
  arrowLeft: ['M19 12H5', 'M12 19l-7-7 7-7'],
  send: ['M4 12l16-8-5 16-3-7z', 'M12 13l8-9'],
  mic: ['M12 14a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v5a3 3 0 0 0 3 3z', 'M19 11a7 7 0 0 1-14 0', 'M12 18v3'],
  heart: ['M20 8.5c0 5-8 10.5-8 10.5S4 13.5 4 8.5A4.5 4.5 0 0 1 12 6a4.5 4.5 0 0 1 8 2.5z'],
  check: ['M5 13l4 4L19 7'],
  music: ['M9 18V5l10-2v13', 'M9 18a3 3 0 1 1-2-2.8', 'M19 16a3 3 0 1 1-2-2.8'],
  breath: ['M12 5c3 2 3 5 0 7-3-2-3-5 0-7z', 'M5 12c2-3 5-3 7 0-2 3-5 3-7 0z', 'M12 19c-3-2-3-5 0-7 3 2 3 5 0 7z', 'M19 12c-2 3-5 3-7 0 2-3 5-3 7 0z'],
  close: ['M6 6l12 12', 'M18 6L6 18'],
  camera: ['M4 8h4l2-3h4l2 3h4v11H4z', 'M12 17a4 4 0 1 0 0-8 4 4 0 0 0 0 8z'],
  upload: ['M12 16V4', 'M7 9l5-5 5 5', 'M5 20h14'],
}

export function Icon({ name, className = 'h-5 w-5' }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {paths[name].map((d) => (
        <path key={d} d={d} />
      ))}
    </svg>
  )
}
