import { createFileRoute, Outlet } from '@tanstack/react-router'
import { authorizedBeforeLoad } from '../../configs/beforeLoad'

export const Route = createFileRoute('/dashboard/_auth')({
    ...authorizedBeforeLoad,
    component: () => <Outlet />
})