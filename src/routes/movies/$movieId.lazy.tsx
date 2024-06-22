import { createLazyFileRoute } from '@tanstack/react-router'
import MoviesPageInfo from '../../components/Modules/Movie&ShowPageInfo/MoviePageInfo'

export const Route = createLazyFileRoute('/movies/$movieId')({
  component: () => (
    <MoviesPageInfo />
  )
})