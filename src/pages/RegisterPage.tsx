import { AuthButton } from '../components/auth/AuthButton'
import { AuthBrand } from '../components/auth/AuthBrand'
import { AuthDecor } from '../components/auth/AuthDecor'
import { AuthInput } from '../components/auth/AuthInput'
import { AuthShell } from '../components/auth/AuthShell'
import { AuthStepper } from '../components/auth/AuthStepper'

export function RegisterPage() {
  return (
    <AuthShell>
      <div className="relative grid min-h-[calc(100vh-16px)] place-items-center overflow-hidden px-6 py-8 sm:min-h-[calc(100vh-24px)]">
        <AuthDecor />
        <div className="relative z-10 w-full max-w-[520px] rounded-[32px] bg-white/92 px-8 pb-9 pt-4 shadow-[0_20px_55px_rgba(16,42,86,0.08)] ring-1 ring-sky-100">
          <div className="mb-2 flex justify-center"><AuthBrand compact /></div>
          <AuthStepper step={1} />
          <div className="mt-10 text-center">
            <h1 className="text-3xl font-extrabold text-[#102A56]">¡Bienvenido a Glukai!</h1>
            <p className="mx-auto mt-3 max-w-sm text-base font-bold leading-relaxed text-[#102A56]">Crea tu cuenta para acompanar a tu pequeno en esta aventura.</p>
            <div className="mx-auto mt-7 grid h-32 w-64 place-items-center rounded-[28px] bg-[#EAF8FF] text-8xl shadow-inner">👨‍👩‍👦</div>
            <div className="mt-6 space-y-4">
              <AuthInput icon="user" placeholder="Tu nombre" />
              <AuthInput icon="mail" placeholder="Correo electronico" type="email" />
              <AuthInput icon="lock" placeholder="Contrasena" type="password" />
            </div>
            <AuthButton href="/register/child" className="mt-5 w-full">Continuar</AuthButton>
            <p className="mt-5 flex items-center justify-center gap-2 text-sm font-bold text-[#55709E]">🛡️ Tu informacion esta protegida</p>
            <p className="mt-6 text-sm font-bold">¿Ya tienes cuenta? <a href="/profiles" className="text-[#1677FF] underline">Inicia sesion</a></p>
          </div>
        </div>
      </div>
    </AuthShell>
  )
}
