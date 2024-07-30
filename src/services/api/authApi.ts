import { loginUserProps } from "../../interfaces/loginUser.interface";
import { modifyUserProps } from "../../interfaces/modifyUser.interface";
import { refreshTokenProp } from "../../interfaces/refreshToken.interface";
import { registerUserProps } from "../../interfaces/registerUser.interface";
import { resetPasswordProps } from "../../interfaces/resetPassword.interface";
import { verifyTokenProps } from "../../interfaces/verifyToken.interface";
import httpService from "../httpService";

const baseUrl = import.meta.env.VITE_BASE_DJANGO_API;
const baseEndPoint = "account/";

export const registerApi = (payload: registerUserProps) => {
  return httpService.post(
    baseUrl + baseEndPoint + "registration/create",
    payload
  );
};

export const loginApi = (payload: loginUserProps) => {
  return httpService.post(baseUrl + baseEndPoint + "login/create/", payload);
};

export const refreshTokenApi = (payload: refreshTokenProp) => {
  return httpService.post(baseUrl + baseEndPoint + "login/refresh/", payload);
};

export const verifyTokenApi = (payload: verifyTokenProps) => {
  return httpService.post(baseUrl + baseEndPoint + "login/verify/", payload);
};

export const modifyUserApi = (payload: modifyUserProps, id: number) => {
  return httpService.put(baseUrl + baseEndPoint + `modify/${id}/`, payload);
};

export const resetPasswordApi = (payload: resetPasswordProps) => {
  return httpService.post(baseUrl + baseEndPoint + "reset-password/", payload);
};

export const resendEmailApi = (payload: { identifier: string }) => {
  return httpService.post(
    baseUrl + baseEndPoint + `registration/resend-activation`,
    payload
  );
};

export const verifyEmailApi = (payload: { uid: string; token: string }) => {
  return httpService.post(
    baseUrl + baseEndPoint + `registration/activation`,
    payload
  );
};

export const logoutApi = () => {
  return httpService.post(baseUrl + baseEndPoint + `logout/`);
};
