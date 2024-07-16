import Cookies from "js-cookie";

export const revokeUser = () => {
  Cookies.remove("accessToken");
  Cookies.remove("refreshToken");
};
