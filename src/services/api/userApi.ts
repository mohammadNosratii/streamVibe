import { editInfoProps } from "../../interfaces/editInfo.interface";
import httpService from "../httpService";

const baseUrl = import.meta.env.VITE_BASE_DJANGO_API;
const baseEndPoint = "account/profile/";

export const getUserInfoApi = () => {
  return httpService.get(baseUrl + baseEndPoint + `me`);
};

export const putUserInfoApi = (payload: editInfoProps) => {
  return httpService.put(baseUrl + baseEndPoint + `edit`, payload);
};
