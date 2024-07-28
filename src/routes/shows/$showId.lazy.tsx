import { createLazyFileRoute } from '@tanstack/react-router'
import ShowDetailsPage from '../../pages/shows/[showId]'

export const Route = createLazyFileRoute('/shows/$showId')({
    component: () => <ShowDetailsPage />
})