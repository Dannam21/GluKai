import { useEffect, useState } from 'react'
import { ChatPage } from './pages/ChatPage'
import { DashboardPage } from './pages/DashboardPage'
import { PlatePage } from './pages/PlatePage'
import { PlaceholderPage } from './pages/PlaceholderPage'

export default function App() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const updatePath = () => setPath(window.location.pathname)
    window.addEventListener('popstate', updatePath)
    return () => window.removeEventListener('popstate', updatePath)
  }, [])

  if (path === '/') return <DashboardPage />
  if (path === '/chat') return <ChatPage />
  if (path === '/plate') return <PlatePage />
  return <PlaceholderPage path={path} />
}
