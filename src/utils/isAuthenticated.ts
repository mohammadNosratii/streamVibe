import Cookies from "js-cookie";

export const isAuthenticated = () => {
  const accessToken = Cookies.get("accessToken");
  switch (Boolean(accessToken)) {
    case true: {
      return true;
    }
    case false: {
      return false;
    }
  }
};
