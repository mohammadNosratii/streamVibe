import { Button, Spinner } from "@nextui-org/react";
import {
  useVerifyEmailApi,
} from "../../../../hooks/api/useAuthApi";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export default function VerifyRegisterStatus() {
  const navigate = useNavigate();
  const { search } = useLocation();

  // @ts-expect-error uid and token is not a part of search structure as default
  const { uid, token } = search;

  const {
    isSuccess,
    mutate: verifyEmailMutate,
    isPending: verifyEmailPending,
  } = useVerifyEmailApi();


  useEffect(() => {
    if (uid && token) {
      verifyEmailMutate({ uid, token })
    }
  }, [token, uid, verifyEmailMutate])
  return (
    <>
      {verifyEmailPending ? (
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
