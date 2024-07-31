import { createFileRoute, redirect } from '@tanstack/react-router'
import VerifyEmail from '../pages/verify-email'
// import { emailRegex } from '../utils/combineEmailAndPhoneRegex'

export const Route = createFileRoute('/_unAuth/verify-email')({
    beforeLoad: async ({ search }) => {
        // @ts-expect-error redirect is not a part of search structure as default
        const identifier = search.identifier
        //TODO !emailRegex.test(identifier)
        if (!identifier) {
            throw redirect({
                to: "/register"
            })
        }
    },
    component: () => <VerifyEmail />
})