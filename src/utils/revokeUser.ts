import Cookies from "js-cookie";

export const revokeUser = () => {
  try {
    Cookies.remove("accessToken");
    Cookies.remove("refreshToken");
  } catch (error) {
    console.log(error);
  }
};
