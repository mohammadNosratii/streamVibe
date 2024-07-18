import { createLazyFileRoute } from '@tanstack/react-router'
import Dashboard from '../../pages/dashboard'

export const Route = createLazyFileRoute('/dashboard/editInfo')({
  component: () => (
    <Dashboard>
      Welcome to Edit Info
    </Dashboard>
  )
})