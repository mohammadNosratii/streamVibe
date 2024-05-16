import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/shows')({
  component: () => <div>Hello /show!</div>
})