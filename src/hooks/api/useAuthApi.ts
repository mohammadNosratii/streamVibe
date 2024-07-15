import { useMutation } from "@tanstack/react-query";
import { loginApi, registerApi } from "../../services/api/authApi";
import { registerUserProps } from "../../interfaces/registerUser.interface";
import { loginUserProps } from "../../interfaces/loginUser.interface";

export const useRegisterApi = () => {
  return useMutation({
    mutationFn: (payload: registerUserProps) => registerApi(payload),
  });
};

export const useLoginApi = () => {
  return useMutation({
    mutationFn: (payload: loginUserProps) => loginApi(payload),
  });
};
