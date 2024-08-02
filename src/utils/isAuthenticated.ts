import Cookies from "js-cookie";

export const isAuthenticated = () => {
  const authToken = Cookies.get("authToken");
  switch (Boolean(authToken)) {
    case true: {
      return true;
    }
    case false: {
      return false;
    }
    default: {
      return false;
    }
  }
};
