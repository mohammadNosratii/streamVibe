import { createFileRoute } from '@tanstack/react-router'
import DashboardSubscription from '../../pages/dashboard/subscription'

export const Route = createFileRoute('/dashboard/_auth/subscription')({
  component: () => (
    <DashboardSubscription />
  )
})