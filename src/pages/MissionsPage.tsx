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
              <div className="mx-auto flex max-w-3xl items-center justify-center gap-4 rounded-full bg-[#1677FF] px-6 py-3 text-center font-extrabold text-white shadow-[0_12px_28px_rgba(22,119,255,0.25)]">
                <GlukaiImage variant="chat" alt="" className="h-12 w-12" />
                ¡Sigue asi, Mateo! Cada mision te hace mas sabio y valiente. 💙 ✦
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
