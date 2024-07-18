import { createLazyFileRoute } from '@tanstack/react-router'
import ForgetPassword from '../pages/forget-password'

export const Route = createLazyFileRoute('/forget-password')({
  component: () => <ForgetPassword />
})