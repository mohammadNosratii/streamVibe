import Cookies from "js-cookie";

export const userSession = (
  setTokens: boolean,
  accessToken?: string,
  refreshToken?: string
) => {
  try {
    switch (setTokens) {
      case true: {
        if (accessToken && refreshToken) {
          Cookies.set("accessToken", accessToken);
          Cookies.set("refreshToken", refreshToken);
        }
        break;
      }
      case false: {
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        break;
      }
      default:
        break;
    }
  } catch (error) {
    console.log("Error during User Session ==>", error);
  }
};
