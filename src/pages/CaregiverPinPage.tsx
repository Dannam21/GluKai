import { useState } from 'react'
import { AuthBrand } from '../components/auth/AuthBrand'
import { AuthDecor } from '../components/auth/AuthDecor'
import { AuthShell } from '../components/auth/AuthShell'
import { GlukaiImage } from '../components/chat/GlukaiImage'

type Mode = 'create' | 'confirm' | 'success' | 'access'

export function CaregiverPinPage({ access = false }: { access?: boolean }) {
  const [mode, setMode] = useState<Mode>(access ? 'access' : 'create')
  const [pin, setPin] = useState('')
  const [createdPin, setCreatedPin] = useState('')
  const [error, setError] = useState('')

  const pressNumber = (number: string) => {
    if (pin.length < 4) {
      setPin((current) => current + number)
      setError('')
    }
  }

  const continueFlow = () => {
    if (pin.length !== 4) {
      setError('Ingresa los 4 dígitos para continuar')
      return
    }
    if (mode === 'create') {
      setCreatedPin(pin)
      setPin('')
      setMode('confirm')
      return
    }
    if (mode === 'confirm') {
      if (pin !== createdPin) {
        setError('Los PIN no coinciden. Inténtalo otra vez.')
        setPin('')
        return
      }
      window.localStorage.setItem('glukai-caregiver-pin', pin)
      setMode('success')
      return
    }
    const savedPin = window.localStorage.getItem('glukai-caregiver-pin') || '1234'
    if (pin === savedPin) window.location.href = '/caregiver'
    else {
      setError('El PIN no es correcto')
      setPin('')
    }
  }

  if (mode === 'success') {
    return (
      <AuthShell>
        <div className="relative grid min-h-[calc(100vh-16px)] place-items-center overflow-hidden px-5 py-8">
          <AuthDecor />
          <div className="relative z-10 w-full max-w-md rounded-[32px] bg-white/95 p-8 text-center shadow-[0_22px_55px_rgba(65,42,130,0.12)] ring-1 ring-[#E5DDF7]">
            <div className="mx-auto grid h-20 w-20 place-items-center rounded-full bg-[#9B72EF] text-4xl text-white">✓</div>
            <GlukaiImage variant="main" alt="Glukai celebra contigo" className="mx-auto mt-4 h-56 w-56" />
            <h1 className="text-3xl font-black text-[#11194E]">¡Todo listo!</h1>
            <p className="mt-3 font-extrabold text-[#405174]">Tu espacio de cuidador está protegido 💙</p>
            <p className="mt-4 text-sm font-bold leading-relaxed text-[#536380]">Usa tu PIN cada vez que quieras ver el progreso de Mateo.</p>
            <a href="/profiles" className="mt-7 block rounded-full bg-[linear-gradient(90deg,#7650E7,#913FE0)] py-3.5 font-black text-white shadow-lg">Entendido</a>
          </div>
        </div>
      </AuthShell>
    )
  }

  const isAccess = mode === 'access'
  return (
    <AuthShell>
      <div className="relative grid min-h-[calc(100vh-16px)] place-items-center overflow-hidden px-5 py-8">
        <AuthDecor />
        <div className="absolute left-7 top-7 z-10"><AuthBrand compact /></div>
        <a href={isAccess ? '/profiles' : '/register/details'} className="absolute left-7 top-24 z-10 grid h-11 w-11 place-items-center rounded-full bg-white text-xl font-black text-[#6546D7] shadow-sm ring-1 ring-[#E2D9F5]">←</a>

        <div className="relative z-10 w-full max-w-md rounded-[32px] bg-white/95 px-8 py-9 text-center shadow-[0_22px_55px_rgba(65,42,130,0.12)] ring-1 ring-[#E5DDF7]">
          <div className={`mx-auto grid h-20 w-20 place-items-center rounded-[24px] text-4xl text-white ${mode === 'confirm' ? 'bg-[#40C894]' : 'bg-[#8B5CE7]'}`}>
            {mode === 'confirm' ? '✓' : '🔒'}
          </div>
          <h1 className="mt-5 text-3xl font-black text-[#11194E]">
            {isAccess ? 'Acceso del cuidador' : mode === 'create' ? 'Protege tu espacio de cuidador 💜' : 'Confirma tu PIN'}
          </h1>
          <p className="mx-auto mt-3 max-w-sm text-sm font-bold leading-relaxed text-[#405174]">
            {isAccess ? 'Ingresa tu PIN para ver el progreso de Mateo.' : mode === 'create' ? 'Crea un PIN de 4 dígitos para acceder al resumen y progreso de tu pequeño.' : 'Ingresa nuevamente tu PIN de 4 dígitos.'}
          </p>

          <div className="mt-7 flex justify-center gap-5">
            {[0, 1, 2, 3].map((index) => <span key={index} className={`h-5 w-5 rounded-full border-2 ${index < pin.length ? 'border-[#8052E6] bg-[#8052E6]' : 'border-[#D7CDEF]'}`} />)}
          </div>
          {error && <p className="mt-3 text-sm font-extrabold text-rose-500">{error}</p>}

          <div className="mx-auto mt-7 grid max-w-[270px] grid-cols-3 gap-3">
            {['1','2','3','4','5','6','7','8','9'].map((number) => <button key={number} type="button" onClick={() => pressNumber(number)} className="h-14 rounded-[16px] bg-white text-xl font-black shadow-sm ring-1 ring-[#DFE3EC] transition hover:bg-[#F5F0FF]">{number}</button>)}
            <span />
            <button type="button" onClick={() => pressNumber('0')} className="h-14 rounded-[16px] bg-white text-xl font-black shadow-sm ring-1 ring-[#DFE3EC]">0</button>
            <button type="button" onClick={() => setPin((current) => current.slice(0, -1))} className="h-14 rounded-[16px] bg-[#EEE7FF] text-xl font-black text-[#7047D4]">⌫</button>
          </div>
          <button type="button" onClick={continueFlow} className="mt-7 w-full rounded-full bg-[linear-gradient(90deg,#7650E7,#913FE0)] py-3.5 font-black text-white shadow-lg">
            {isAccess ? 'Entrar al panel' : mode === 'create' ? 'Continuar' : 'Confirmar'}
          </button>
          <p className="mt-5 rounded-[14px] bg-[#F2ECFF] p-3 text-xs font-bold text-[#5B477E]">🔒 Tu PIN protege el espacio exclusivo para cuidadores.</p>
        </div>
      </div>
    </AuthShell>
  )
}
