import { useState } from 'react'
import { BottomNav } from '../components/chat/BottomNav'
import { GlukaiImage } from '../components/chat/GlukaiImage'
import { Sidebar } from '../components/chat/Sidebar'
import { DetectedFoodsCard } from '../components/plate/DetectedFoodsCard'
import { FoodPhotoCard } from '../components/plate/FoodPhotoCard'
import { PlateChallengeCard } from '../components/plate/PlateChallengeCard'
import { PlateRightPanel } from '../components/plate/PlateRightPanel'

export function PlatePage() {
  const [notice, setNotice] = useState('Lista para descubrir alimentos con Glukai.')

  return (
    <div className="min-h-screen bg-[#F8FCFF] font-sans text-[#102A56]">
      <div className="flex min-h-screen overflow-hidden rounded-none border-sky-100 bg-white/70 shadow-none lg:m-3 lg:min-h-[calc(100vh-24px)] lg:rounded-[28px] lg:border">
        <Sidebar activePath="/plate" />
        <main className="min-w-0 flex-1 px-4 pb-28 pt-6 sm:px-6 lg:pb-8 xl:px-8">
          <header className="flex flex-col gap-4 xl:flex-row xl:items-start xl:justify-between">
            <div>
              <div className="flex items-center gap-4">
                <span className="text-4xl">🍎</span>
                <h1 className="text-4xl font-extrabold leading-tight text-[#102A56]">Mi plato</h1>
              </div>
              <p className="mt-2 text-base font-bold text-[#123D9B]">Toma una foto de tu comida y descubramos juntos que alimentos hay.</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              <div className="flex items-center gap-3 rounded-[20px] bg-white px-5 py-3 shadow-sm ring-1 ring-sky-100">
                <span className="text-3xl">🔥</span>
                <div><p className="text-sm font-extrabold text-[#36558D]">Racha</p><p className="text-2xl font-extrabold">5 dias</p></div>
              </div>
              <div className="flex items-center gap-3 rounded-[20px] bg-white px-5 py-3 shadow-sm ring-1 ring-sky-100">
                <span className="text-3xl">⭐</span>
                <div><p className="text-sm font-extrabold text-[#36558D]">Estrellas</p><p className="text-2xl font-extrabold">320</p></div>
              </div>
              <div className="flex items-center gap-3 rounded-[20px] bg-white px-5 py-3 shadow-sm ring-1 ring-sky-100">
                <span className="text-3xl">👦🏽</span>
                <div><p className="font-extrabold">Mateo</p><p className="text-sm font-bold text-[#36558D]">Nivel 4</p></div>
                <span className="ml-auto text-xl">⌄</span>
              </div>
            </div>
          </header>

          <div className="mt-7 grid gap-6 xl:grid-cols-[minmax(0,1fr)_360px]">
            <section className="min-w-0 space-y-6">
              <div className="grid gap-6 2xl:grid-cols-[minmax(0,1.12fr)_minmax(360px,.88fr)]">
                <FoodPhotoCard
                  onTakePhoto={() => setNotice('Camara lista: en la demo simulamos la foto del plato.')}
                  onUpload={() => setNotice('Imagen subida: Glukai ya esta revisando tu plato.')}
                />
                <DetectedFoodsCard />
              </div>
              <PlateChallengeCard />
              <div className="mx-auto hidden max-w-3xl items-center justify-around rounded-[28px] bg-white px-8 py-3 shadow-[0_12px_35px_rgba(16,42,86,0.08)] ring-1 ring-sky-100 md:flex xl:hidden">
                {['Inicio', 'Misiones', 'Mi plato', 'Diario', 'Premios'].map((item) => (
                  <span key={item} className={`text-sm font-extrabold ${item === 'Mi plato' ? 'rounded-2xl bg-[#F2ECFF] px-5 py-3 text-[#4B21D6]' : 'text-[#465B86]'}`}>{item}</span>
                ))}
              </div>
              <p className="sr-only" aria-live="polite">{notice}</p>
            </section>

            <PlateRightPanel />
          </div>
        </main>
      </div>
      <BottomNav activePath="/plate" />
    </div>
  )
}
