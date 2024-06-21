import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/movies/$movieId')({
  component: () => <div>Hello /movies/$movieId!</div>
})