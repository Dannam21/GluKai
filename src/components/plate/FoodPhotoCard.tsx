import { Icon } from '../chat/Icon'

type Props = {
  onTakePhoto: () => void
  onUpload: () => void
  imagenPreview?: string
}

export function FoodPhotoCard({ onTakePhoto, onUpload, imagenPreview }: Props) {
  return (
    <section className="flex flex-col rounded-[24px] bg-white p-5 shadow-sm ring-1 ring-[#D9CDFB]">
      <h2 className="text-lg font-extrabold text-[#4B21D6]">1. Toma una foto de tu plato</h2>

      {/* Photo area */}
      <div className="relative mt-4 flex-1 overflow-hidden rounded-[18px] bg-[linear-gradient(135deg,_#F5E6C8_0%,_#EDD5A3_100%)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.35),transparent_40%)]" />

        <div className="relative flex min-h-[240px] items-center justify-center p-6 lg:min-h-[220px]">
          {imagenPreview ? (
            /* Real photo from user */
            <img
              src={imagenPreview}
              alt="Tu plato"
              className="h-52 w-52 rounded-full object-cover shadow-[0_12px_32px_rgba(0,0,0,0.18)]"
            />
          ) : (
            /* Placeholder plate */
            <div className="relative grid h-52 w-52 place-items-center rounded-full bg-white shadow-[0_12px_32px_rgba(83,45,18,0.16),inset_0_0_0_8px_rgba(240,235,225,0.8)]">
              <div className="absolute inset-4 rounded-full bg-[#faf7f0]/60" />
              <span className="absolute left-7 top-7 text-5xl drop-shadow-sm">🍚</span>
              <span className="absolute right-8 top-10 text-5xl drop-shadow-sm">🍗</span>
              <span className="absolute bottom-10 left-9 text-4xl drop-shadow-sm">🥗</span>
              <span className="absolute bottom-10 right-9 text-4xl drop-shadow-sm">🥑</span>
              <span className="absolute bottom-20 left-[52px] text-3xl drop-shadow-sm">🥒</span>
            </div>
          )}

          {/* Camera overlay */}
          <button
            onClick={onTakePhoto}
            className="absolute bottom-5 left-5 grid h-12 w-12 place-items-center rounded-2xl bg-[#6A35E8] text-white shadow-[0_8px_18px_rgba(106,53,232,0.3)] transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#D9CCFF]"
            aria-label="Tomar foto"
          >
            <Icon name="camera" className="h-6 w-6" />
          </button>
        </div>
      </div>

      {/* Action buttons */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <button
          onClick={onTakePhoto}
          className="flex items-center gap-3 rounded-[16px] bg-[#F4EEFF] px-4 py-3.5 text-left transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#D9CCFF]"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#7B42F6] text-white">
            <Icon name="camera" className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-extrabold text-[#4B21D6]">Tomar foto</p>
            <p className="text-[11px] font-bold text-[#7B8CAA]">Usa la cámara</p>
          </div>
        </button>
        <button
          onClick={onUpload}
          className="flex items-center gap-3 rounded-[16px] bg-[#EAFBF2] px-4 py-3.5 text-left transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#B9F0D4]"
        >
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#35BE62] text-white">
            <Icon name="upload" className="h-4 w-4" />
          </span>
          <div className="min-w-0">
            <p className="text-sm font-extrabold text-[#14833B]">Subir imagen</p>
            <p className="text-[11px] font-bold text-[#7B8CAA]">Tu galería</p>
          </div>
        </button>
      </div>
    </section>
  )
}
