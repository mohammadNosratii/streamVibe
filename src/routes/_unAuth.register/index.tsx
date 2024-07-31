import { createFileRoute } from '@tanstack/react-router'
import Register from '../../pages/register'

export const Route = createFileRoute('/_unAuth/register/')({
    component: () => (
        <Register />
    )
})