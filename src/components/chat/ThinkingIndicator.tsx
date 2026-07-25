import { useEffect, useState } from 'react'

const thinkingFrames = ['/pensando/image.png', '/pensando/image2.png', '/pensando/image3.png']

export function ThinkingIndicator() {
  const [frameIndex, setFrameIndex] = useState(0)

  useEffect(() => {
    const timer = window.setInterval(() => {
      setFrameIndex((current) => (current + 1) % thinkingFrames.length)
    }, 220)

    return () => window.clearInterval(timer)
  }, [])

  return (
    <div className="flex w-fit items-center gap-3 rounded-[22px] bg-white px-4 py-3 shadow-sm ring-1 ring-sky-100">
      <img
        src={thinkingFrames[frameIndex]}
        alt="Glukai pensando"
        className="h-14 w-14 object-contain drop-shadow-sm"
      />
      <div>
        <p className="text-sm font-extrabold text-[#102A56]">Glukai esta pensando...</p>
        <p className="text-xs font-bold text-[#7B8CA6]">Preparando una respuesta para ti</p>
      </div>
    </div>
  )
}
