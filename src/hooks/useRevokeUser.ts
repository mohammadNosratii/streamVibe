import Cookies from "js-cookie";

export const useRevokeUser = () => {
  const revokeUser = () => {
    try {
      Cookies.remove("accessToken");
      Cookies.remove("refreshToken");
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };

  return { revokeUser };
};
