import { createLazyFileRoute } from '@tanstack/react-router'
import Support from '../pages/support'

export const Route = createLazyFileRoute('/support')({
  component: () => <Support />
})