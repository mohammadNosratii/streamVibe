import { createFileRoute } from '@tanstack/react-router'
import DashboardSubscription from '../../pages/dashboard/subscription'

export const Route = createFileRoute('/_auth/dashboard/subscription')({
  component: () => (
    <DashboardSubscription />
  )
})