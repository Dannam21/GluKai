import { Mission } from '../../data/missionsMock'

type Props = { mission: Mission }

export function MissionCard({ mission }: Props) {
  const locked = mission.locked

  return (
    <button
      className={`relative flex h-[132px] flex-col items-center rounded-[16px] px-3 py-3.5 text-center shadow-[0_6px_18px_rgba(16,42,86,0.07)] ring-1 transition focus:outline-none focus:ring-4 focus:ring-[#BFE7FF] ${
        mission.active
          ? 'bg-white ring-2 ring-[#1677FF]/35 shadow-[0_8px_24px_rgba(22,119,255,0.14)]'
          : locked
          ? 'bg-white/55 ring-transparent opacity-70'
          : 'bg-white ring-sky-100/80 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(16,42,86,0.11)]'
      }`}
    >
      {mission.completed && (
        <span className="absolute -right-1.5 -top-1.5 grid h-6 w-6 place-items-center rounded-full bg-[#26B96F] text-[11px] font-bold text-white shadow-sm">
          ✓
        </span>
      )}

      <span
        className={`grid h-11 w-11 place-items-center rounded-[12px] text-3xl ${
          locked ? 'bg-[#DDE3EC]' : mission.active ? 'bg-[#EFF6FF]' : 'bg-[#F2F8FF]'
        }`}
      >
        {locked ? '🔒' : mission.icon}
      </span>

      <span className="mt-2 flex-1 text-[11px] font-extrabold leading-snug text-[#102A56]">
        {mission.title}
      </span>

      <span className="mt-1.5 flex gap-0.5 text-sm">
        {[0, 1, 2].map((i) => (
          <span key={i} className={i < mission.stars ? 'text-[#FFB020]' : 'text-[#D4DDE8]'}>
            ★
          </span>
        ))}
      </span>

      {mission.active && (
        <span className="absolute -bottom-3 left-1/2 grid h-9 w-9 -translate-x-1/2 place-items-center rounded-full bg-[#1677FF] text-sm text-white shadow-[0_8px_20px_rgba(22,119,255,0.38)]">
          ▶
        </span>
      )}
    </button>
  )
}
