import { useMutation } from "@tanstack/react-query";
import {
  loginApi,
  modifyUserApi,
  refreshLoginTokenApi,
  registerApi,
  resendEmailApi,
  resetPasswordApi,
  verifyEmailApi,
} from "../../services/api/authApi";
import { registerUserProps } from "../../interfaces/registerUser.interface";
import { loginUserProps } from "../../interfaces/loginUser.interface";
import { refreshTokenProp } from "../../interfaces/refreshToken.interface";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { modifyUserProps } from "../../interfaces/modifyUser.interface";
import { resetPasswordProps } from "../../interfaces/resetPassword.interface";
import toast from "react-hot-toast";
import { userSession } from "../../utils/userSession";

export const useRegisterApi = () => {
  // TODO should update register scenario to what next if registeration is successfull
  const navigate = useNavigate();
  let email: string;

  return useMutation({
    mutationFn: (payload: registerUserProps) => {
      email = payload.email;
      return registerApi(payload).then((data) => data.data);
    },
    onSuccess: () => {
      toast.success("Successfull. Please Verify your email!");
      navigate({
        to: `/verify-email?email=${email}`,
      });
    },
  });
};

export const useLoginApi = () => {
  const navigate = useNavigate({ from: "/login" });
  const { search } = useLocation();

  return useMutation({
    mutationFn: (payload: loginUserProps) =>
      loginApi(payload).then((data) => data.data),
    onSuccess: (res) => {
      userSession(true, res.access, res.refresh);
      toast.success("Logged in successfully");
      // @ts-expect-error redirect is not a part of search structure as default
      navigate({ to: search.redirect || "/" });
    },
  });
};

export const useRefreshLoginTokenApi = () => {
  return useMutation({
    mutationFn: (payload: refreshTokenProp) => refreshLoginTokenApi(payload),
  });
};

export const useModifyUserApi = () => {
  return useMutation({
    mutationFn: ({ payload, id }: { payload: modifyUserProps; id: number }) =>
      modifyUserApi(payload, id),
  });
};

export const useResetPasswordApi = () => {
  return useMutation({
    mutationFn: (payload: resetPasswordProps) => resetPasswordApi(payload),
  });
};

export const useResendEmailApi = () => {
  return useMutation({
    mutationFn: (payload: { email: string }) => resendEmailApi(payload),
    onSuccess: () => {
      toast.success("Verification Link has been sent");
    },
  });
};

export const useVerifyEmailApi = () => {
  return useMutation({
    mutationFn: (payload: { key: string }) => verifyEmailApi(payload),
    onSuccess: (res) => {
      console.log("response =>", res);
      toast.success("Your Email has been verified.");
    },
  });
};
