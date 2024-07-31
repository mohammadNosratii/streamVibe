import { createLazyFileRoute } from '@tanstack/react-router'
import Shows from '../../pages/shows'

export const Route = createLazyFileRoute('/_main/shows/')({
  component: () => (
    <Shows />
  )
})