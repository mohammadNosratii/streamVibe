import { loginUserProps } from "../../interfaces/loginUser.interface";
import { modifyUserProps } from "../../interfaces/modifyUser.interface";
import { registerUserProps } from "../../interfaces/registerUser.interface";
import { resetPasswordProps } from "../../interfaces/resetPassword.interface";
import httpService from "../httpService";

const baseUrl = import.meta.env.VITE_BASE_DJANGO_API;
const baseEndPoint = "account/auth/";

export const registerApi = (payload: registerUserProps) => {
  return httpService.post(baseUrl + baseEndPoint + "registration/", payload);
};

export const loginApi = (payload: loginUserProps) => {
  return httpService.post(baseUrl + baseEndPoint + "login/", payload);
};


export const modifyUserApi = (payload: modifyUserProps, id: number) => {
  return httpService.put(baseUrl + baseEndPoint + `modify/${id}/`, payload);
};

export const resetPasswordApi = (payload: resetPasswordProps) => {
  return httpService.post(baseUrl + baseEndPoint + "reset-password/", payload);
};

export const resendEmailApi = (payload: { email: string }) => {
  return httpService.post(
    baseUrl + baseEndPoint + `registration/resend-email`,
    payload
  );
};

export const verifyEmailApi = (payload: { key: string }) => {
  return httpService.post(
    baseUrl + baseEndPoint + `registration/verify-email`,
    payload
  );
};

export const logoutApi = () => {
  return httpService.post(baseUrl + baseEndPoint + `logout/`);
};
