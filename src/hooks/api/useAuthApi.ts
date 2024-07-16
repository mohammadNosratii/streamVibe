import { useMutation } from "@tanstack/react-query";
import {
  loginApi,
  refreshLoginTokenApi,
  registerApi,
} from "../../services/api/authApi";
import { registerUserProps } from "../../interfaces/registerUser.interface";
import { loginUserProps } from "../../interfaces/loginUser.interface";
import { refreshTokenProp } from "../../interfaces/refreshToken.interface";
import Cookies from "js-cookie";
import { useNavigate } from "@tanstack/react-router";

export const useRegisterApi = () => {
  return useMutation({
    mutationFn: (payload: registerUserProps) => registerApi(payload),
  });
};

export const useLoginApi = () => {
  const navigate = useNavigate({ from: "/login" });

  return useMutation({
    mutationFn: (payload: loginUserProps) =>
      loginApi(payload).then((data) => data.data),
    onSuccess: (res) => {
      Cookies.set("accessToken", res.access);
      Cookies.set("refreshToken", res.refresh);
      navigate({ to: "/" });
    },
  });
};

export const useRefreshLoginTokenApi = () => {
  return useMutation({
    mutationFn: (payload: refreshTokenProp) => refreshLoginTokenApi(payload),
  });
};