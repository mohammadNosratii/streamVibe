import { createLazyFileRoute } from '@tanstack/react-router'
import MovieId from '../../pages/movies/[movieId]'

export const Route = createLazyFileRoute('/movies/$movieId')({
  component: () => (
    <MovieId />
  )
})