import { useMutation } from "@tanstack/react-query";
import { registerApi } from "../../services/api/authApi";
import { registerUserProps } from "../../interfaces/registerUser.interface";

export const usePostRegisterApi = () => {
  return useMutation({
    mutationFn: (payload: registerUserProps) => registerApi(payload),
  });
};
