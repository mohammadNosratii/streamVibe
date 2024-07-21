import { ParsedLocation, redirect } from "@tanstack/react-router";
import { isAuthenticated } from "../utils/isAuthenticated";

export const authorizedBeforeLoad = {
  beforeLoad: async ({ location }: { location: ParsedLocation }) => {
    if (!isAuthenticated()) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href || "/",
        },
      });
    }
  },
};

export const unAuthorizedBeforeLoad = {
  beforeLoad: async () => {
    if (isAuthenticated()) {
      throw redirect({
        to: "/",
      });
    }
  },
};
