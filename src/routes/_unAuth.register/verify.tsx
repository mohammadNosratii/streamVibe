import { createFileRoute, redirect } from '@tanstack/react-router'
import VerifyRegister from '../../pages/register/verify'

export const Route = createFileRoute('/_unAuth/register/verify')({
    beforeLoad: async ({ search }) => {
        // @ts-expect-error redirect is not a part of search structure as default
        const { uid, token } = search
        if (!uid || !token) {
            throw redirect({
                to: "/register/"
            })
        }
    },
    component: () => <VerifyRegister />
})