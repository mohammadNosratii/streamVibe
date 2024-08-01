import { createLazyFileRoute } from '@tanstack/react-router'
import DashboardSubscription from '../../pages/dashboard/subscription'

export const Route = createLazyFileRoute('/_auth/dashboard/subscription')({
  component: () => (
    <DashboardSubscription />
  )
})