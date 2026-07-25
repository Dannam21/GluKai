import { Icon } from './Icon'
import { GlukaiImage } from './GlukaiImage'

export function BreathingModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-[#102A56]/25 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" aria-labelledby="breathing-title">
      <section className="relative w-full max-w-md rounded-[32px] bg-white p-6 text-center shadow-2xl">
        <button onClick={onClose} className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-[#F8FCFF] text-[#102A56] focus:outline-none focus:ring-4 focus:ring-[#BFE7FF]" aria-label="Cerrar ejercicio">
          <Icon name="close" className="h-5 w-5" />
        </button>
        <GlukaiImage variant="breathing" alt="Glukai respirando" className="mx-auto h-32 w-32" />
        <h2 id="breathing-title" className="mt-3 text-2xl font-extrabold text-[#102A56]">Respira conmigo</h2>
        <div className="mx-auto mt-5 grid h-40 w-40 place-items-center rounded-full bg-[#E9F6FF] text-center shadow-inner">
          <div className="h-24 w-24 animate-respira rounded-full bg-[#45D4E8]/70" />
        </div>
        <p className="mt-5 text-lg font-extrabold text-[#314A70]">Inhala 3 segundos.</p>
        <p className="mt-1 text-lg font-extrabold text-[#314A70]">Exhala 3 segundos.</p>
        <button onClick={onClose} className="mt-6 rounded-2xl bg-[#1677FF] px-6 py-3 font-extrabold text-white shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#BFE7FF]">
          Terminar ejercicio
        </button>
      </section>
    </div>
  )
}
