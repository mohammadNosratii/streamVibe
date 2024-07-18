import { createFileRoute } from '@tanstack/react-router'
import DashboardSubscription from '../../pages/dashboard/subscription'

export const Route = createFileRoute('/dashboard/subscription')({
  component: () => (
    <DashboardSubscription />
  )
})