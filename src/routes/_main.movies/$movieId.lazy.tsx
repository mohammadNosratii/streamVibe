import { createLazyFileRoute } from '@tanstack/react-router'
import MovieDetailsPage from '../../pages/movies/[movieId]'

export const Route = createLazyFileRoute('/_main/movies/$movieId')({
  component: () => (
    <MovieDetailsPage />
  )
})