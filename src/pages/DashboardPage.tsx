import { BottomNav } from '../components/chat/BottomNav'
import { GlukaiImage } from '../components/chat/GlukaiImage'
import { Sidebar } from '../components/chat/Sidebar'
import { DashboardHeader } from '../components/dashboard/DashboardHeader'
import { EmotionHero } from '../components/dashboard/EmotionHero'
import { GlukaiQuote } from '../components/dashboard/GlukaiQuote'
import { NextMissionCard } from '../components/dashboard/NextMissionCard'
import { ProgressSummaryCard } from '../components/dashboard/ProgressSummaryCard'
import { QuickAccessGrid } from '../components/dashboard/QuickAccessGrid'

export function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#F8FCFF] font-sans text-[#102A56]">
      <div className="flex min-h-screen overflow-hidden rounded-none border-sky-100 bg-white/70 shadow-none lg:m-3 lg:min-h-[calc(100vh-24px)] lg:rounded-[28px] lg:border">
        <Sidebar activePath="/" />
        <main className="min-w-0 flex-1 px-4 pb-28 pt-5 sm:px-5 lg:pb-5 xl:px-6">
          <DashboardHeader />

          <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(680px,1fr)_400px] 2xl:grid-cols-[minmax(740px,1fr)_410px]">
            <section className="min-w-0 space-y-5">
              <EmotionHero />
              <QuickAccessGrid />
              <GlukaiQuote />
            </section>

            <aside className="space-y-4">
              <NextMissionCard />
              <ProgressSummaryCard />
              <section className="hidden rounded-[24px] bg-[#EAF5FF] p-5 text-center shadow-sm ring-1 ring-sky-100 lg:block">
                <GlukaiImage variant="chat" alt="Glukai siempre esta contigo" className="mx-auto h-28 w-28" />
                <p className="mt-3 text-base font-extrabold text-[#102A56]">Glukai siempre esta contigo 💙</p>
              </section>
            </aside>
          </div>
        </main>
      </div>
      <BottomNav activePath="/" />
    </div>
  )
}
