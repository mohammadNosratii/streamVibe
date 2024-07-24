import { changePasswordProps } from "../../interfaces/changePassword.interface";
import httpService from "../httpService";

const baseUrl = import.meta.env.VITE_BASE_DJANGO_API;
const baseEndPoint = "account/password/";

export const changePasswordApi = (payload: changePasswordProps) => {
  return httpService.post(baseUrl + baseEndPoint + "change", payload);
};
