import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/shows')({
  component: () => <div>Hello /shows!</div>
})