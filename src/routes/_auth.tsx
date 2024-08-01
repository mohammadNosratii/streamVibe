import { createFileRoute, Outlet } from '@tanstack/react-router'
import { authorizedBeforeLoad } from '../configs/beforeLoad'
import DashboardLayout from '../Layouts/DashboardLayout'

export const Route = createFileRoute('/_auth')({
    ...authorizedBeforeLoad,
    component: () =>
        <DashboardLayout>
            <Outlet />
        </DashboardLayout>
})