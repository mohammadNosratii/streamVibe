import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/movies-shows')({
  component: () => <div>Hello /movies-shows!</div>
})