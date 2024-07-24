import httpService from "../httpService";

const baseUrl = import.meta.env.VITE_BASE_DJANGO_API;
const baseEndPoint = "account/user/";

export const getUserInfoApi = () => {
  return httpService.get(baseUrl + baseEndPoint);
};
