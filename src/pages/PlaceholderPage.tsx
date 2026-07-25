import { BottomNav } from '../components/chat/BottomNav'
import { Sidebar } from '../components/chat/Sidebar'
import { Icon } from '../components/chat/Icon'

const routeNames: Record<string, string> = {
  '/': 'Inicio',
  '/missions': 'Misiones',
  '/plate': 'Mi plato',
  '/brave-moment': 'Momento valiente',
  '/diary': 'Diario',
  '/rewards': 'Premios',
  '/profile': 'Perfil',
  '/help': 'Ayuda',
}

export function PlaceholderPage({ path }: { path: string }) {
  const title = routeNames[path] ?? 'Modulo Glukai'

  return (
    <div className="min-h-screen bg-[#F8FCFF] font-sans">
      <div className="flex min-h-screen">
        <Sidebar activePath={path} />
        <main className="grid flex-1 place-items-center px-6 pb-28 lg:pb-6">
          <section className="max-w-md rounded-[32px] bg-white p-8 text-center shadow-sm ring-1 ring-sky-100">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-[#E9F6FF] text-[#1677FF]">
              <Icon name="map" className="h-7 w-7" />
            </div>
            <h1 className="mt-5 text-3xl font-extrabold text-[#102A56]">{title}</h1>
            <p className="mt-3 text-base font-bold leading-relaxed text-[#6F829E]">
              Esta ruta ya funciona como placeholder para la demo del hackaton.
            </p>
            <a href="/chat" className="mt-6 inline-flex rounded-2xl bg-[#1677FF] px-5 py-3 font-extrabold text-white shadow-sm transition hover:-translate-y-0.5 focus:outline-none focus:ring-4 focus:ring-[#BFE7FF]">
              Volver al chat
            </a>
          </section>
        </main>
      </div>
      <BottomNav activePath={path} />
    </div>
  )
}
