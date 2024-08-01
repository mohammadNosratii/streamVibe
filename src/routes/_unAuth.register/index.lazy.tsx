import { createLazyFileRoute } from '@tanstack/react-router'
import Register from '../../pages/register'

export const Route = createLazyFileRoute('/_unAuth/register/')({
    component: () => (
        <Register />
    )
})