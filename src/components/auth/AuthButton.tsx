import { ReactNode } from 'react'

type Props = {
  href: string
  children: ReactNode
  className?: string
}

export function AuthButton({ href, children, className = '' }: Props) {
  return (
    <a href={href} className={`inline-flex h-14 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#1677FF,#075EEB)] px-8 text-base font-extrabold text-white shadow-[0_14px_28px_rgba(22,119,255,0.25)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_34px_rgba(22,119,255,0.30)] focus:outline-none focus:ring-4 focus:ring-[#BFE7FF] ${className}`}>
      {children}
    </a>
  )
}
