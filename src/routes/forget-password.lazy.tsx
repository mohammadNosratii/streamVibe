import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/forget-password')({
  component: () => <div>Hello /forget-password!</div>
})