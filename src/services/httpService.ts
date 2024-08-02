import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

axios.interceptors.request.use(
  function (config) {
    const authToken = Cookies.get("authToken");

    if (authToken) {
      config.headers.Authorization = `Token ${authToken}`;
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
    // if (error.code === "ERR_NETWORK") {
    //   return toast.error("Unknown Error! Please try again later");
    // }
    const status = error?.response?.status;
    switch (status) {
      case 403: {
        toast.error(error.response.data.detail);
        break;
      }
      case 401: {
        toast.error(error.response.data.detail);
        break;
      }
      default: {
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
