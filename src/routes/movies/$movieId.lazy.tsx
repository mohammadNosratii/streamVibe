import { createLazyFileRoute } from '@tanstack/react-router'
import MoviesPageInfo from '../../components/Modules/Movie&ShowPageInfo/MoviePageInfo'
import allMoviesInfo from '../../mock/allMoviesInfo'

export const Route = createLazyFileRoute('/movies/$movieId')({
  component: () => (
    <MoviesPageInfo allMoviesData={allMoviesInfo()} />
  )
})