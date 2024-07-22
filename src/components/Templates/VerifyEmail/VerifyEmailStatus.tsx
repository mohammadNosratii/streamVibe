import { Button } from "@nextui-org/react";
import { useResendEmailApi } from "../../../hooks/api/useAuthApi";
import { useLocation } from "@tanstack/react-router";

export default function VerifyEmailStatus() {
    const { search } = useLocation()
    // @ts-expect-error redirect is not a part of search structure as default
    const email = search.email
    const { mutate, isPending } = useResendEmailApi()

    const resendEmailHandler = () => {
        mutate({ email })
    }
    return (
        <div className="space-y-8">
            <h1 className="text-3xl md:text-5xl font-manropeBold dark:text-white">Verify Email</h1>
            <p className="text-gray-60 font-manropeMedium">Verification Link has been sent to your email. Please Verify your email to proceed your registeration </p>
            <Button className="w-full dark:bg-black-10" isLoading={isPending} onClick={resendEmailHandler}>Resend Email</Button>
        </div>
    )
}
