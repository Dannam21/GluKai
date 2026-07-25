import { MissionWorld } from '../../data/missionsMock'
import { MissionCard } from './MissionCard'

type Props = { world: MissionWorld }

const WORLD_VISUALS: Record<string, { top: string; mid: string; bottom: string }> = {
  body:     { top: '#26A882', mid: '#3DC8A4', bottom: '#A8EDD8' },
  food:     { top: '#E89020', mid: '#FFB030', bottom: '#FFE29A' },
  emotions: { top: '#D44870', mid: '#F07098', bottom: '#FFBFD5' },
  tools:    { top: '#4A44D4', mid: '#7A74F0', bottom: '#C0BCFF' },
}

export function MissionWorldRow({ world }: Props) {
  const v = WORLD_VISUALS[world.id] ?? WORLD_VISUALS.body

  return (
    <section className="flex overflow-hidden rounded-[28px] shadow-[0_10px_32px_rgba(16,42,86,0.09)] ring-1 ring-black/5">
      {/* Illustrated world panel */}
      <div
        className="relative hidden w-[168px] shrink-0 sm:flex flex-col items-center justify-center"
        style={{ background: `linear-gradient(160deg, ${v.top} 0%, ${v.mid} 55%, ${v.bottom} 100%)` }}
      >
        {/* Cloud puffs */}
        <div className="absolute left-3 top-6 h-5 w-12 rounded-full bg-white/30 blur-sm" />
        <div className="absolute right-4 top-10 h-3 w-8 rounded-full bg-white/20 blur-sm" />
        <div className="absolute left-6 top-14 h-2 w-6 rounded-full bg-white/15 blur-sm" />
        {/* Icon */}
        <span className="relative z-10 text-[72px] leading-none drop-shadow-lg">{world.icon}</span>
        {/* Ground strip */}
        <div className="absolute bottom-0 left-0 right-0 h-9 rounded-t-[20px] bg-white/20" />
        <div className="absolute bottom-0 left-0 right-0 h-4 bg-white/10" />
      </div>

      {/* Content */}
      <div className={`flex min-w-0 flex-1 flex-col p-5 ${world.tone}`}>
        <div className="mb-2.5 flex items-center gap-3">
          <span className={`rounded-full px-3 py-0.5 text-[11px] font-extrabold tracking-widest text-white ${world.badgeTone}`}>
            {world.label}
          </span>
          <div className="h-px flex-1 bg-[#102A56]/10" />
          <button className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-xl font-bold text-[#1677FF] shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
            ›
          </button>
        </div>

        <h2 className="text-[22px] font-extrabold leading-tight text-[#102A56]">{world.title}</h2>
        <p className="mt-1 mb-4 text-[13px] font-bold leading-relaxed text-[#5B7BA8]">{world.description}</p>

        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-4">
          {world.missions.map((mission) => (
            <MissionCard key={mission.id} mission={mission} />
          ))}
        </div>
      </div>
    </section>
  )
}
