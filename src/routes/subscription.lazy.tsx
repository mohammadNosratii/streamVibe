import { createLazyFileRoute } from '@tanstack/react-router'
import Subscription from '../pages/subscription'

export const Route = createLazyFileRoute('/subscription')({
  component: () => (
    <Subscription />
  )
})