import { createLazyFileRoute } from '@tanstack/react-router'
import Movies from '../pages/movies/index'

export const Route = createLazyFileRoute('/movies')({
  component: () => (
    <Movies />
  )
})