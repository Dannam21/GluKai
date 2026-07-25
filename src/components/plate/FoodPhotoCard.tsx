import { Icon } from '../chat/Icon'

type Props = {
  onTakePhoto: () => void
  onUpload: () => void
}

export function FoodPhotoCard({ onTakePhoto, onUpload }: Props) {
  return (
    <section className="rounded-[24px] bg-white p-6 shadow-sm ring-1 ring-[#D9CDFB]">
      <h2 className="text-2xl font-extrabold text-[#4B21D6]">1. Toma una foto de tu plato</h2>
      <div className="mt-7 grid gap-5 md:grid-cols-[1fr_190px]">
        <div className="relative overflow-hidden rounded-[22px] bg-[#F4D4A9] shadow-sm">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(255,255,255,.32),transparent_30%),linear-gradient(90deg,rgba(126,66,22,.18)_1px,transparent_1px)] bg-[length:100%_100%,34px_100%]" />
          <div className="relative grid min-h-[330px] place-items-center p-8">
            <div className="relative grid h-72 w-72 place-items-center rounded-full bg-white shadow-[0_18px_38px_rgba(83,45,18,0.18)]">
              <span className="absolute left-8 top-8 text-6xl">🍚</span>
              <span className="absolute right-10 top-12 text-6xl">🍗</span>
              <span className="absolute bottom-12 left-12 text-6xl">🥗</span>
              <span className="absolute bottom-12 right-12 text-6xl">🥑</span>
              <span className="absolute left-24 bottom-20 text-4xl">🥒</span>
              <span className="absolute right-24 bottom-20 text-4xl">🍅</span>
            </div>
            <button onClick={onTakePhoto} className="absolute bottom-8 left-9 grid h-16 w-16 place-items-center rounded-2xl bg-[#6A35E8] text-white shadow-[0_10px_20px_rgba(106,53,232,.25)] transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#D9CCFF]" aria-label="Tomar foto del plato">
              <Icon name="camera" className="h-8 w-8" />
            </button>
          </div>
        </div>

        <div className="grid content-center gap-5">
          <button onClick={onTakePhoto} className="rounded-[20px] bg-white p-5 text-left shadow-sm ring-1 ring-[#D9CDFB] transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#D9CCFF]">
            <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-[#7B42F6] text-white">
              <Icon name="camera" className="h-6 w-6" />
            </span>
            <span className="ml-4 align-middle text-base font-extrabold text-[#4B21D6]">Tomar foto</span>
            <span className="mt-4 block text-sm font-bold leading-relaxed text-[#465B86]">Usa la camara de tu dispositivo</span>
          </button>
          <button onClick={onUpload} className="rounded-[20px] bg-white p-5 text-left shadow-sm ring-1 ring-[#D9CDFB] transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#B9F0D4]">
            <span className="inline-grid h-12 w-12 place-items-center rounded-full bg-[#35BE62] text-white">
              <Icon name="upload" className="h-6 w-6" />
            </span>
            <span className="ml-4 align-middle text-base font-extrabold text-[#14833B]">Subir imagen</span>
            <span className="mt-4 block text-sm font-bold leading-relaxed text-[#465B86]">Elige una imagen de tu galeria</span>
          </button>
        </div>
      </div>
    </section>
  )
}
