import { useEffect, useState } from 'react'
import { ChatPage } from './pages/ChatPage'
import { DashboardPage } from './pages/DashboardPage'
import { MissionsPage } from './pages/MissionsPage'
import { PlatePage } from './pages/PlatePage'
import { PlaceholderPage } from './pages/PlaceholderPage'
import { ProfileSelectPage } from './pages/ProfileSelectPage'
import { RegisterChildPage } from './pages/RegisterChildPage'
import { RegisterDetailsPage } from './pages/RegisterDetailsPage'
import { RegisterInterestsPage } from './pages/RegisterInterestsPage'
import { RegisterPage } from './pages/RegisterPage'
import { WelcomePage } from './pages/WelcomePage'
import { BraveMomentPage } from './pages/BraveMomentPage'
import { DiaryPage } from './pages/DiaryPage'
import { ProfilePage } from './pages/ProfilePage'
import { RewardsPage } from './pages/RewardsPage'
import { CaregiverDashboardPage } from './pages/CaregiverDashboardPage'
import { CaregiverPinPage } from './pages/CaregiverPinPage'

export default function App() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const updatePath = () => setPath(window.location.pathname)
    window.addEventListener('popstate', updatePath)
    return () => window.removeEventListener('popstate', updatePath)
  }, [])

  if (path === '/') return <DashboardPage />
  if (path === '/welcome') return <WelcomePage />
  if (path === '/register') return <RegisterPage />
  if (path === '/register/child') return <RegisterChildPage />
  if (path === '/register/interests') return <RegisterInterestsPage />
  if (path === '/register/details') return <RegisterDetailsPage />
  if (path === '/profiles') return <ProfileSelectPage />
  if (path === '/chat') return <ChatPage />
  if (path === '/missions') return <MissionsPage />
  if (path === '/plate') return <PlatePage />
  if (path === '/brave-moment') return <BraveMomentPage />
  if (path === '/diary') return <DiaryPage />
  if (path === '/rewards') return <RewardsPage />
  if (path === '/profile') return <ProfilePage />
  if (path === '/register/caregiver-pin') return <CaregiverPinPage />
  if (path === '/caregiver/access') return <CaregiverPinPage access />
  if (path === '/caregiver') return <CaregiverDashboardPage />
  return <PlaceholderPage path={path} />
}
