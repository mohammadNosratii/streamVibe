import axios from "axios";
import { refreshLoginTokenApi } from "./api/authApi";
import Cookies from "js-cookie";
import { revokeUser } from "../utils/revokeUser";

let isRefreshTokenFetching = false;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let failedApis: any[] = [];

axios.interceptors.request.use(
  function (config) {
    const accessToken = Cookies.get("accessToken");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    config.headers["Content-Type"] = "application/json";
    config.headers.Accept = "application/json";
    return config;
  },

  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    // FIXME should check if refreshTokoen scenario is completed
    try {
      const originalRequest = error.config;
      const refreshToken = Cookies.get("refreshToken");
      const status = error?.response?.status;

      if (status === 401 && !originalRequest._retry) {
        originalRequest._retry = true;
        if (!isRefreshTokenFetching) {
          failedApis.push(originalRequest);
          isRefreshTokenFetching = true;

          const response = await refreshLoginTokenApi({
            refresh: refreshToken,
          });
          if (response.status !== 200) {
            throw response;
          }
          if (response.data) {
            const { access } = response.data;
            Cookies.set("accessToken", access);

            if (failedApis.length > 0) {
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              const failedApiCalls = failedApis.map((api: any) => axios(api));
              await Promise.all(failedApiCalls);
              isRefreshTokenFetching = false;
              failedApis = [];
            }
          }
        } else {
          failedApis.push(originalRequest);
        }
      }
      return Promise.reject(error);
    } catch (err) {
      revokeUser();
      window.location.href = "/";
    }
  }
);

const methods = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
export default methods;
