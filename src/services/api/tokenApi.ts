import { refreshTokenProp } from "../../interfaces/refreshToken.interface";
import { verifyTokenProps } from "../../interfaces/verifyToken.interface";
import httpService from "../httpService";

const baseUrl = import.meta.env.VITE_BASE_DJANGO_API;
const baseEndPoint = "account/token/";

export const refreshTokenApi = (payload: refreshTokenProp) => {
  return httpService.post(baseUrl + baseEndPoint + "refresh/", payload);
};

export const verifyTokenApi = (payload: verifyTokenProps) => {
  return httpService.post(baseUrl + baseEndPoint + "verify/", payload);
};
