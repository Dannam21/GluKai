import { AuthShell } from '../components/auth/AuthShell'
import { AuthBrand } from '../components/auth/AuthBrand'
import { AuthDecor } from '../components/auth/AuthDecor'
import { BottomNav } from '../components/chat/BottomNav'
import { GlukaiImage } from '../components/chat/GlukaiImage'
import { Icon } from '../components/chat/Icon'

export function ProfileSelectPage() {
  return (
    <AuthShell>
      <div className="relative grid min-h-[calc(100vh-16px)] place-items-center overflow-hidden px-8 pb-28 pt-10 text-center sm:min-h-[calc(100vh-24px)]">
        <AuthDecor />
        <div className="absolute left-8 top-8 z-10"><AuthBrand compact /></div>
        <div className="relative z-10 w-full">
          <h1 className="text-3xl font-extrabold text-[#102A56]">¿Quien va a entrar?</h1>
          <p className="mt-2 text-base font-bold text-[#345184]">Elige tu perfil para continuar</p>

        <div className="mx-auto mt-10 grid max-w-2xl gap-8 sm:grid-cols-2">
          <a href="/" className="relative rounded-[24px] bg-[#F8FCFF] p-7 shadow-[0_18px_42px_rgba(22,119,255,0.10)] ring-2 ring-[#1677FF] transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#BFE7FF]">
            <GlukaiImage variant="chat" alt="Perfil de Mateo" className="mx-auto h-44 w-44 rounded-full bg-[#E9F6FF]" />
            <span className="absolute right-8 top-32 grid h-12 w-12 place-items-center rounded-full bg-white text-2xl shadow-sm">💗</span>
            <h2 className="mt-5 text-2xl font-extrabold text-[#102A56]">Mateo</h2>
            <p className="mt-2 text-sm font-bold text-[#345184]">Mi aventura</p>
          </a>
          <a href="/caregiver/access" className="relative rounded-[24px] bg-white p-7 shadow-[0_18px_42px_rgba(16,42,86,0.07)] ring-1 ring-[#D6E0EE] transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#BFE7FF]">
            <div className="mx-auto grid h-44 w-44 place-items-center rounded-full bg-[#F8FCFF] text-8xl">👨‍👩</div>
            <span className="absolute right-8 top-32 grid h-12 w-12 place-items-center rounded-full bg-white text-2xl shadow-sm">🛡️</span>
            <h2 className="mt-5 text-2xl font-extrabold text-[#102A56]">Cuidador</h2>
            <p className="mt-2 text-sm font-bold text-[#345184]">Ver progreso</p>
          </a>
        </div>

        <div className="mx-auto mt-8 flex max-w-2xl gap-4 rounded-[18px] bg-[#E9F6FF] p-5 text-left">
          <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white text-[#1677FF]">
            <Icon name="lock" className="h-6 w-6" />
          </span>
          <div>
            <p className="font-extrabold text-[#102A56]">Acceso para cuidador protegido</p>
            <p className="mt-1 text-sm font-bold leading-relaxed text-[#345184]">Usa tu PIN de 4 digitos para ver el progreso y acompanar a tu pequeno.</p>
          </div>
        </div>
        <button className="mt-5 rounded-full bg-[#F3F7FC] px-8 py-3 text-sm font-extrabold text-[#345184]">Cerrar sesion ↪</button>
        </div>
      </div>
      <BottomNav activePath="/" />
    </AuthShell>
  )
}
