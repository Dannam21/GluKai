import { AuthButton } from '../components/auth/AuthButton'
import { AuthBrand } from '../components/auth/AuthBrand'
import { AuthDecor } from '../components/auth/AuthDecor'
import { AuthShell } from '../components/auth/AuthShell'
import { AuthStepper } from '../components/auth/AuthStepper'
import { GlukaiImage } from '../components/chat/GlukaiImage'
import { favoriteColors } from '../data/authMock'

export function RegisterDetailsPage() {
  return (
    <AuthShell>
      <div className="relative min-h-[calc(100vh-16px)] px-8 pb-10 sm:min-h-[calc(100vh-24px)]">
        <AuthDecor />
        <div className="absolute right-8 top-8 z-10"><AuthBrand compact /></div>
        <a href="/register/interests" className="absolute left-8 top-8 grid h-10 w-10 place-items-center rounded-full bg-[#E9F6FF] text-xl text-[#1677FF]">←</a>
        <AuthStepper step={3} />
        <div className="relative z-10 mx-auto mt-12 grid max-w-6xl items-center gap-12 lg:grid-cols-[minmax(420px,1fr)_420px]">
          <div className="rounded-[32px] bg-white/92 p-8 shadow-[0_20px_55px_rgba(16,42,86,0.08)] ring-1 ring-sky-100">
            <div className="text-center">
              <h1 className="text-3xl font-extrabold text-[#102A56]">¡Ultimos detalles!</h1>
              <p className="mt-2 text-base font-bold text-[#345184]">Para que Glukai sea aun mas especial</p>
            </div>
            <div className="mt-12">
              <p className="font-extrabold text-[#102A56]">¿Cual es su color favorito?</p>
              <div className="mt-5 flex flex-wrap gap-4">
                {favoriteColors.map((color, index) => (
                  <button key={color} className="grid h-12 w-12 place-items-center rounded-full bg-white shadow-sm ring-1 ring-[#D6E0EE]" aria-label={`Color favorito ${index + 1}`}>
                    <span className="grid h-9 w-9 place-items-center rounded-full text-white" style={{ backgroundColor: color }}>{index === 0 ? '✓' : ''}</span>
                  </button>
                ))}
              </div>
            </div>
            <label className="mt-10 block">
              <span className="font-extrabold text-[#102A56]">¿Hay algo mas que le guste o que Glukai deba saber?</span>
              <textarea maxLength={100} placeholder="Cuentale a Glukai..." className="mt-4 h-32 w-full resize-none rounded-xl border border-[#D6E0EE] p-5 text-sm font-bold outline-none focus:border-[#1677FF] focus:ring-4 focus:ring-[#BFE7FF]" />
              <span className="-mt-8 mr-4 block text-right text-sm font-bold text-[#8498B5]">0/100</span>
            </label>
            <AuthButton href="/register/caregiver-pin" className="mt-8 w-full max-w-sm">¡Comenzar aventura! 🎉</AuthButton>
          </div>
          <div className="relative rounded-[32px] bg-[#F8FCFF] p-8 text-center shadow-[0_20px_55px_rgba(16,42,86,0.06)] ring-1 ring-sky-100">
            <div className="absolute -left-8 top-12 text-2xl text-[#9DD5FF]">✦</div>
            <div className="absolute right-2 top-0 text-3xl text-[#9DD5FF]">✦</div>
            <GlukaiImage variant="playing" alt="Glukai feliz" className="mx-auto h-80 w-80" />
            <h2 className="mt-4 text-2xl font-extrabold text-[#102A56]">¡Genial, Mateo!</h2>
            <p className="mt-2 text-base font-bold text-[#345184]">Estoy muy feliz de ser tu companero en esta aventura.</p>
          </div>
        </div>
      </div>
    </AuthShell>
  )
}
