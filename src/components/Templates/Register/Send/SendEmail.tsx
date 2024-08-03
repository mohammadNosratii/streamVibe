import { Link, useLocation } from "@tanstack/react-router";
import ArrowLeftIcon from "../../../../assets/icons/ArrowLeft";
import { Button } from "@nextui-org/react";
import { useResendEmailApi } from "../../../../hooks/api/useAuthApi";

export default function SendEmailStatus() {
    const { search } = useLocation();
    // @ts-expect-error identifier is not a part of search structure as default
    const { identifier } = search

    const { mutate: resendEmailMutate, isPending: resendEmailPending } =
        useResendEmailApi();

    const resendEmailHandler = () => {
        resendEmailMutate({ identifier });
    };
    return (
        <div className="space-y-8">
            <Link
                to="/login"
                className="text-sm font-manropeMedium text-gray-60 flex items-center gap-1.5 hover:text-black-6 dark:hover:text-white transition-colors"
            >
                <ArrowLeftIcon />
                <span>Back to Login</span>
            </Link>
            <h1 className="text-3xl md:text-5xl font-manropeBold dark:text-white">
                Verify Email
            </h1>
            <p className="text-gray-60 font-manropeMedium">
                Verification Link has been sent to your email. Please Verify your
                email to proceed your registeration{" "}
            </p>
            <Button
                className="w-full dark:bg-black-10"
                isLoading={resendEmailPending}
                onClick={resendEmailHandler}
            >
                Resend Email
            </Button>
        </div>
    )
}
