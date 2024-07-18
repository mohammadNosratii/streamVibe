import { createFileRoute } from '@tanstack/react-router'
import Dashboard from '../../pages/dashboard'

export const Route = createFileRoute('/dashboard/subscription')({
  component: () => (
    <Dashboard>
      Welcome to Subscription
    </Dashboard>
  )
})