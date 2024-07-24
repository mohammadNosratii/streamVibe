import { useMutation } from "@tanstack/react-query";
import { refreshTokenProp } from "../../interfaces/refreshToken.interface";
import { refreshTokenApi, verifyTokenApi } from "../../services/api/tokenApi";
import { verifyTokenProps } from "../../interfaces/verifyToken.interface";

export const useRefreshLoginTokenApi = () => {
  return useMutation({
    mutationFn: (payload: refreshTokenProp) => refreshTokenApi(payload),
  });
};

export const useVerifyTokenApi = () => {
  return useMutation({
    mutationFn: (payload: verifyTokenProps) => verifyTokenApi(payload),
  });
};
