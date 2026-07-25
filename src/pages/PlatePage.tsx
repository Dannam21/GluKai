import { useState, useRef } from 'react'
import { BottomNav } from '../components/chat/BottomNav'
import { Sidebar } from '../components/chat/Sidebar'
import { DetectedFoodsCard } from '../components/plate/DetectedFoodsCard'
import { FoodPhotoCard } from '../components/plate/FoodPhotoCard'
import { PlateChallengeCard } from '../components/plate/PlateChallengeCard'
import { PlateRightPanel } from '../components/plate/PlateRightPanel'
import { analizarComida } from '../api'

export function PlatePage() {
  const [notice, setNotice] = useState('Lista para descubrir alimentos con Glukai.')
  const [respuestaKai, setRespuestaKai] = useState<string>('')
  const [imagenPreview, setImagenPreview] = useState<string>('')
  const [analizando, setAnalizando] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  async function procesarImagen(archivo: File) {
    // Mostrar preview de la foto
    setImagenPreview(URL.createObjectURL(archivo))
    setAnalizando(true)
    setRespuestaKai('')
    setNotice('Glukai está mirando tu plato...')
    try {
      const respuesta = await analizarComida(archivo)
      setRespuestaKai(respuesta)
      setNotice('¡Glukai analizó tu plato!')
    } catch {
      setRespuestaKai('Uy, no pude ver bien tu comida. ¿Intentamos de nuevo? 😅')
      setNotice('Hubo un problema al analizar.')
    } finally {
      setAnalizando(false)
    }
  }

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const archivo = e.target.files?.[0]
    if (archivo) procesarImagen(archivo)
  }

  function abrirSelector() {
    fileInputRef.current?.click()
  }

  return (
    <div className="min-h-screen bg-[#F8FCFF] font-sans text-[#102A56]">
      <div className="flex min-h-screen overflow-hidden rounded-none border-sky-100 bg-white/70 shadow-none lg:m-3 lg:min-h-[calc(100vh-24px)] lg:rounded-[28px] lg:border">
        <Sidebar activePath="/plate" />
        <main className="min-w-0 flex-1 px-4 pb-28 pt-6 sm:px-6 lg:pb-8 xl:px-8">

          {/* Input de archivo oculto */}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            capture="environment"
            onChange={handleFileChange}
            className="hidden"
          />

          {/* Header */}
          <header className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div>
              <div className="flex items-center gap-3">
                <span className="text-3xl">🍎</span>
                <h1 className="text-[2.4rem] font-extrabold leading-none text-[#102A56]">Mi plato</h1>
              </div>
              <p className="mt-2 text-base font-bold text-[#345184]">Toma una foto de tu comida y descubramos juntos qué alimentos hay.</p>
            </div>
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="flex h-[54px] items-center gap-2.5 rounded-[16px] bg-white px-4 shadow-[0_6px_18px_rgba(16,42,86,0.07)] ring-1 ring-sky-100">
                <span className="text-[22px]">🔥</span>
                <div className="leading-none">
                  <p className="text-[10px] font-extrabold uppercase tracking-wide text-[#48628E]">Racha</p>
                  <p className="mt-1 text-[16px] font-extrabold text-[#102A56]">5 días</p>
                </div>
              </div>
              <div className="flex h-[54px] items-center gap-2.5 rounded-[16px] bg-white px-4 shadow-[0_6px_18px_rgba(16,42,86,0.07)] ring-1 ring-sky-100">
                <span className="text-[22px]">⭐</span>
                <div className="leading-none">
                  <p className="text-[10px] font-extrabold uppercase tracking-wide text-[#48628E]">Estrellas</p>
                  <p className="mt-1 text-[16px] font-extrabold text-[#102A56]">320</p>
                </div>
              </div>
              <button className="flex h-[54px] items-center gap-2.5 rounded-[16px] bg-white px-4 shadow-[0_6px_18px_rgba(16,42,86,0.07)] ring-1 ring-sky-100 transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#BFE7FF]">
                <span className="text-[22px]">👦🏽</span>
                <div className="text-left leading-none">
                  <p className="text-[14px] font-extrabold text-[#102A56]">Mateo</p>
                  <p className="mt-1 text-[11px] font-bold text-[#48628E]">Nivel 4</p>
                </div>
                <svg className="ml-1 h-3.5 w-3.5 text-[#8AA0BA]" viewBox="0 0 12 8" fill="none">
                  <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </header>

          {/* Main grid */}
          <div className="mt-6 grid gap-5 xl:grid-cols-[minmax(0,1fr)_340px]">
            <section className="min-w-0 space-y-5">
              {/* Photo + Detected foods side by side */}
              <div className="grid gap-5 lg:grid-cols-2">
                <FoodPhotoCard
                  onTakePhoto={abrirSelector}
                  onUpload={abrirSelector}
                  imagenPreview={imagenPreview}
                />
                <DetectedFoodsCard
                  respuesta={respuestaKai}
                  analizando={analizando}
                />
              </div>
              {/* Challenge row */}
              <PlateChallengeCard />
            </section>

            <PlateRightPanel />
          </div>

          <p className="sr-only" aria-live="polite">{notice}</p>
        </main>
      </div>
      <BottomNav activePath="/plate" />
    </div>
  )
}