import { createLazyFileRoute } from '@tanstack/react-router'
import Dashboard from '../../pages/dashboard/index'

export const Route = createLazyFileRoute('/dashboard/')({
  component: () => (
    <Dashboard>
      Welcome to dashboard
    </Dashboard>
  )
})