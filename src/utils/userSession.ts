import Cookies from "js-cookie";

export const userSession = (setToken: boolean, authToken?: string) => {
  try {
    switch (setToken) {
      case true: {
        if (authToken) {
          Cookies.set("authToken", authToken);
        }
        break;
      }
      case false: {
        Cookies.remove("authToken");
        break;
      }
      default:
        break;
    }
  } catch (error) {
    console.log("Error during User Session ==>", error);
  }
};
