import { AuthButton } from '../components/auth/AuthButton'
import { AuthBrand } from '../components/auth/AuthBrand'
import { AuthDecor } from '../components/auth/AuthDecor'
import { AuthShell } from '../components/auth/AuthShell'
import { AuthStepper } from '../components/auth/AuthStepper'
import { GlukaiImage } from '../components/chat/GlukaiImage'

export function RegisterChildPage() {
  return (
    <AuthShell>
      <div className="relative min-h-[calc(100vh-16px)] overflow-hidden px-8 pb-10 sm:min-h-[calc(100vh-24px)]">
        <AuthDecor />
        <div className="absolute left-8 top-8 z-10"><AuthBrand compact /></div>
        <AuthStepper step={2} />
        <div className="mx-auto grid max-w-6xl items-center gap-10 pt-8 lg:grid-cols-[1fr_1fr]">
          <div className="relative min-h-[520px]">
          <span className="absolute left-10 top-10 text-6xl text-[#DFF3FF]">♡</span>
          <GlukaiImage variant="main" alt="Glukai esperando conocer al nino" className="absolute bottom-0 left-1/2 h-[460px] w-[460px] -translate-x-1/2" />
          <div className="absolute right-14 top-20 grid h-16 w-16 place-items-center rounded-full bg-white text-3xl shadow-sm ring-1 ring-sky-100">💗</div>
        </div>
        <div className="relative z-10 mx-auto w-full max-w-md rounded-[32px] bg-white/92 p-8 shadow-[0_20px_55px_rgba(16,42,86,0.08)] ring-1 ring-sky-100">
          <h1 className="text-center text-3xl font-extrabold text-[#102A56]">¿A quien acompanara Glukai?</h1>
          <p className="mt-3 text-center text-base font-bold text-[#345184]">Conozcamos a tu pequeno(a)</p>
          <div className="mt-14 space-y-8">
            <label className="block">
              <span className="text-base font-extrabold text-[#102A56]">¿Como se llama?</span>
              <input placeholder="Escribe su nombre" className="mt-3 h-14 w-full rounded-xl border border-[#D6E0EE] px-5 text-sm font-bold outline-none focus:border-[#1677FF] focus:ring-4 focus:ring-[#BFE7FF]" />
            </label>
            <label className="block">
              <span className="text-base font-extrabold text-[#102A56]">¿Cuantos anos tiene?</span>
              <select className="mt-3 h-14 w-full rounded-xl border border-[#D6E0EE] bg-white px-5 text-sm font-bold text-[#8498B5] outline-none focus:border-[#1677FF] focus:ring-4 focus:ring-[#BFE7FF]">
                <option>Selecciona su edad</option>
                <option>5 anos</option>
                <option>6 anos</option>
                <option>7 anos</option>
                <option>8 anos</option>
              </select>
            </label>
          </div>
          <AuthButton href="/register/interests" className="mt-16 w-full">Continuar</AuthButton>
        </div>
        </div>
      </div>
    </AuthShell>
  )
}
