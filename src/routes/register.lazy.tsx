import { createFileRoute } from '@tanstack/react-router'
import Register from "../pages/register/index"

export const Route = createFileRoute('/register')({
  component: () => (
    <Register />
  )
})