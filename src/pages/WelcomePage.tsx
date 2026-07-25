import { AuthButton } from '../components/auth/AuthButton'
import { AuthBrand } from '../components/auth/AuthBrand'
import { AuthDecor } from '../components/auth/AuthDecor'
import { AuthShell } from '../components/auth/AuthShell'
import { GlukaiImage } from '../components/chat/GlukaiImage'
import { Icon } from '../components/chat/Icon'

export function WelcomePage() {
  return (
    <AuthShell>
      <div className="relative grid min-h-[calc(100vh-16px)] overflow-hidden bg-[#EAF8FF] sm:min-h-[calc(100vh-24px)] lg:grid-cols-[minmax(360px,470px)_1fr]">
        <AuthDecor />
        <div className="relative z-10 flex flex-col justify-center p-8 sm:p-12 lg:pl-14">
          <AuthBrand />
          <h2 className="mt-12 max-w-[390px] text-4xl font-extrabold leading-tight text-[#102A56] xl:text-[44px]">
            Tu companero para entender, aprender y sentirte bien 💗
          </h2>
          <p className="mt-6 max-w-sm text-base font-bold leading-relaxed text-[#102A56]">
            Glukai es un zorrito que acompana a los ninos con diabetes cada dia, ayudandolos a aprender, entender lo que sienten y superar retos juntos.
          </p>
          <div className="mt-8 space-y-5">
            {[
              ['🧠', 'Entiende lo que sientes', 'Expresa tus emociones libremente'],
              ['📗', 'Aprende jugando', 'Misiones divertidas y educativas'],
              ['⭐', 'Siempre contigo', 'Glukai te anima en cada paso'],
            ].map(([emoji, title, text]) => (
              <div key={title} className="flex items-start gap-4">
                <span className="text-3xl">{emoji}</span>
                <div>
                  <p className="font-extrabold text-[#102A56]">{title}</p>
                  <p className="text-sm font-bold text-[#345184]">{text}</p>
                </div>
              </div>
            ))}
          </div>
          <AuthButton href="/register" className="mt-10 w-full max-w-sm">
            ¡Comenzar aventura! <span className="ml-3">→</span>
          </AuthButton>
          <p className="mt-5 flex items-center gap-2 text-sm font-bold text-[#345184]">
            <Icon name="lock" className="h-4 w-4" /> Seguro, privado y hecho para ti
          </p>
        </div>
        <div className="relative min-h-[500px] lg:min-h-0">
          <div className="absolute bottom-0 left-0 right-0 h-40 bg-[linear-gradient(180deg,rgba(201,243,165,0)_0%,#C9F3A5_40%,#B7EC8F_100%)]" />
          <div className="absolute bottom-16 left-[10%] h-24 w-52 rounded-full bg-[#90D77A]/60" />
          <div className="absolute bottom-14 right-[12%] h-28 w-64 rounded-full bg-[#90D77A]/50" />
          <div className="absolute right-10 top-12 h-16 w-40 rounded-full bg-white/90" />
          <div className="absolute left-16 top-24 h-11 w-32 rounded-full bg-white/85" />
          <div className="absolute right-20 top-44 text-3xl text-[#9DD5FF]">♥</div>
          <div className="absolute left-10 top-72 text-2xl text-[#BFE7FF]">✦</div>
          <div className="absolute bottom-20 right-20 text-3xl">🌸</div>
          <div className="absolute bottom-24 left-20 text-2xl">🌼</div>
          <GlukaiImage variant="main" alt="Glukai saludando" className="absolute bottom-14 left-1/2 h-[min(58vw,560px)] w-[min(58vw,560px)] -translate-x-1/2" />
        </div>
      </div>
    </AuthShell>
  )
}
