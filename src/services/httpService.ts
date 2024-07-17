import axios from "axios";
import { refreshLoginTokenApi } from "./api/authApi";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

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
    const originalRequest = error.config;
    const refreshToken = Cookies.get("refreshToken");
    const status = error?.response?.status;

    switch (status) {
      case 401: {
        if (!originalRequest._retry) {
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
        break;
      }
      case 400: {
        const errorMessages: string[][] = Object.values(error.response.data);
        errorMessages.forEach((item: string[]) =>
          item.forEach((message: string) => {
            toast.error(message);
          })
        );
        break;
      }
    }
    return Promise.reject(error);
  }
);

const methods = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
};
export default methods;
