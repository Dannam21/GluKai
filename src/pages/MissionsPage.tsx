import { BottomNav } from '../components/chat/BottomNav'
import { GlukaiImage } from '../components/chat/GlukaiImage'
import { Sidebar } from '../components/chat/Sidebar'
import { MissionHeader } from '../components/missions/MissionHeader'
import { MissionWorldRow } from '../components/missions/MissionWorldRow'
import { MissionsRightPanel } from '../components/missions/MissionsRightPanel'
import { missionWorlds } from '../data/missionsMock'

export function MissionsPage() {
  return (
    <div className="min-h-screen bg-[#F8FCFF] font-sans text-[#102A56]">
      <div className="flex min-h-screen overflow-hidden rounded-none border-sky-100 bg-white/70 shadow-none lg:m-3 lg:min-h-[calc(100vh-24px)] lg:rounded-[28px] lg:border">
        <Sidebar activePath="/missions" />
        <main className="min-w-0 flex-1 px-4 pb-28 pt-7 sm:px-6 lg:pb-6 xl:px-7">
          <MissionHeader />
          <div className="mt-7 grid gap-6 xl:grid-cols-[minmax(760px,1fr)_390px] 2xl:grid-cols-[minmax(900px,1fr)_410px]">
            <section className="min-w-0 space-y-5">
              {missionWorlds.map((world) => <MissionWorldRow key={world.id} world={world} />)}
              <div className="relative flex items-center gap-5 overflow-hidden rounded-[24px] bg-[linear-gradient(135deg,_#1a6fff_0%,_#2f8fff_60%,_#56adff_100%)] px-6 py-4 shadow-[0_12px_32px_rgba(22,119,255,0.28)]">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.15),_transparent_55%)]" />
                <GlukaiImage variant="main" alt="Glukai" className="relative h-16 w-16 shrink-0 drop-shadow-md" />
                <div className="relative min-w-0">
                  <p className="text-base font-extrabold text-white">¡Dilo así, Mateo!</p>
                  <p className="mt-0.5 text-sm font-bold text-white/85">Cada misión que completas te hace más sabio y valiente. 🌟</p>
                </div>
              </div>
            </section>
            <MissionsRightPanel />
          </div>
        </main>
      </div>
      <BottomNav activePath="/missions" />
    </div>
  )
}
