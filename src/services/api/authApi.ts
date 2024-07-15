import { loginUserProps } from "../../interfaces/loginUser.interface";
import { refreshTokenProp } from "../../interfaces/refreshToken.interface";
import { registerUserProps } from "../../interfaces/registerUser.interface";
import httpService from "../httpService";

const baseUrl = import.meta.env.VITE_BASE_DJANGO_API;
const baseEndPoint = "account/";

export const registerApi = (payload: registerUserProps) => {
  return httpService.post(baseUrl + baseEndPoint + "register/", payload);
};

export const loginApi = (payload: loginUserProps) => {
  return httpService.post(baseUrl + baseEndPoint + "login/", payload);
};

export const refreshLoginTokenApi = (payload: refreshTokenProp) => {
  return httpService.post(baseUrl + baseEndPoint + "login/refresh/", payload);
};
