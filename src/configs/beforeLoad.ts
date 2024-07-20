import { redirect } from "@tanstack/react-router";
import { isAuthenticated } from "../utils/isAuthenticated";

export const authorizedBeforeLoad = {
  beforeLoad: async () => {
    if (!isAuthenticated()) {
      throw redirect({
        to: "/",
      });
    }
  },
};
