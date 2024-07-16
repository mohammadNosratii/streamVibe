import { loginUserProps } from "../../interfaces/loginUser.interface";
import { modifyUserProps } from "../../interfaces/modifyUser.interface";
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

export const modifyUserApi = (payload: modifyUserProps, id: number) => {
  return httpService.put(baseUrl + baseEndPoint + `modify/${id}/`, payload);
};
