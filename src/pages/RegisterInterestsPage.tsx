import { AuthButton } from '../components/auth/AuthButton'
import { AuthBrand } from '../components/auth/AuthBrand'
import { AuthDecor } from '../components/auth/AuthDecor'
import { AuthShell } from '../components/auth/AuthShell'
import { AuthStepper } from '../components/auth/AuthStepper'
import { GlukaiImage } from '../components/chat/GlukaiImage'
import { interests } from '../data/authMock'

export function RegisterInterestsPage() {
  return (
    <AuthShell>
      <div className="relative min-h-[calc(100vh-16px)] overflow-hidden px-8 pb-10 sm:min-h-[calc(100vh-24px)]">
        <AuthDecor />
        <div className="absolute right-8 top-8 z-10"><AuthBrand compact /></div>
        <a href="/register/child" className="absolute left-8 top-8 grid h-10 w-10 place-items-center rounded-full bg-[#E9F6FF] text-xl text-[#1677FF]">←</a>
        <AuthStepper step={3} />
        <div className="mx-auto mt-12 max-w-2xl text-center">
          <h1 className="text-3xl font-extrabold text-[#102A56]">¿Que cosas le gustan?</h1>
          <p className="mt-2 text-base font-bold text-[#345184]">Esto ayudara a Glukai a conocerlo mejor</p>
          <div className="mt-10 grid grid-cols-2 gap-5 sm:grid-cols-4">
            {interests.map((item) => (
              <button key={item.id} className={`relative h-32 rounded-[18px] bg-white p-4 text-center shadow-[0_12px_26px_rgba(16,42,86,0.06)] transition hover:-translate-y-0.5 hover:shadow-[0_16px_30px_rgba(16,42,86,0.09)] focus:outline-none focus:ring-4 focus:ring-[#BFE7FF] ${item.selected ? 'ring-2 ring-[#1677FF]' : 'ring-1 ring-[#D6E0EE]'}`}>
                {item.selected && <span className="absolute -right-2 -top-2 grid h-7 w-7 place-items-center rounded-full bg-[#1677FF] text-sm text-white">✓</span>}
                <span className="block text-4xl">{item.emoji}</span>
                <span className="mt-3 block text-sm font-extrabold text-[#102A56]">{item.label}</span>
              </button>
            ))}
          </div>
          <AuthButton href="/register/details" className="mt-16 w-full max-w-sm">Continuar</AuthButton>
        </div>
        <GlukaiImage variant="chat" alt="Glukai pensando" className="absolute -bottom-10 -left-12 h-64 w-64" />
      </div>
    </AuthShell>
  )
}
