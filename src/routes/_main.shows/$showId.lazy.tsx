import { createLazyFileRoute } from '@tanstack/react-router'
import ShowDetailsPage from '../../pages/shows/[showId]'

export const Route = createLazyFileRoute('/_main/shows/$showId')({
    component: () => <ShowDetailsPage />
})