import { Button, Spinner } from "@nextui-org/react";
import {
  useResendEmailApi,
  useVerifyEmailApi,
} from "../../../hooks/api/useAuthApi";
import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";
import ArrowLeftIcon from "../../../assets/icons/ArrowLeft";

export default function VerifyEmailStatus() {
  const navigate = useNavigate();
  const { search } = useLocation();
  // @ts-expect-error redirect is not a part of search structure as default
  const { identifier, uid, token } = search;

  const hasUidAndToken = uid && token;

  const {
    isSuccess,
    mutate: verifyEmailMutate,
    isPending: verifyEmailPending,
  } = useVerifyEmailApi();

  const { mutate: resendEmailMutate, isPending: resendEmailPending } =
    useResendEmailApi();

  const resendEmailHandler = () => {
    resendEmailMutate({ identifier });
  };

  useEffect(() => {
    if (hasUidAndToken) {
      verifyEmailMutate({ uid, token });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uid, token]);
  return (
    <>
      {!hasUidAndToken ? (
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
      ) : verifyEmailPending ? (
        <div className="flex items-center gap-2 justify-center">
          <p className="text-2xl font-manropeSemiBold dark:text-white">
            Verifying
          </p>
          <Spinner color="danger" />
        </div>
      ) : isSuccess ? (
        <div className="space-y-4">
          <h1 className="font-manropeBold text-3xl dark:text-white">
            Congrats🎉
          </h1>
          <p className="font-manropeMedium text-gray-60">
            Your Email has been verified. The registeration is completed
          </p>
          <Button
            className="dark:bg-black-10 w-full"
            onClick={() => navigate({ to: "/login" })}
          >
            Login To Your Account
          </Button>
        </div>
      ) : (
        <div className="space-y-4">
          <h1 className="font-manropeBold text-3xl dark:text-white">Oops!</h1>
          <p className="font-manropeMedium text-gray-60">
            Your Email has not been verified. Please Try again later
          </p>
          <Button
            className="dark:bg-black-10 w-full"
            onClick={() => navigate({ to: "/register/" })}
          >
            Back To Registeration
          </Button>
        </div>
      )}
    </>
  );
}
