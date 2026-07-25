import { MissionWorld } from '../../data/missionsMock'
import { MissionCard } from './MissionCard'

type Props = {
  world: MissionWorld
}

export function MissionWorldRow({ world }: Props) {
  return (
    <section className={`grid gap-5 rounded-[28px] p-5 shadow-sm ring-1 ring-white/80 xl:grid-cols-[300px_1fr_48px] ${world.tone}`}>
      <div className="grid gap-5 sm:grid-cols-[130px_1fr] xl:grid-cols-[140px_1fr]">
        <div className="grid h-36 place-items-center rounded-[24px] bg-white/45 text-8xl">{world.icon}</div>
        <div className="flex flex-col justify-center">
          <span className={`mb-3 w-fit rounded-full px-4 py-1 text-sm font-extrabold text-white ${world.badgeTone}`}>{world.label}</span>
          <h2 className="text-3xl font-extrabold leading-tight text-[#102A56]">{world.title}</h2>
          <p className="mt-3 text-base font-bold leading-relaxed text-[#102A56]">{world.description}</p>
        </div>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {world.missions.map((mission) => <MissionCard key={mission.id} mission={mission} />)}
      </div>
      <button className="hidden h-12 w-12 place-self-center rounded-full bg-white text-2xl font-extrabold text-[#1677FF] shadow-sm transition hover:-translate-y-0.5 xl:grid">›</button>
    </section>
  )
}
