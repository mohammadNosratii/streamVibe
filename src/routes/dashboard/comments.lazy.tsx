import { createLazyFileRoute } from '@tanstack/react-router'
import Dashboard from '../../pages/dashboard'

export const Route = createLazyFileRoute('/dashboard/comments')({
  component: () => (
    <Dashboard>
      Welcome to comments
    </Dashboard>
  )
})