import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/subscription')({
  component: () => <div>Hello /subscription!</div>
})