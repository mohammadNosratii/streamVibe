import { createFileRoute, redirect } from '@tanstack/react-router'
import SendEmailRegister from '../../pages/register/send'

export const Route = createFileRoute('/_unAuth/register/send')({
    beforeLoad: async ({ search }) => {
        // @ts-expect-error redirect is not a part of search structure as default
        const { identifier } = search
        if (!identifier) {
            throw redirect({
                to: "/register/"
            })
        }
    },
    component: () => <SendEmailRegister />
})