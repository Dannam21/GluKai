import { useEffect, useState } from 'react'
import { ChatPage } from './pages/ChatPage'
import { PlaceholderPage } from './pages/PlaceholderPage'

export default function App() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const updatePath = () => setPath(window.location.pathname)
    window.addEventListener('popstate', updatePath)
    return () => window.removeEventListener('popstate', updatePath)
  }, [])

  if (path === '/chat') return <ChatPage />
  return <PlaceholderPage path={path} />
}
