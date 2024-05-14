import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/support')({
  component: () => <div>Hello /support!</div>
})