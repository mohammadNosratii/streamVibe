import { useMutation } from "@tanstack/react-query";
import {
  loginApi,
  modifyUserApi,
  refreshLoginTokenApi,
  registerApi,
  resetPasswordApi,
} from "../../services/api/authApi";
import { registerUserProps } from "../../interfaces/registerUser.interface";
import { loginUserProps } from "../../interfaces/loginUser.interface";
import { refreshTokenProp } from "../../interfaces/refreshToken.interface";
import Cookies from "js-cookie";
import { useNavigate } from "@tanstack/react-router";
import { modifyUserProps } from "../../interfaces/modifyUser.interface";
import { resetPasswordProps } from "../../interfaces/resetPassword.interface";
import toast from "react-hot-toast";
import { userSession } from "../../utils/userSession";

export const useRegisterApi = () => {
  // TODO should update register scenario to what next if registeration is successfull
  return useMutation({
    mutationFn: (payload: registerUserProps) =>
      registerApi(payload).then((data) => data.data),
    onSuccess: (res) => {
      toast.success(res.message);
    },
  });
};

export const useLoginApi = () => {
  const navigate = useNavigate({ from: "/login" });

  return useMutation({
    mutationFn: (payload: loginUserProps) =>
      loginApi(payload).then((data) => data.data),
    onSuccess: (res) => {
      userSession(true, res.access, res.refresh);
      toast.success("Logged in successfully");
      navigate({ to: "/" });
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
