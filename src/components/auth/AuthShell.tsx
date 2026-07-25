import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

export function AuthShell({ children }: Props) {
  return (
    <main className="min-h-screen bg-[linear-gradient(135deg,#DFF2FF_0%,#F8FCFF_46%,#EAF7FF_100%)] p-2 font-sans text-[#102A56] sm:p-3">
      <section className="min-h-[calc(100vh-16px)] overflow-hidden rounded-[30px] bg-white/96 shadow-[0_24px_70px_rgba(22,119,255,0.14)] ring-1 ring-white sm:min-h-[calc(100vh-24px)]">
        {children}
      </section>
    </main>
  )
}
