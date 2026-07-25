import { Mission } from '../../data/missionsMock'

type Props = {
  mission: Mission
}

export function MissionCard({ mission }: Props) {
  const locked = mission.locked

  return (
    <button className={`relative h-[168px] rounded-[18px] p-4 text-center shadow-[0_12px_26px_rgba(16,42,86,0.07)] ring-1 transition focus:outline-none focus:ring-4 focus:ring-[#BFE7FF] ${mission.active ? 'bg-[#F4FAFF] ring-2 ring-[#1677FF]' : locked ? 'bg-[#E8E8E8] ring-transparent' : 'bg-white ring-sky-100 hover:-translate-y-0.5'}`}>
      {mission.completed && <span className="absolute -right-2 -top-2 grid h-8 w-8 place-items-center rounded-full bg-[#26B96F] text-white shadow-sm">✓</span>}
      <span className={`mx-auto grid h-16 w-16 place-items-center rounded-2xl text-5xl ${locked ? 'bg-[#D9D9D9] text-[#526071]' : 'bg-[#F8FCFF]'}`}>{mission.icon}</span>
      <span className="mt-3 block min-h-[40px] text-sm font-extrabold leading-tight text-[#102A56]">{mission.title}</span>
      <span className="mt-2 flex justify-center gap-1 text-lg">
        {[0, 1, 2].map((star) => <span key={star} className={star < mission.stars ? 'text-[#FFB020]' : 'text-[#CAD5E7]'}>★</span>)}
      </span>
      {mission.active && <span className="absolute -bottom-3 left-1/2 grid h-12 w-12 -translate-x-1/2 place-items-center rounded-full bg-[#1677FF] text-xl text-white shadow-[0_12px_25px_rgba(22,119,255,0.28)]">▶</span>}
    </button>
  )
}
