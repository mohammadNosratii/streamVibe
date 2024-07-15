import { useMutation } from "@tanstack/react-query";
import {
  loginApi,
  refreshLoginTokenApi,
  registerApi,
} from "../../services/api/authApi";
import { registerUserProps } from "../../interfaces/registerUser.interface";
import { loginUserProps } from "../../interfaces/loginUser.interface";
import { refreshTokenProp } from "../../interfaces/refreshToken.interface";

export const useRegisterApi = () => {
  return useMutation({
    mutationFn: (payload: registerUserProps) => registerApi(payload),
  });
};

export const useLoginApi = () => {
  return useMutation({
    mutationFn: (payload: loginUserProps) => loginApi(payload),
  });
};

export const useRefreshLoginTokenApi = () => {
  return useMutation({
    mutationFn: (payload: refreshTokenProp) => refreshLoginTokenApi(payload),
  });
};
