import { useMutation } from "@tanstack/react-query";
import {
  loginApi,
  logoutApi,
  modifyUserApi,
  refreshTokenApi,
  registerApi,
  resendEmailApi,
  resetPasswordApi,
  verifyEmailApi,
  verifyTokenApi,
} from "../../services/api/authApi";
import { registerUserProps } from "../../interfaces/registerUser.interface";
import { loginUserProps } from "../../interfaces/loginUser.interface";
import { useLocation, useNavigate } from "@tanstack/react-router";
import { modifyUserProps } from "../../interfaces/modifyUser.interface";
import { resetPasswordProps } from "../../interfaces/resetPassword.interface";
import toast from "react-hot-toast";
import { userSession } from "../../utils/userSession";
import { refreshTokenProp } from "../../interfaces/refreshToken.interface";
import { verifyTokenProps } from "../../interfaces/verifyToken.interface";

export const useRegisterApi = () => {
  const navigate = useNavigate();
  let identifier: string | undefined;

  return useMutation({
    mutationFn: (payload: registerUserProps) => {
      identifier = payload.email;
      return registerApi(payload).then((data) => data.data);
    },
    onSuccess: () => {
      toast.success("Successfull. Please Verify your email!");
      navigate({
        to: `/register/verify?identifier=${identifier}`,
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
      userSession(true, res.auth_token, res.auth_token);
      toast.success("Logged in successfully");
      // @ts-expect-error redirect is not a part of search structure as default
      navigate({ to: search.redirect || "/" });
    },
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
    mutationFn: (payload: { identifier: string }) => resendEmailApi(payload),
    onSuccess: () => {
      toast.success("Verification Link has been sent");
    },
  });
};

export const useVerifyEmailApi = () => {
  return useMutation({
    mutationFn: (payload: { uid: string; token: string }) =>
      verifyEmailApi(payload),
    onSuccess: (res) => {
      console.log("response =>", res);
      toast.success("Your Email has been verified.");
    },
  });
};

export const useLogoutApi = () => {
  return useMutation({
    mutationFn: () => logoutApi(),
    onSuccess: () => {
      toast.success("Logged out successfully");
      userSession(false);
      window.location.reload();
    },
  });
};
export const useRefreshLoginTokenApi = () => {
  return useMutation({
    mutationFn: (payload: refreshTokenProp) => refreshTokenApi(payload),
  });
};

export const useVerifyTokenApi = () => {
  return useMutation({
    mutationFn: (payload: verifyTokenProps) => verifyTokenApi(payload),
  });
};
