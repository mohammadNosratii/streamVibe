import { createLazyFileRoute } from '@tanstack/react-router'
import MovieDetailsPage from '../../pages/movies/[movieId]'

export const Route = createLazyFileRoute('/movies/$movieId')({
  component: () => (
    <MovieDetailsPage />
  )
})