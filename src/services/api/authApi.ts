import { registerUserProps } from "../../interfaces/registerUser.interface";
import httpService from "../httpService";

const baseUrl = import.meta.env.VITE_BASE_DJANGO_API;
const baseEndPoint = "account/";

export const registerApi = (payload: registerUserProps) => {
  return httpService.post(baseUrl + baseEndPoint + "register/", payload);
};
